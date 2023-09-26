const Meal = require('../modals/meal')


exports.getMeal = async (req,res)=>{
    try{
        const catId = req.params.id
        const users = await Meal.find({categoryIds: catId});
        res.json(users)
    }catch(err){
        res.json(err)
    }
    
}