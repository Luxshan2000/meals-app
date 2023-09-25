const Meal = require('../modals/meal')



exports.addMeal = async (req,res) =>{
    try{

        const { 
            categoryIds,
            title,
            imageUrl,
            duration,
            ingredients,
            steps,
            affordability,
            complexity} =  req.body

        const newMeal = new Meal({ 
                                    categoryIds,
                                    title,
                                    imageUrl,
                                    duration,
                                    ingredients,
                                    steps,
                                    affordability,
                                    complexity
                                })
        await newMeal.save()


        console.log("Successfully meal added!")



    } catch(error){
        console.log("There is an error occured in addMeal!")
    }
}