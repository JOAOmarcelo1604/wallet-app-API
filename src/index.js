require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const routesCategories = require("./routes/categories");
const routesUser = require("./routes/users");
const routesFinances = require("./routes/finances");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Olá, essa é a Aplicação Wallet-App! - dev JM");
});

app.use("/categories", routesCategories);
app.use("/users", routesUser);
app.use("/finances", routesFinances);

db.connect()
  .then(() => {
    console.log("✅ Banco de dados conectado com sucesso!");
    app.listen(port, "0.0.0.0", () => {
      console.log(`🚀 Servidor rodando na porta ${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ Erro ao conectar ao banco de dados:", error);
    process.exit(1); // Finaliza a aplicação em caso de erro
  });
