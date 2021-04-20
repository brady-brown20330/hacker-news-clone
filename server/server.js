const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require("path");

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

app.listen(PORT, () => {
  console.log(`Hello, Your server is running on PORT: ${PORT}`);
});

app.use(express.static(path.join(__dirname, '../public')));
