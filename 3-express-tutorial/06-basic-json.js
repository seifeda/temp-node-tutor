const express =require('express');
const app = express();
const{products}=require('./data')
app.get('/', (req,res) =>{
    res.json(products)
})

app.listen(3005, () =>{
    console.log('Server is Listening on port 3005...');
})