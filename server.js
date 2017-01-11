const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine',hbs);
app.use(express.static(__dirname + '/public'));



app.get('/', (req,res) => {
    res.render('home.hbs',{
      pageTitle: 'Home Page',
      currentYear : new Date().getFullYear(),
      DisplayText : 'Welcome to Home Page'
    });

    });

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle: 'About Page',
    currentYear : new Date().getFullYear()
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
