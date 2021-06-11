import React from 'react'

import './style.css'

import { useSelector } from 'react-redux'

import { FavoriteItem } from './FavoriteItem'


const Favorite = () => {

  const phones = useSelector(state => state.phones.phones)
  const favoritePhones = useSelector(state => state.favorite.favoritePhones)
  return (
    <div className="favorite"> 
      <p className="favorite-title">Избранное</p>
      <div className="favorite-items">
        {favoritePhones.map(item => {
          let currentPhone = phones.find(phone => phone.id === item)
          return (
            <FavoriteItem
              key={item}
              picture={currentPhone.picture}
              name={currentPhone.name}
              price={currentPhone.price}
              id={currentPhone.id}
            />
          ) 
        })}
      </div>
    </div>
  )
}

export default Favorite