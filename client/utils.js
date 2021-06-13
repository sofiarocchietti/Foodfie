   export function orderMinToMax(firstRecipe, secondRecipe) {
    return firstRecipe.spoonacularScore - secondRecipe.spoonacularScore;
  }
  
  export function orderMaxToMin(firstRecipe, secondRecipe) {
    return secondRecipe.spoonacularScore - firstRecipe.spoonacularScore;
  }

  export function orderAsc(firstRecipe, secondRecipe) {
    if (firstRecipe.title < secondRecipe.title) {
      return -1;
    }
    if (firstRecipe.title > secondRecipe.title) {
      return 1;
    }
    return 0;
  }
  
  export function orderDesc(firstRecipe, secondRecipe) {
    if (firstRecipe.title < secondRecipe.title) {
      return 1;
    }
    if (firstRecipe.title > secondRecipe.title) {
      return -1;
    }
    return 0;
  }