export const addPhoneToFavorite = id => dispatch => {
  dispatch({
      type: 'ADD_PHONE_TO_FAVORITE',
      payload: id
  })
}