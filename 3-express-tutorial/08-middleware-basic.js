const express =require('express');
const app = express();
// req => middleware => res
const logger =(req , res, next) => {
    const method= req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time);
next()
}
app.get('/' ,logger,(req, res) =>{
    
    res.send('Home Page')
})

app.get('/about', logger ,(req,res) =>{
    res.send('this is about us')
})
app.listen(3005, () =>{
    console.log('Server is Listening on port 3005...');
})