const express = require('express')
const models = require('./models')
const { validationResult } = require('express-validator')
const app = express()

//JSON
app.use(express.json())

const registerValidator = [
    body('username', 'username cannot be empty!').not().isEmpty(),
    body('password', 'password cannot be empty!').not().isEmpty(),
]

app.post('/register', registerValidator, (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty) {
        const msg = errors.array().map(error => error.msg).join('')
        return res.status(422).json({success: false, message: msg})
    }
    console.log(errors)

    const { username, password } = req.body
    
    const existingUser = models.User.findOne({
        where: {
            username: { [Op.like]: username }
        }
    })

    if (existingUser) {
        return res.join({  message: 'Username token!', success: false })
    }

    //creat new user
    const newUser = models.User.create({
        username: username,
        password: password
    })

    res.status(201).json({ success:true })

})


//start the server
app.listen(8080, () => {
    console.log('Server is running')
})