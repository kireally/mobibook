const initialState = {
  totalPrice: 0
}

const reducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_TOTAL_PRICE') {
        return {
          ...state,
          totalPrice: state.totalPrice + action.payload
        }
      }

      if(action.type === 'UPDATE_TOTAL_PRICE_AFTER_DELETING') {
        return {
          ...state,
          totalPrice: state.totalPrice - action.payload
        }
      }

    return state;
}



export default reducer;