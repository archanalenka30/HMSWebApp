const express = require("express");
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static("public"));

// Dynamic page
app.get("/time", (req, res) => {
  res.send(`
    <h1>Current Server Time</h1>
    <p>${new Date().toString()}</p>
    <a href="/">Go Home</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
