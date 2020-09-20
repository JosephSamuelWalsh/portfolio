/////////////////////

const http = require('http');
const path = require('path');
const express = require('express');
const session = require('express-session');
const app = express();
const bodyParser = require("body-parser");

//app.use(session({secret: 'secret',saveUninitialized: true,resave: true}));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//app.use(express.static(__dirname + '/public'));

app.get('/api', (req, res) => {
  res.render("newPage") //render('index');
});

app.listen(process.env.PORT || 8080);

// app.get('/levels', (req, res) => {
//   res.render('levels');
// });


// app.post('/', (request, response) => {
//   if (!request.body.title || !request.body.body) {
//     response.status(400).send(chalk.red('Entries must have a title and a body'));
//     return;
//   }
//   entries.push({
//     title: request.body.title,
//     content: request.body.body,
//     published: new Date(),
//   });
//   response.redirect('/');
// });

// http.createServer(app).listen(3000, () => { console.log(`Snake Game started on port 3000`); });
///////////////////////////////////////////////////////////////////////////////    ////////////////
