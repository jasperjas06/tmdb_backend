import express from 'express'
import User from '../controller/index.js'
const router = express.Router()

router.post('/create',User.createUser)
router.post('/login',User.userLogin)
router.post('/update',User.userUpdate)
router.post('/update/img',User.uploadImg)
router.get('/getuser',User.getUser)

export default router