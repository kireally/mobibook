const initialState = {
  favoritePhones: []
}

const reducer = (state = initialState, action) => {
    if(action.type === 'ADD_PHONE_TO_FAVORITE') {
        return {
          ...state,
          favoritePhones: [...state.favoritePhones,action.payload]
        }
      }


    return state;
}



export default reducer;