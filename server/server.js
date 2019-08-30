const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');
// const cors = require('cors');

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));
// app.use(express.static('public'));

// app.use(cors());
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  // res.JSON({message: 'test'});
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const nodemailer = require('./services/nodemailer');
app.get('/sendEmail', (req, res) => {
  console.log('post!');
  console.log(req.headers);
  console.log("Message sent from " + req.headers[0] + " " + req.headers[1]);
  // let mailOptions = {
  //   from: req.body.email,
  //   to: 'jasonrowland86@gmail.com',
  //   subject: 'Contact form submitted from: ' + req.body.firstName + " " + req.body.lastName,
  //   text: req.body.message
  // };
  let mailOptions = {
    from: req.headers[2],
    to: 'jasonrowland86@gmail.com',
    subject: 'Contact form submitted from: ' + req.headers[0] + " " + req.headers[1],
    text: req.headers[3]
  };
  nodemailer.transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("Nodemailer error: " + err);
      res.send({message: "Oops something went wrong"});
    } else {
      // console.log(info);
      console.log("Message sent");
      res.send({message: "Thank you, Your message was sent"});
    }
  });

  // console.log("Message sent from " + req.body.firstName + " " + req.body.lastName);
  // let mailOptions = {
  //   from: req.body.email,
  //   to: 'jasonrowland86@gmail.com',
  //   subject: 'Contact Form Submitted: ' + req.body.firstName + " " + req.body.lastName,
  //   text: req.body.message
  // };
  // nodemailer.transporter.sendMail(mailOptions, (err, info) => {
  //   if (err) {
  //     console.log("Nodemailer error: " + err);
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //   }
  // });
  // res.redirect('/');
  // // res.render('index', {
  // //   message: "Thank you, Your message was sent",
  // //   // gmapapikey: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD3ekqZ4vGPCYciZZWNeKYv84VE9BwzKhE"
  // // })



  // const secretKey = '';
  // const verificationURL = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
  // request(verificationURL,function(error,response,body) {
  //   body = JSON.parse(body);
  //   console.log(body.success);
  //   if(req.body.firstName === '' || req.body.email === '' || req.body.message === '') {
  //     res.render('index', {
  //       message: "Message not sent, missing field",
  //       // gmapapikey: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC0jlZYq0AYX9FzpDDuCJj8rtuxxlBdhyk"
  //       //add feilds to refill users info when redirected
  //     })
  //   } else if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
  //     res.render('index', {
  //       message: "Please check the box",
  //       // gmapapikey: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC0jlZYq0AYX9FzpDDuCJj8rtuxxlBdhyk"
  //       //add feilds to refill users info when redirected
  //     })
  //   } else if(body.success !== undefined && !body.success) {
  //     res.render('index', {
  //       message: "Message not sent",
  //       // gmapapikey: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC0jlZYq0AYX9FzpDDuCJj8rtuxxlBdhyk"
  //       //add feilds to refill users info when redirected
  //     })
  //   } else {
  //     console.log("Message sent from " + req.body.firstName + " " + req.body.lastName);
  //     let mailOptions = {
  //       from: req.body.email,
  //       to: 'jasonrowland86@gmail.com',
  //       subject: 'Contact Form Submitted: ' + req.body.firstName + " " + req.body.lastName,
  //       text: req.body.message
  //     };
  //     nodemailer.transporter.sendMail(mailOptions, (err, info) => {
  //       if (err) {
  //         console.log("Nodemailer error: " + err);
  //       } else {
  //         console.log('Email sent: ' + info.response);
  //       }
  //     });
  //     // res.redirect('/');
  //     res.render('index', {
  //       message: "Thank you, Your message was sent",
  //       // gmapapikey: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD3ekqZ4vGPCYciZZWNeKYv84VE9BwzKhE"
  //     })
  //   }
  });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);

console.log(`Listening on ${port}`);
