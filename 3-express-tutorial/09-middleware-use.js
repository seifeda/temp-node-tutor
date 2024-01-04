const express =require('express');
const app = express();
const logger =require('./logger')
const authorize =require('./authorize')
// req => middleware => res
app.use([logger, authorize])
// api/home/about/products 
app.get('/' ,(req, res) =>{ 
    res.send('Home Page')
 })
app.get('/about' ,(req,res) =>{
    res.send('this is about us')
})
app.get('/api/products' ,(req, res) =>{  
    res.send('Products')
})
app.get('/api/Items' ,(req,res) =>{
    res.send('Items')
    console.log(req.user);
})
app.listen(3005, () =>{
    console.log('Server is Listening on port 3005...');
})