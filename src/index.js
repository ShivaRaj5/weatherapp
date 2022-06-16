const express=require('express');
const hbs=require('hbs')
const app=express();
const path=require('path');
const port=process.env.PORT || 3000;

const staticPath=path.join(__dirname,'../public')
const partialsPath=path.join(__dirname,'../partials')
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);
app.use(express.static(staticPath));

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/weather',(req,res)=>{
    res.render('weather')
})

app.get('*',(req,res)=>{
    res.render('errorpage',{
        msg:"Please press back button to go to home"
    })
})

app.listen(port,()=>{
    console.log("Listening to the port "+port);
})