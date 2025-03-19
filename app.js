const express = require('express')
const cors = require('cors')


const authRoutes = require('./routes/auth')


//const { body, validationResult } = require('express-validator')

const app = express()

// CORS 
app.use(cors())
// JSON parser 
app.use(express.json())

app.use('./api/auth', authRoutes)

// Start server
app.listen(8080, () => {
    console.log('Server is running.')
})
