import React, { useCallback } from 'react'

import './style.css'

import { useDispatch, useSelector } from 'react-redux';

import { filterAll, 
         filterApple, 
         filterSamsung, 
         filterXiaomi, 
         filterHuawei, 
         filterPrice, 
         filterAlphabet,
         filterPopularity } from '../../actions/MainActions'

export const ProductNavigation = () => {

  const dispatch = useDispatch();

  const filterAllBtn = useSelector(state => state.phones.filterAll);
  const filterAppleBtn = useSelector(state => state.phones.filterApple);
  const filterSamsungBtn = useSelector(state => state.phones.filterSamsung);
  const filterXiaomiBtn = useSelector(state => state.phones.filterXiaomi);
  const filterHuaweiBtn = useSelector(state => state.phones.filterHuawei);
  const filterPopularityBtn = useSelector(state => state.phones.filterPopularity)
  const filterPriceBtn = useSelector(state => state.phones.filterPrice)
  const filterAlphabetBtn = useSelector(state => state.phones.filterAlphabet)

  const onFilterAllClick = useCallback(() => {
    dispatch(filterAll())
  }, [dispatch]);

  const onFilterAppleClick = useCallback(() => {
    dispatch(filterApple())
  }, [dispatch]);

  const onFilterSamsungClick = useCallback(() => {
    dispatch(filterSamsung())
  }, [dispatch]);

  const onFilterXiaomiClick = useCallback(() => {
    dispatch(filterXiaomi())
  }, [dispatch]);

  const onFilterHuaweiClick = useCallback(() => {
    dispatch(filterHuawei())
  }, [dispatch]);

  const onFilterPriceClick = useCallback(() => {
    dispatch(filterPrice())
  }, [dispatch]);

  const onFilterAlphabetClick = useCallback(() => {
    dispatch(filterAlphabet())
  }, [dispatch]);

  const onFilterPopularityClick = useCallback(() => {
    dispatch(filterPopularity())
  }, [dispatch]);

  return (
    <div className="product-navigation">
      <div className="products-brand">
        <div 
          className={filterAllBtn ? 'product-brand product-brand-active' : 'product-brand'}
          onClick={onFilterAllClick}>
            <p>??????</p>
        </div>
        <div 
          className={filterAppleBtn ? 'product-brand product-brand-active' : 'product-brand'}
          onClick={onFilterAppleClick}>
            <p>Apple</p>
        </div>
        <div 
          className={filterSamsungBtn ? 'product-brand product-brand-active' : 'product-brand'}
          onClick={onFilterSamsungClick}>
            <p>Samsung</p>
        </div>
        <div 
          className={filterXiaomiBtn ? 'product-brand product-brand-active' : 'product-brand'}
          onClick={onFilterXiaomiClick}>
            <p>Xiaomi</p>
        </div>
        <div 
          className={filterHuaweiBtn ? 'product-brand product-brand-active' : 'product-brand'}
          onClick={onFilterHuaweiClick}>
            <p>Huawei</p>
        </div>
      </div>
      <div className="products-sort">
          <p className="products-sort-text">???????????????????? ????:</p>
          <div className="products-sort-by">
            <div 
              className={filterPopularityBtn ? 'product-brand product-brand-active' : 'product-brand'}
              onClick={onFilterPopularityClick}>
              <p>????????????????????????</p>
            </div>
            <div
              className={filterPriceBtn ? 'product-brand product-brand-active' : 'product-brand'}
              className="product-brand"
              onClick={onFilterPriceClick}>
              <p>????????</p>
            </div>
            <div
              className={filterAlphabetBtn ? 'product-brand product-brand-active' : 'product-brand'} 
              className="product-brand"
              onClick={onFilterAlphabetClick}
              >
              <p>????????????????</p>
            </div>
          </div>
      </div>
      
    </div>
    
  )

  
}
