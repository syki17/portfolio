/*
Code to render the services page
on response it returns a JSON with info about frameworks
*/
var express = require('express');
var router = express.Router();

/* GET Services page. */
router.get('/', function(req, res, next) {
  res.render('services', 
  { title: 'Services',
    java: [{
      title:'Jackson',
      link:'https://github.com/FasterXML/jackson',
      desc: 'Jackson is a suite of data-processing tools for Java (and the JVM platform)'
    },
    {
      title:'Gson',
      link:'https://github.com/google/gson',
      desc:'Gson is a Java library that can be used to convert Java Objects into their JSON representation'
    },
    {
      title:'OpenCSV',
      link: 'http://opencsv.sourceforge.net/',
      desc:'Opencsv is an easy-to-use CSV (comma-separated values) parser library for Java'
    }],
    cSharp: [{
      title: '.Net',
      link :'https://docs.microsoft.com/en-us/dotnet/welcome',
      desc: 'NET is a developer platform with tools and libraries for building any type of app, including web, mobile, desktop, gaming, IoT, cloud, and microservices.'
    },
    {
      title: 'ASP.Net',
      link :'https://dotnet.microsoft.com/apps/aspnet',
      desc: 'ASP.NET is an open-source server-side web application framework designed for web development to produce dynamic web pages.'
    }]
  });
});

module.exports = router;