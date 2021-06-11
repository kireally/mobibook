import React, { useState} from 'react'

import './style.css'

import { useDispatch } from 'react-redux';

import deleteItem from '../../../assets/images/main/delete.png'
import favoriteItem from '../../../assets/images/header/favorite.png'

import { deletePhoneFromBasket } from '../../../actions/ShoppingCartActions'
import { updateTotalPriceAfrerDeleting } from '../../../actions/ShoppingCartActions'
import { updateTotalPrice } from '../../../actions/ShoppingCartActions'
import { addPhoneToFavorite } from '../../../actions/FavoriteActions'


export const ShoppingCartItem = (props) => {

  const [count, setCount] = useState(1)


  const dispatch = useDispatch();

  const onDeleteImgClick = (id) => {
    dispatch(deletePhoneFromBasket(id))
    dispatch(updateTotalPriceAfrerDeleting(props.price[0]))
  }

  const onFavoriteImgClick = (id) => {
    dispatch(addPhoneToFavorite(id))
  }

  const plus = () => {
    setCount(count + 1)
    dispatch(updateTotalPrice(props.price[0]))
  }

const minus = () => {
  if(count > 1) {
    setCount(count - 1)
    dispatch(updateTotalPriceAfrerDeleting(props.price[0]))
  }
}

  return (
    <div className="shopping-cart-item">
      <img src={props.picture} alt="" />
      <div className="item-characteristics">
        <p>{props.name}</p>
        <p>{props.color[0], `${props.memory[0]}gb`}</p>
        <p>{`${props.price[0]}$/шт`}</p>
      </div>

      <div>
        <button onClick={minus}>-</button>  
        <span>{count}</span>
        <button onClick={plus}>+</button>
      </div>

      <div className="total-item-price">
        <p>{`${count * props.price[0]}$`}</p>
      </div>
      <div className="item-operations">
        <img 
          className="item-favorite-img" 
          src={favoriteItem} alt="" 
          onClick={() => onFavoriteImgClick(props.id)}/>
        <img 
          className="item-delete-img" 
          src={deleteItem} alt=""
          onClick={() => onDeleteImgClick(props.id)} />
      </div>
    </div>
  )
}