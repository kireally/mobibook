import React from 'react'

import './style.css'

export const FavoriteItem = (props) => {
  return (
    <div className="favorite-item">
      <img 
        className="favorite-item-img"
        src={props.picture}/>
      <p className="favorite-item-name">{props.name}</p>
      <div className="favorite-item-bottom-container">
        <p className="favorite-item-price">{props.price[0]}$</p>
        <div className="favorite-item-basket">
          <p>В корзину</p>
        </div>
      </div>
    </div>
  )
  
}