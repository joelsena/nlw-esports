import express from "express";

const app = express();

app.get("/ads", (req, res) => {
  res.json([
    { id: 1, name: "anuncion 1" },
    { id: 2, name: "anuncion 2" },
    { id: 3, name: "anuncion 3" },
  ]);
});

app.listen(3333);
