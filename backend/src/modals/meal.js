const mongoose = require("mongoose")


const Meal= mongoose.model("meals",{
    categoryIds:{
        type:[String],
        required:true
    },
    title:{
        type: String,
        required: true,
        unique: true
    },
    imageUrl:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true
    },
    ingredients:{
        type:[String],
        required:true
    },
    steps:{
        type:[String],
        required:true
    },
    affordability:{
        type:String,
        required:true
    },
    complexity:{
        type:String,
        required:true
    }
});

module.exports = Meal;
