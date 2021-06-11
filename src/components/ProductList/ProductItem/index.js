import React, { useCallback } from 'react'

import './style.css'

import { useDispatch } from 'react-redux';

import { addPhoneToBasket } from '../../../actions/MainActions'
import { updateTotalPrice } from '../../../actions/ShoppingCartActions'


export const ProductItem =(props) => {
    const dispatch = useDispatch();

    const onAddPhoneToBasketClick = useCallback((id, price) => {
        dispatch(addPhoneToBasket(id))
        dispatch(updateTotalPrice(price))
      }, [dispatch]);

    return (
        <div className="product">
            <img
                className="product-img" 
                src={props.src}
            />
            <p className="product-name">{props.name}</p>
            <div className="product-equipment">
                <div className="product-color">
                    <div className="choice-element">
                        <p>{`${props.color[0]}`}</p>
                    </div>
                    <div className="choice-element">
                        <p>{`${props.color[1]}`}</p>
                    </div>
                    <div className="choice-element">
                        <p>{`${props.color[2]}`}</p>
                    </div>
                </div>
                <div className="product-memory">
                    <div className="choice-element">
                        <p>{`${props.memory[0]} GB`}</p>
                    </div>
                    <div className="choice-element">
                        <p>{`${props.memory[1]} GB`}</p>
                    </div>
                    
                </div>
            </div>
            <div className="product-order">
                <div className="product-price">
                    <p>{`от ${props.price[0]} $`}</p>
                </div>
                <div 
                    className="product-add"
                    onClick={() => onAddPhoneToBasketClick(props.id, props.price[0])}>
                    <p>Добавить</p>
                </div>
            </div>
        </div>
    )
}