const mongoose = require('mongoose');

let URL = `mongodb+srv://root:3oLnzWfonfQ62BLg@cluster0.q7kjuoi.mongodb.net/apptechWallpaperDB?retryWrites=true&w=majority`
mongoose.set("strictQuery", true);

mongoose.connect(
    URL, 
    {useNewUrlParser: true},
    (err) => {
        if(err){
            console.error("Could not connect to MongoDB!")
        }
        else{
            console.log("MongoDB: Connected...")
        }
    }
);



