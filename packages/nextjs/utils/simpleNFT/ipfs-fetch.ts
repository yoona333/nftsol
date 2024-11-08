const JWT = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0YTFkOTUyNy01MjY2LTRkMWQtOTYyZi05NTlhNWQ3YmM0NjMiLCJlbWFpbCI6ImE5NjU0NDc2OTVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImQxZmZjZDdkNzQxZWFiNWY5YWU0Iiwic2NvcGVkS2V5U2VjcmV0IjoiZjRjNzlkOGU4OTZjOGU4MzYxNjg4MWRkNzMxYjhkNTgyNzA5ZTM0OTc0OTdjMDcxYmMyNmQ0YzBiNGI5MjA4NCIsImlhdCI6MTcxNDExMTg0Mn0.QLqTQtsFtGa6oBjnBcqZt39Xpn1pAUiwIT77tRUc1Jc`;
let CID: string; // 定义 CID 变量用于存储 IpfsHash
const fetchFromApi = ({ path, method, body, }: { path: string; method: string; body?: object }) => {
  const headers = {
    "Content-Type": "application/json",
    ...(body ? { "Authorization": `Bearer ${JWT}` } : {}),
  };

  return fetch(path, {
    method,
    headers: Object.keys(headers).length > 0 ? headers : undefined,
    body: body ? JSON.stringify(body) : undefined,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // 打印获取到的数据
      return data; // 返回数据以继续链式调用
    })
    .catch(error => console.error("Error:", error));
};

export const addToIPFS = (yourJSON: object) => {
  return fetchFromApi({
    path: `https://api.pinata.cloud/pinning/pinJSONToIPFS`,
    method: "POST",
    body: {
      pinataMetadata: { name: "nftsMetadata.json" },
      pinataContent: yourJSON,
    },
  }).then(data => {
    CID = data.IpfsHash; // 将返回的 IpfsHash 赋值给 CID 变量
    console.log(CID);
    return data; // 返回数据以继续链式调用
  });
};

export const getMetadataFromIPFS = (ipfsHash: string) => {
  return fetchFromApi({
    path: `/api/ipfs/get-metadata`,
    method: "POST",
    body: { ipfsHash },
  });
};
