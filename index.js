import express from "express";
import url from "url";

const app = express();
var test = 1;

app.get("/", (req, res) => {
  res.send("hello world");
});
//?ha=1&ht=2&t=3
app.get("/arduino/dashboard", (req, res) => {
  var params = url.parse(req.url, true).query;
  res.send(`
    <html>
<body>
<h1>Clima Rubí</h1>
<p>humitat ambiental: ${params.ha}</p>
<p>humitat terra: ${params.ht}</p>
<p>temperatura: ${params.t}</p>
</body>
</html>
    `);
});

app.listen(8080);
console.log("Server on port ", 8080);
