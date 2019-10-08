const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//API 라우팅!!
app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello Express!" });
});

app.get("//dapi.kakao.com/v2/maps/sdk.js?appkey=b018215865662f71b89f2eff4abd26a6", (req, res) => {
    res.send(res);
});

app.post("/api/word", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me:${req.body.post}`
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
