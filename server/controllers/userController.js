const { User } = require('../models/UserSchema')
const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
    const { username, password } = req.body
    try {
        const existingUser = await User.findOne({ username })
        if (existingUser) {
            return res.status(400).json('Username is already taken')
        }
        const user = await User.create({ username, password })
        // const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        // res.cookie('token', token, { httpOnly: true, sameSite: 'lax' });
        res.status(201).json({ message: 'User registered successfully' })
    } catch (err) {
        console.error(err)
        res.status(500).send(err)
    }
}

const loginUser = async (req, res) => {
    const { username, password } = req.body
    try {
        let user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json('User not found')
        }
        const isMatch = await user.comparePassword(password)
        if (!isMatch) {
            return res.status(400).json('帳號或密碼錯誤')
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        res.cookie('token', token, { httpOnly: true, sameSite: 'lax' });
        res.send('登入成功')
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
}

const validateToken = (req, res) => {
    const token = req.cookies.token
    if (!token) {
        return res.sendStatus(401)
    }
    try {
        jwt.verify(token, process.env.JWT_SECRET)
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(403);
    }
}

const userLogout = (req, res) => {
    res.cookie('token', '', { expires: new Date(0), path: '/', httpOnly: true });
    res.json({ message: '登出成功' })
}

module.exports = { registerUser, loginUser, validateToken, userLogout }