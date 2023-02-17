const cloudinary = require("cloudinary");
const Category = require("../models/categoryModel");
const Wallpaper = require('../models/wallpaperModel');

exports.create = async (req, res) => {
  try {
    let {category, name, price, color, metaTitle, zip, purchase, model, thumbnail, tag} = req.body;
// const upload1 = await cloudinary.v2.uploader.upload(zip, {
//   folder: "zip",
//   resource_type: 'raw'
// });
// const upload2 = await cloudinary.v2.uploader.upload(thumbnail, {
//   folder: "thumbnail",
// });
let time = new Date();
let currentTime = time.getFullYear()+"-"+ (time.getMonth()+1)+"-"+time.getDate()+" "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
const wallpaper = await Wallpaper.create({
  cat_name: category,
  tag: tag,
  name,
  price,
  color_code: color,
  meta_title: metaTitle,
  paid: purchase,
  model,
  likes: 0,
  time: currentTime,
  ttl_downld: 0,
  // zip: upload1.secure_url,
  // thumbnail: upload2.secure_url,
  zip: zip,
  thumbnail: thumbnail,
});
    res.status(200).json({
      success: true,
      wallpaper
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}
exports.read = async (req, res) =>{
  try{
    let wallpapers = await Wallpaper.find({});
    res.status(200).json({
      wallpapers
    })
  }
  catch(err){
    res.status(500).json(err)
  }
}

exports.home = async (req, res) =>{
  try{
    let trending = await Wallpaper.find({}).sort({ttl_downld: 'desc'}).limit(10);
    let newlyAdded = await Wallpaper.find({}).sort({createdAt: 'desc'}).limit(10);
    // const science = await Wallpaper.find({cat_name: "Science"}).limit(10);
    // const tech = await Wallpaper.find({cat_name: "Tech"}).limit(10);
    // const nature = await Wallpaper.find({cat_name: "Nature"}).limit(10);
    // const sciFi= await Wallpaper.find({cat_name: "Sci-fi"}).limit(10);
    // const futuristic = await Wallpaper.find({cat_name: "Futuristic"}).limit(10);
    // const animals = await Wallpaper.find({cat_name: "Animal"}).limit(10);
    // const cars = await Wallpaper.find({cat_name: "Car"}).limit(10);
    let superheroes = await Wallpaper.find({cat_name: "Super Hero"}).limit(10);
    res.status(200).json({
      wallpapers: [
      {trending: trending},
    {newlyAdded: newlyAdded},
    // {science: science}, 
    // {tech: tech}, 
    // {nature: nature}, 
    // {sciFi: sciFi},
    // {futuristic: futuristic},
    // {animals: animals},
    // {cars: cars},
    {superheroes: superheroes}
      ]
    })
  }
  catch(err){
    res.status(500).json({
      err: err.message
    })
  }
}

exports.updateDownload = async (req, res) =>{
  try{
    let {id} = req.params;
    const wallpapers = await Wallpaper.findOneAndUpdate({_id: id}, {$inc: { ttl_downld: 1} });
    res.status(200).json({
      wallpapers
    })
  }
  catch(err){
    res.status(500).json(err)
  }
}

