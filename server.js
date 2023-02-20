const express = require('express');
const db = require('./database/db');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cloudinary = require("cloudinary");
const cors = require('cors'); 
cloudinary.config({
  cloud_name: "dz7rszpfi",
  api_key: "337929436899277",
  api_secret: "Us__uRp1mGUf9QynZVmUdBKjrwY",
  secure: true,
});
const app = express();
app.use(
  cors({
      credentials: true,
      origin: "http://localhost:3000",
  })
);
app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));

app.use(
  express.urlencoded({ extended: true })
);

// const wallpaperRoutes = require("./routes/wallpaperRoutes");
// const userRoutes = require("./routes/userRoutes");
// const categoryRoutes = require("./routes/categoryRoutes")
// const searchRoutes = require("./routes/searchRoute")
// // app.use("/4DApp", baseRoute);
// app.use("/4DApp/user", userRoutes)
// app.use("/4DApp/wallpaper", wallpaperRoutes);
// app.use("/4DApp/category", categoryRoutes)
// app.use("/4DApp/search", searchRoutes)
const index = require("./routes/index")

app.use("/4DApp", index)

const port  = process.env.PORT || 4002;

app.listen(port , function(){
    console.log("Server Started");
});