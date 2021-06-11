import React from 'react'

import './style.css'

import { useSelector } from 'react-redux'

import { ShoppingCartItem } from './ShoppingCartItem'

import shoppingCart from '../../assets/images/main/shopping-cart.png'
import checkMark from '../../assets/images/main/checkmark.png'

const ShoppingCart = () => {
  const basket = useSelector(state => state.phones.basket)
  const phones = useSelector(state => state.phones.phones)
  const totalPrice = useSelector(state => state.shoppingCart.totalPrice)

  return (
    basket.length ?
    (
      <div className="shopping-cart">
        <div className="shopping-cart-title">
          <img className="shopping-cart-icon" src={shoppingCart} alt="" />
          <p>Корзина</p>
        </div>

        <div className="shopping-cart-bottom-conatainer">
          <div className="shopping-cart-main">
            {basket.map((item) => {
              let currentPhone = phones.find(phone => phone.id === item)
              return (
                <ShoppingCartItem 
                  key={item}
                  picture={currentPhone.picture}
                  color={currentPhone.color}
                  memory={currentPhone.memory}
                  name={currentPhone.name}
                  price={currentPhone.price}
                  id={currentPhone.id}/>
              )
            })}
          </div>

          <div className="shopping-cart-ordering">
            <div className="promocode">
              <p className="promocode-title">Введите промокод</p>
              <div className="promocode-input">
                <input type="text" placeholder="Промокод" />
                <div className="promocode-check">
                  <img className="checkmark" src={checkMark} alt="" />
                </div>
              </div>
            </div>

            <div className="ordering">
              <div className="ordering-main">
                <div className="order-length">
                  <p>Товары ({basket.length})</p>
                  <p>{totalPrice} $</p>
                </div>
                <div className="order-total-price">
                  <p>Итого к оплате:</p>
                  <p className="total-price">{totalPrice} $</p>
                </div>
              </div>
              <div className="ordering-button">
                <p>Оформить заказ</p>
              </div>
            </div>
          </div>
        </div>  
      </div>
    ) 
    :
    (
      <div className="empty-shopping-cart">
        <h2>Корзина пустая</h2>
        <p className="empty-shopping-cart-descr">Вероятнее всего, вы еще ничего не заказали</p>
        <p className="empty-shopping-cart-descr">Для того, чтобы заказать телефон, перейдите на главную страницу</p>
        <img className="empty-shopping-cart-img" src={shoppingCart} alt="" />
      </div>
    )
  )
}

export default ShoppingCart