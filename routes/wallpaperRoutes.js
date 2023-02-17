const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middleware/authenticator');
const wallpaperController = require('../controllers/wallpaperController');
const {authenticatePakage} = require('../middleware/pakageAuth')
const authAdmin = require("../middleware/authAdmin");

router.post('/',wallpaperController.create);
router.get('/', authenticatePakage ,wallpaperController.read)
router.get('/home', authenticatePakage, wallpaperController.home)
router.post('/updateDownload/:id', authenticatePakage, wallpaperController.updateDownload)
module.exports = router;