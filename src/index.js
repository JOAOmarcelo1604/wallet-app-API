const express = require('express')
const app = express()
const db = require("./db");
app.use(express.json());
const port = 3000
const routesCategories = require("./routes/categories");


app.get('/', (req, res) => {
  res.send('Aplicação Wallet-App')
})

app.use("/categories", routesCategories);




app.listen(port, () => {
  db.connect()
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    throw new Error(error);
  });
  console.log(`Example app listening on port ${port}`)
})