const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(path.resolve(__dirname, 'dist') ));
/*
app.get('/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist') + '/bundle.js');
});
app.get('/reactlogo.png', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist') + '/reactlogo.png');
});
*/

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist') + '/index.html');
});

app.listen(port, () => console.log(`Listening on port ${port}!`));