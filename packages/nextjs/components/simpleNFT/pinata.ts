import axios from "axios";

const PINATA_API_KEY = "6226e595682a4e3a3562";
const PINATA_SECRET_API_KEY = "42cddcfb40dc6f93ae184b89660a248783fed953f4135029f1ed2ad708bc6727";
const PINATA_FILE_UPLOAD_URL = "https://api.pinata.cloud/pinning/pinFileToIPFS";
const PINATA_GATEWAY_URL = "https://gateway.pinata.cloud/ipfs/";

export async function uploadFileToPinata(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const metadata = JSON.stringify({
    name: file.name,
  });
  formData.append("pinataMetadata", metadata);

  const options = JSON.stringify({
    cidVersion: 0,
  });
  formData.append("pinataOptions", options);

  try {
    const response = await axios.post(PINATA_FILE_UPLOAD_URL, formData, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${(formData as any)._boundary}`,
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_SECRET_API_KEY,
      },
    });

    if (response.status !== 200) {
      throw new Error(`Failed to upload file: ${response.statusText}`);
    }

    return `${PINATA_GATEWAY_URL}${response.data.IpfsHash}`;
  } catch (error) {
    console.error("Error uploading file to Pinata:", error);
    throw error;
  }
}

export async function uploadToPinata(json: object): Promise<string> {
  const headers = {
    "Content-Type": "application/json",
    pinata_api_key: PINATA_API_KEY,
    pinata_secret_api_key: PINATA_SECRET_API_KEY,
  };

  try {
    const response = await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", json, { headers });

    if (response.status !== 200) {
      throw new Error(`Failed to upload JSON: ${response.statusText}`);
    }

    const data = response.data;
    return `${PINATA_GATEWAY_URL}${data.IpfsHash}`;
  } catch (error) {
    console.error("Error uploading JSON to Pinata:", error);
    throw error;
  }
}

export default uploadToPinata;
