const express = require('express')
const router = express.Router()
const { registerUser, loginUser, validateToken, userLogout } = require('../controllers/userController')

router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/validateToken', validateToken); // jwt驗證
router.post('/logout', userLogout)

module.exports = router;