const defaltState = {
  arrayOfTitle: [],
}

const ADD_TITLE = 'ADD_TITLE'

export const titleReducer = (state = defaltState, action) => {
  switch (action.type) {
    case ADD_TITLE:
      return { ...state, arrayOfTitle: [...action.payload] }

    default:
      return state
  }
}

export const addtitleActive = (payload) => ({ type: ADD_TITLE, payload })
