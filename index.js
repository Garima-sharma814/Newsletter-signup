const express = require("express");
const bodyparser = require("body-parser");
const https = require("https");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const data = {
    members: [
      {
        email: email,
        merge_fields: {
          FNAME: fname,
          LNAME: lname,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);
  const url="https://us6.api.mailchimp.com/3.0/lists/23b14d2b05";
  const options
  https.request(url, options, (response)=>{

  })
});

app.listen(port, () => {
  console.log(`the server us running at http://${hostname}:${port}/`);
});

//Api key
//35f5966b5c8c49cd05305509f1403908-us6
// list id
// 23b14d2b05