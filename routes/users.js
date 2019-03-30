var express = require('express');
var router = express.Router();
const con = require('../db-connection/conn');

/* GET users listing. */
router.get('/', (req, res, next) => {
  con.connect((err) => {
    if(err) throw err;

    // connected
    con.query('SELECT * FROM mindz.users WHERE 1', (err, data) => {
      if(err) throw err;
      
      // console.log(data.length);
      res.send(data);
    });
  });
});

module.exports = router;
