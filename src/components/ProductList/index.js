import React, { useEffect } from 'react'

import './style.css'

import { useDispatch, useSelector } from 'react-redux';
import { getPhones } from '../../actions/MainActions'

import { ProductItem } from './ProductItem'
// import { useState } from 'react'


export const ProductList =() => {
    const dispatch = useDispatch();

    const phones = useSelector(state => state.phones.phones);

    useEffect(() => {
        dispatch(getPhones());
    }, [dispatch])





    return (
        <div className="products-main">
            <h2 className="products-title">Все товары</h2>
            <div className="products">
                {phones.map(item => {
                    return (
                        <ProductItem 
                            key={item.id}
                            name={item.name}
                            src={item.picture} 
                            price={item.price}
                            color={item.color}
                            memory={item.memory}
                            id={item.id}/>  
                    )  
                })}
            </div>
        </div>
    )
}