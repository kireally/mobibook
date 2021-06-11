import axios from 'axios'

export const getPhones = () => {
  return async (dispatch) => {

    dispatch({
      type: 'GET_PHONES_START'
    })

    try {
          const response = await axios.get("http://localhost:3000/phones?_sort=popularity&_order=DESC")
          dispatch({
            type: 'GET_PHONES_SUCCESS',
            payload: response.data
          })

    } catch (err) {
        dispatch({
          type: 'GET_PHONES_FAILURE'
        })
        console.log(err);
      }
  }

}

export const filterAll = () => {
    return async (dispatch) => {

        dispatch({
          type: 'FILTER_ALL_START'
        })
    
        try {
              const response = await axios.get("http://localhost:3000/phones")
              dispatch({
                type: 'FILTER_ALL_SUCCESS',
                payload: response.data
              })
    
        } catch (err) {
            dispatch({
              type: 'FILTER_ALL_FAILURE'
            })
    
            console.log(err);
          }
      }
}

export const filterApple = () => {
    return async (dispatch) => {

        dispatch({
          type: 'FILTER_APPLE_START'
        })
    
        try {
              const response = await axios.get("http://localhost:3000/phones?name_like=^iPhone")
              dispatch({
                type: 'FILTER_APPLE_SUCCESS',
                payload: response.data
              })
    
        } catch (err) {
            dispatch({
              type: 'FILTER_APPLE_FAILURE'
            })
    
            console.log(err);
          }
    }
}

export const filterSamsung = () => {

    return async (dispatch) => {

        dispatch({
          type: 'FILTER_SAMSUNG_START'
        })
    
        try {
              const response = await axios.get("http://localhost:3000/phones?name_like=^Samsung")
              dispatch({
                type: 'FILTER_SAMSUNG_SUCCESS',
                payload: response.data
              })
    
        } catch (err) {
            dispatch({
              type: 'FILTER_SAMSUNG_FAILURE'
            })
    
            console.log(err);
          }
    }
}

export const filterXiaomi = () => {

    return async (dispatch) => {

        dispatch({
          type: 'FILTER_XIAOMI_START'
        })
    
        try {
              const response = await axios.get("http://localhost:3000/phones?name_like=^Xiaomi")
              dispatch({
                type: 'FILTER_XIAOMI_SUCCESS',
                payload: response.data
              })
    
        } catch (err) {
            dispatch({
              type: 'FILTER_XIAOMI_FAILURE'
            })
    
            console.log(err);
          }
    }
}

export const filterHuawei = () => {

    return async (dispatch) => {

        dispatch({
          type: 'FILTER_HUAWEI_START'
        })
    
        try {
              const response = await axios.get("http://localhost:3000/phones?name_like=^Huawei")
              dispatch({
                type: 'FILTER_HUAWEI_SUCCESS',
                payload: response.data
              })
    
        } catch (err) {
            dispatch({
              type: 'FILTER_HUAWEI_FAILURE'
            })
    
            console.log(err);
          }
    }
}

export const filterPrice = () => {

    return async (dispatch) => {

        dispatch({
          type: 'FILTER_PRICE_START'
        })
    
        try {
              const response = await axios.get("http://localhost:3000/phones?_sort=price[0]&_order=ASC")
              dispatch({
                type: 'FILTER_PRICE_SUCCESS',
                payload: response.data
              })
    
        } catch (err) {
            dispatch({
              type: 'FILTER_PRICE_FAILURE'
            })
    
            console.log(err);
          }
    }
}

export const filterAlphabet = () => {

    return async (dispatch) => {

        dispatch({
          type: 'FILTER_ALPHABET_START'
        })
    
        try {
              const response = await axios.get("http://localhost:3000/phones?_sort=name&_order=ASC")
              dispatch({
                type: 'FILTER_ALPHABET_SUCCESS',
                payload: response.data
              })
    
        } catch (err) {
            dispatch({
              type: 'FILTER_ALPHABET_FAILURE'
            })
    
            console.log(err);
          }
    }
}

export const filterPopularity = () => {
    return async (dispatch) => {

        dispatch({
          type: 'FILTER_POPULARITY_START'
        })
    
        try {
              const response = await axios.get("http://localhost:3000/phones?_sort=popularity&_order=ASC")
              dispatch({
                type: 'FILTER_POPULARITY_SUCCESS',
                payload: response.data
              })
    
        } catch (err) {
            dispatch({
              type: 'FILTER_POPULARITY_FAILURE'
            })
    
            console.log(err);
          }
    }
}

export const addPhoneToBasket = id => dispatch => {
    console.log(id);
    dispatch({
        type: 'ADD_PHONE_TO_BASKET',
        payload: id

    })
}