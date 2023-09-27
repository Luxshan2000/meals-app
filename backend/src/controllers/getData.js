const Meal = require('../modals/meal')


exports.getMeal = async (req,res)=>{
    try{
        const catId = req.params.id
        console.log(catId)
        let users;
        if(catId === "*"){
            users = await Meal.find({});
        }else{
            users = await Meal.find({categoryIds: catId});
        }
        
        res.json(users)
    }catch(err){
        res.json(err)
    }
    
}