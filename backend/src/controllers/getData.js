const Meal = require('../modals/meal')


exports.getMeal = async (req,res)=>{
    const users = await Meal.find({});
    console.log(users)
}