const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.post("/register", (req, res) => {
  console.log("Form Submitted Data:");
  console.log(req.body);
  res.send("Form submitted successfully! Check server console for details.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
