// server.js
const express = require('express');
const bodyParser = require('body-parser');
const pool = require('./db');

const app = express();

app.use(bodyParser.json());

app.post('/api/createNFT', async (req, res) => {
  const nftData = req.body;

  try {
    const query = `
      INSERT INTO nfts (name, essance, holder, price, description, image_url, owner, delisted)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      nftData.nftName,
      nftData.nftessance,
      nftData.nftholder,
      nftData.nftPrice,
      nftData.nftDescription,
      nftData.imageurl,
      nftData.owner,
      nftData.delisted,
    ];
    await pool.execute(query, values);
    console.log('NFT added to database successfully');
    res.status(200).json({ message: 'NFT created successfully' });
  } catch (error) {
    console.error('Error adding NFT to database:', error);
    res.status(500).json({ message: 'Error creating NFT', error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
