/*
On render, get info about my repo via API call using node-fetch, fill the arrays,
and send to front end. 
*/
var express = require('express');
var router = express.Router();
var https = require('https');
const fetch = require('node-fetch');

// initialize empty arrays
var links = [];
var desc = [];
var title = [];

/* GET Projects page. */
router.get('/', function(req, res, next) {

  //API call to get my repo (rate limited to 60 per hour)
  fetch('https://api.github.com/users/syki17/repos')
  .then(response => response.json())
    .then(body => {
      for (var i=0;i < body.length;i++){
        
        //populate arrays
        links.push(body[i].html_url)
        desc.push(body[i].description)
        title.push(body[i].name);
        

      }
      res.render('projects', {
        link: links,
        description: desc,
        titles: title
      });
      console.log(links);
    })
    .catch(error =>{
      console.log(error);
    });

  
// clear arrays, so it doesn't keep adding to the same array.
  links =[];
  desc =[];
  title =[];
});

module.exports = router;