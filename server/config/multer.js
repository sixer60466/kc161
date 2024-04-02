const multer = require('multer')
const { v4: uuid } = require('uuid')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/images/') //指定目錄
    },
    filename: (req, file, cb) => {
        const fileExtension = file.originalname.split('.').pop()
        cb(null, `${uuid()}.${fileExtension}`) //生成文件名稱
    }
})

const upload = multer({ storage: storage })

module.exports = upload