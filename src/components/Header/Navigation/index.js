import React from 'react'

import { Link } from 'react-router-dom'

import './style.css'

import { ROUTES } from '../../../consts'

import home from '../../../assets/images/header/home.png'
import profile from '../../../assets/images/header/profile.png'
import favorite from '../../../assets/images/header/favorite.png'
import shoppingCart from '../../../assets/images/header/shopping-cart.png'


const Navigation = () => {
  return (
    <div className="navigation">
      <Link
        to={ROUTES.MAIN}
        className="navigation__item navigation__item-home"
      >
        <img className="navigation__img" src={home} />
      </Link>
      
      <Link 
        to={ROUTES.PROFILE}  
        className="navigation__item navigation__item-profile"
      >
          <img className="navigation__img" src={profile}/>
      </Link>

      <Link 
        to={ROUTES.FAVORITE} 
        className="navigation__item navigation__item-favorite"
        >
        <img className="navigation__img" src={favorite}/>
      </Link>

      <Link 
        to={ROUTES.SHOPPING_CART} 
        className="navigation__item navigation__item-basket"
      >
        <img className="navigation__img" src={shoppingCart} />
      </Link>
    </div>
  )
}

export default Navigation