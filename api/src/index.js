const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const Campanhas = mongoose.model("Campanhas", {
  name: String,
  descricao: String,
  valorAlvo: Number,
  arrecadado: Number,
  imagem: String,
});

app.get("/campanhas", async (req, res) => {
  const campanhas = await Campanhas.find();
  return res.send(campanhas);
});

app.post("/campanhasCriar", async (req, res) => {
  const campanhas = new Campanhas({
    name: req.body.name,
    descricao: req.body.descricao,
    valorAlvo: req.body.valorAlvo,
    arrecadado: req.body.arrecadado,
    imagem: req.body.imagem,
  });
  await campanhas.save();

  return res.send(campanhas);
});

app.put("/campanhasEdit/:id", async (req, res) => {
  const campanhas = await Campanhas.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    descricao: req.body.descricao,
    valorAlvo: req.body.valorAlvo,
    arrecadado: req.body.arrecadado,
    imagem: req.body.imagem,
  });

  return res.send(campanhas);
});
app.delete("/campanhasDelete/:id", async (req, res) => {
  const campanhas = await Campanhas.findByIdAndDelete(req.params.id);
  
  return res.send(campanhas);
});

app.listen(port, () => {
  mongoose.connect(
    "mongodb+srv://ProBeta_12:ZyLcWWeyhwP8biZl@apidoecamp.t38kv.mongodb.net/?retryWrites=true&w=majority&appName=ApiDoeCamp"
  );
  console.log(`Organize suas campanhas aqui, DoeCamp ${port}`);
});
