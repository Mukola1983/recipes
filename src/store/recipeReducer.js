const defaltState = {
  recipes: [],
  recipesName: '',
}

const SHOW_RECIPES = 'SHOW_RECIPES'
const GET_NAME_RECIPES = 'GET_NAME_RECIPES'

export const recipeReducer = (state = defaltState, action) => {
  switch (action.type) {
    case SHOW_RECIPES:
      return { ...state, recipes: [...action.payload] }

    case GET_NAME_RECIPES:
      return { ...state, recipesName: action.payload }

    default:
      return state
  }
}

export const showRecipesAction = (payload) => ({ type: SHOW_RECIPES, payload })
export const changeRecipesName = (payload) => ({
  type: GET_NAME_RECIPES,
  payload,
})
