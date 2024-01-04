const express = require('express')
const app = express()

const people = require('./3-express-tutorial/routers/people')
const auth = require('./3-express-tutorial/routers/auth')

//static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended: false}))
// patse json
app.use(express.json())

app.use('/api/people',people)
 app.use('/login',auth)

app.listen(3005, () =>{
    console.log('Server is listening on port 3005...');
})