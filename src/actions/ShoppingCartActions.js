export const deletePhoneFromBasket = id => dispatch => {
  console.log(id);
  dispatch({
      type: 'DELETE_PHONE_FROM_BASKET',
      payload: id
  })
}

export const updateTotalPrice = price => dispatch => {
  dispatch({
      type: 'UPDATE_TOTAL_PRICE',
      payload: price
  })
}

export const updateTotalPriceAfrerDeleting = price => dispatch => {
  dispatch({
      type: 'UPDATE_TOTAL_PRICE_AFTER_DELETING',
      payload: price
  })
}