'use strict';
/******************** 3RD PARTY DEPENDENCIES ********************/
require('dotenv').config();

const wayscript = require('wayscript');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pg = require('pg');
const app = express();
const superagent = require('superagent');

/** MOREL */
const request = require('request-promise');



/********************** SETUP SERVER CONSTANTS **********************/
const client = new pg.Client(process.env.DATABASE_URL);
const PORT = process.env.PORT;

/********************** DATABASE CONFIGURATION **********************/
client.connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server Up:::::${PORT}:::::`)
    });
  })

/************************* MIDDLEWARE *************************/
app.use(bodyParser.json());
app.use(cors());


/************************* ROUTES *************************/
app.post('/', SaveToDataBase);
// router.post('/', sendEmail);

// /************************* ROUTE'S FUNCTIONS *************************/
function SaveToDataBase(req, res) {

  let { first_name, last_name, email, phone_number, password } = req.body;
  let SQL = 'INSERT into will(first_name, last_name, email, phone_number,password) VALUES ($1, $2, $3, $4, $5);';
  let values = [first_name, last_name, email, phone_number, password];
  // console.log(values);
  return client.query(SQL, values)
    .then( () => {
      let slackUrl = `https://hooks.slack.com/services/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`
      const slackBody = {
        mkdwn: true,
        text: `Ulrich Motchoffo!`,
        attachments: values.map(val => ({
          color: 'good',
          text: val
        }))
      }

      const res2 = request({
        url: slackUrl,
        method: 'POST',
        body: slackBody,
        json: true
      });

      console.log(res2);

      // to see if my user's info is being handle preprely
      res.send({
      message: `hello ${req.body.first_name} your user was registered !`
    })})
  .catch(err => handleError(err, res))
}
