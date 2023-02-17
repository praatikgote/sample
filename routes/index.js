const express = require('express');
const router = express.Router();

const wallpaperRoutes = require("./wallpaperRoutes");
const userRoutes = require("./userRoutes");
const categoryRoutes = require("./categoryRoutes")
const searchRoutes = require("./searchRoute")

router.use("/user", userRoutes)
router.use("/wallpaper", wallpaperRoutes);
router.use("/category", categoryRoutes)
router.use("/search", searchRoutes)

module.exports = router