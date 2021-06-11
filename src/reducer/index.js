import { combineReducers } from 'redux'

import MainReducer from './MainReducer'
import ShoppingCart from './ShoppingCartReducer'
import FavoriteReducer from './FavoriteReducer'

export default combineReducers({
    phones: MainReducer,
    shoppingCart: ShoppingCart,
    favorite: FavoriteReducer
})