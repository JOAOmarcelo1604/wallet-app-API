require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("../db");
const routesCategories = require("../routes/categories");
const routesUser = require("../routes/users");
const routesFinances = require("../routes/finances");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Olá, essa é a Aplicação Wallet-App! - dev JM");
});

app.use("/categories", routesCategories);
app.use("/users", routesUser);
app.use("/finances", routesFinances);

// Conectar ao banco antes de exportar a API
db.connect()
  .then(() => console.log("✅ Banco de dados conectado com sucesso!"))
  .catch((error) => {
    console.error("❌ Erro ao conectar ao banco de dados:", error);
  });

// 🔥 Exportando como função para Vercel
module.exports = app;
