import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(8080);
console.log("Server on port ", 8080);