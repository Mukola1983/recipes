import Utils from './Utils'

// const API_ID = process.env.REACT_APP_RECIPE_ID;
// const API_KEY = process.env.REACT_APP_RECIPE_KEY;

const API_ID = '84f08cc9'
const API_KEY = 'c9b68b5ed2f64ed600d5f3fa18b9652f'

export const searcRecipe = (value) =>
  Utils.fetchJSON(
    `https://api.edamam.com/search?q=${value}/&app_id=${API_ID}&app_key=${API_KEY}`
  )
