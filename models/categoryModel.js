const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    cat_name: {
        type: String,
        required: [true, "Please mention category"]
    }
}, {timestamps: true});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;