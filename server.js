const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//API 라우팅!!
app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/70/70/1",
      name: "장희유",
      birthday: "940302",
      gender: "여",
      job: "웹 개발자"
    },
    {
      id: 2,
      image:
        "https://pbs.twimg.com/profile_images/2961595463/e18d502130376d14763c7c522d307f75_400x400.jpeg",
      name: "히컵",
      birthday: "140305",
      gender: "남",
      job: "족장"
    },
    {
      id: 3,
      image: "https://t1.daumcdn.net/cfile/tistory/22E37E335980311234",
      name: "강하늘",
      birthday: "900221",
      gender: "남",
      job: "배우"
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
