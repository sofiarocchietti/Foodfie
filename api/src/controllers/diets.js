const { Diet } = require('../db')
const axios = require('axios').default
const { API_KEY } = process.env

async function getDiets (req, res, next) {
  try{
  const dietsData = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
  var dietTypes = []
  
  await dietsData.data.results.forEach(result => {
     result.diets.forEach(result => {
      if (!dietTypes.includes(result)) {
        dietTypes.push(result)
      }
    })
  })
  for(let i = 0; i < dietTypes.length; i++) {
    await Diet.findOrCreate({
      where: {
        name: dietTypes[i]
      }
    })
  }
  let dietResults = await Diet.findAll();
  res.send(dietResults)
} catch (error) {
  next(error)
}
}

module.exports = {
getDiets}
