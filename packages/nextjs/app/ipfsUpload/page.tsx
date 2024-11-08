"use client";

import { useState } from "react";
import type { NextPage } from "next";
import { uploadFileToPinata } from "~~/components/simpleNFT/pinata";

const Page: NextPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [ipfsHash, setIpfsHash] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUploadToIpfs = async () => {
    if (!selectedFile) {
      alert("Please select a file to upload.");
      return;
    }

    setUploading(true);

    try {
      const hash = await uploadFileToPinata(selectedFile);
      setIpfsHash(hash);
      alert(`File uploaded successfully. IPFS URL: ${hash}`);
    } catch (error) {
      console.error("Error uploading file to Pinata:", error);
    }

    setUploading(false);
  };

  return (
    <div
      style={{
        marginTop: "50px",
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        margin: "50px auto 0 ",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
          color: "#333",
          fontWeight: "bold",
          marginBottom: "2rem",
        }}
      >
        Upload NFT to Pinata
      </h1>
      <input
        type="file"
        accept="image/*"
        style={{
          display: "block",
          marginBottom: "1rem",
          padding: "0.5rem",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "100%",
        }}
        onChange={handleFileSelect}
      />
      <button
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#ff69b4",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1rem",
          transition: "background-color 0.3s ease",
          width: "100%",
          maxWidth: "200px",
        }}
        onClick={handleUploadToIpfs}
        disabled={!selectedFile || uploading}
      >
        {uploading ? "Uploading..." : "Upload to IPFS"}
      </button>
      {ipfsHash && (
        <h3
          style={{
            marginTop: "1rem",
            color: "#666",
            fontSize: "0.875rem",
            maxWidth: "80%",
            wordWrap: "break-word",
          }}
        >
          Image uploaded to IPFS with hash:
          <a
            href={ipfsHash}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#666",
              fontSize: "0.875rem",
              textDecoration: "underline",
              marginLeft: "0.5rem",
            }}
          >
            {ipfsHash}
          </a>
        </h3>
      )}
    </div>
  );
};

export default Page;
