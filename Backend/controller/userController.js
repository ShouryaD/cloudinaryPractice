const User = require('../models/userModel')

const registerUser = async (req, res) => {
    let { name, email, password, profilePic } = req.body

    try {
        let data = await User.create({ name, email, password, profilePic })
        res.json({ msg: 'Successfully registered!', success: true, data })
    } catch (error) {
        res.json({ msg: 'Error in registering!', success: false, error:error.message })
    }
}

const login = async (req, res) => {
    let { email, password } = req.body

    try {
        let user = await User.findOne({ email })
        console.log(user)
        if (user) {
            if (user.password == password) {
                res.json({ msg: 'Successfully login!', success: true, user })
            }
            else {
                res.json({ msg: 'Wrong Password!', success: false })
            }
        }
        else {
            res.json({ msg: 'User not found!', success: false })
        }
    } catch (error) {
        res.json({ msg: 'Error in login!', success: false, error:error.message })
    }
}
module.exports = {
    registerUser, login
}