const express = require('express')
const path =require('path')

const app = express()
// setup static and middleware
app.use(express.static('./public'))

 //app.get('/', (req, res) =>{
    //res.sendFile(path.resolve(__dirname,'./3-express-tutorial/navbar-app/index.html'))
// adding to static assets
// SSR(Server side render)
// we commonte this app.get becouse we add index.html to static public folder
//})

app.all('*',(req,res) =>{
    res.status(404).send('Resourse not found')
})

app.listen(3005, () => {
    console.log('Server is Listing on port 3005....');
})