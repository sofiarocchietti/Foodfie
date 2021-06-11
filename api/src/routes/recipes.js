const {Router} = require('express');
const {getRecipeByName, getRecipeById, postRecipe} = require('../controllers/recipes')
const router = Router();

router.get('/', getRecipeByName); 
router.get('/:id', getRecipeById);
router.post('/', postRecipe); 

module.exports= router; 