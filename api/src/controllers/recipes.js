const Sequelize = require('sequelize');
const { Op } = require("sequelize");
const { Recipe, Diet } = require('../db')
const { v4: uuidv4 } = require('uuid')
const axios = require('axios').default
const { API_KEY } = process.env

  async function getRecipeByName (req, res, next) {
  const {name} = req.query
  console.log(name)
  try {
    const apiRecipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&query=${name}`)
    const dbRecipes = await Recipe.findAll({where: {name: { [Op.iLike]: `%${name}%`}}})
   if (dbRecipes.length === 0) {
       let result = apiRecipes.data.results.slice(0, 9)
       if (apiRecipes.data.results.length === 0) return res.status(404).send('Invalid search')
       return res.send(result) 
   } else {
      let totalRecipes = dbRecipes.concat(apiRecipes.data.results)
      let totalRecipesConcat = totalRecipes.slice(0,9)
     return res.send(totalRecipesConcat)
   }
  } catch (error) {
    next(error)
  }
}

 async function getRecipeById (req, res, next) {
  const {id} = req.params
   try {
    if (id.length < 35) {
      const apiRecipes = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
      let objectResponse = {
        vegetarian: apiRecipes.data.vegetarian,
          vegan: apiRecipes.data.vegan,
          glutenFree: apiRecipes.data.glutenFree,
          title: apiRecipes.data.title,
          image: apiRecipes.data.image,
          diets: apiRecipes.data.diets,
          dishTypes: apiRecipes.data.dishTypes,
          summary: apiRecipes.data.summary,
          spoonacularScore: apiRecipes.data.spoonacularScore,
          healthScore: apiRecipes.data.healthScore,
          analyzedInstructions: apiRecipes.data.analyzedInstructions
      }
      if(apiRecipes) return res.send(objectResponse)
    } else {
      const dbRecipeId = await Recipe.findOne({
        where: {
          id: req.params.id
        }
      })
      return res.send(dbRecipeId)
    }
  } catch(error) {
      next(error)
  } 
   /* if (id.length < 35) {
      const apiRecipes =  axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
      apiRecipes.then(response => {
      const apiResponse = response
       let objectResponse = {
        vegetarian: apiResponse.data.vegetarian,
        vegan: apiResponse.data.vegan,
        glutenFree: apiResponse.data.glutenFree,
        title: apiResponse.data.title,
        image: apiResponse.data.image,
        diets: apiResponse.data.diets,
        dishTypes: apiResponse.data.dishTypes,
        summary: apiResponse.data.summary,
        spoonacularScore: apiResponse.data.spoonacularScore,
        healthScore: apiResponse.data.healthScore,
        analyzedInstructions: apiResponse.data.analyzedInstructions
      }
      if(apiResponse) return res.send(objectResponse)
    }).catch(err=> res.status(404).json({error: 'ID invalido'}))
  } else {
    const dbRecipeId = Recipe.findOne({
      where: {
        id: req.params.id
      }, 
      include: Diet
    }).then(response => {
      return res.send(response)
    }).catch(err=> res.status(404).json({error: 'ID invalido'})); 
  } */
}

async function postRecipe(req, res) {
const { name, summary, spoonacularScore, healthScore, analyzedInstructions, diets } = req.body; 
const id = uuidv4();
  if (!name || !summary) return res.status(404).send('mandame los datos papá')
    const newRecipe = await Recipe.create({
            id: id, 
            name: req.body.name,
            summary: req.body.summary,
            spoonacularScore: req.body.spoonacularScore,
            healthScore: req.body.healthScore,
            analyzedInstructions: req.body.analyzedInstructions 
    }) 
    for(let i = 0; i < diets.length; i++) {
      await newRecipe.addDiet(diets[i], {through: 'recipe_diet'})
    }
    const recipes_diets = await Recipe.findOne({
      where: {
        name: req.body.name
      },
      include: Diet
    })

    return res.json(recipes_diets) 
} 
 


module.exports = {
  getRecipeByName,
  getRecipeById, 
  postRecipe}
