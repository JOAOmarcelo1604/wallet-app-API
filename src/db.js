require("dotenv").config();
const { Pool } = require("pg");

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env;

console.log("🔍 Verificando credenciais do banco:");
console.log({
  user: DB_USER,
  password: DB_PASSWORD ? "*****" : "MISSING",
  database: DB_NAME,
  host: DB_HOST,
  port: DB_PORT,
});

const db = new Pool({
  user: DB_USER,
  password: String(DB_PASSWORD),
  database: DB_NAME,
  host: DB_HOST,
  port: Number(DB_PORT),
  ssl: { rejectUnauthorized: false }, // 🔹 ATIVANDO SSL
});

module.exports = db;
