const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'nodejs',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// 测试连接池连接
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to the MySQL database');
    connection.release(); // 释放连接
  } catch (err) {
    console.error('Error connecting to the MySQL database:', err);
  }
})();


module.exports = pool;
