const { Diet } = require('../db')
const axios = require('axios').default
const { API_KEY } = process.env

function getDiets (req, res, next) {
  const dietsData = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
  let dietTypes = []
  dietsData.then(data => {
    let dietsDataResult = data
    dietsDataResult.data.results.forEach(result => {
      result.diets.forEach(result => {
        if (!dietTypes.includes(result)) {
          dietTypes.push(result)
        }
      })
    })
  })
  .then(dietTypes.forEach(result => {
    Diet.create({
        name: result
    })
  }))
    .then(dietResult => {
      Diet.findAll().then(data => {
        return res.send(data)})})
    .catch((err) => next(err))
}

module.exports = {
getDiets}
