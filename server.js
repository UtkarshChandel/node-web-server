const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine',hbs);
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('currentYear',()=>{
  return new Date().getFullYear()
});



app.get('/', (req,res) => {
    res.render('home.hbs',{
      pageTitle: 'Home Page',
      DisplayText : 'Welcome to Home Page'
    });

    });

app.get('/projects',(req,res) => {
  res.render('projects.hbs',{
    pageTitle : "Projects"
  });
});


app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle: 'About Page'
  });
});

app.get('/bad',(req,res)=>{
  res.send({
    errorMessage : 'Unable to handle req.'
  });
});

app.listen(port,()=>{
  console.log(`Server is Up and Running on ${port}`);
});
