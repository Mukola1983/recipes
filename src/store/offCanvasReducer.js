const defaltState = {
  showModal: false,
  modalContent: {},
}

const SHOW_MODAL = 'SHOW_MODAL'
const SET_MODAL_CONTENT = 'SET_MODAL_CONTENT'

export const offCanvasReducer = (state = defaltState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: state.showModal ? false : true }

    case SET_MODAL_CONTENT:
      return { ...state, modalContent: action.payload }
    default:
      return state
  }
}

export const offCanvasAction = (payload) => ({ type: SHOW_MODAL, payload })
export const setModalAction = (payload) => ({
  type: SET_MODAL_CONTENT,
  payload,
})
