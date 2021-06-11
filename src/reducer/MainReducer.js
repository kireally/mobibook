const initialState = {
    phones: [],
    loading: false,
    filterAll: false,
    filterApple: false,
    filterSamsung: false,
    filterXiaomi: false,
    filterHuawei: false,
    filterPopularity: false,
    filterPrice: false,
    filterAlphabet:false,
    basket: []
}
  
  const reducer = (state = initialState, action) => {
    if(action.type === 'GET_PHONES_START') {
        return {
          ...state,
          loading: true
        }
      }
    
      if(action.type === 'GET_PHONES_SUCCESS') {
        return {
          ...state,
          phones: action.payload
        }
      }
    
      if(action.type === 'GET_PHONES_FAILURE') {
        return {
          ...state,
          loading: false
        }
      }

      if(action.type === 'FILTER_PRICE_START') {
        return {
          ...state,
          loading: true,
          filterAll: false,
          filterApple: false,
          filterSamsung: false,
          filterXiaomi: false,
          filterHuawei: false,
          filterPopularity: false,
          filterPrice: true,
          filterAlphabet:false
        }
      }
    
      if(action.type === 'FILTER_PRICE_SUCCESS') {
        return {
          ...state,
          phones: action.payload
        }
      }
    
      if(action.type === 'FILTER_PRICE_FAILURE') {
        return {
          ...state,
          loading: false
        }
      }

      if(action.type === 'FILTER_ALPHABET_START') {
        return {
          ...state,
          loading: true,
          filterAll: false,
          filterApple: false,
          filterSamsung: false,
          filterXiaomi: false,
          filterHuawei: false,
          filterPopularity: false,
          filterPrice: false,
          filterAlphabet:true
        }
      }
    
      if(action.type === 'FILTER_ALPHABET_SUCCESS') {
        return {
          ...state,
          phones: action.payload
        }
      }
    
      if(action.type === 'FILTER_ALPHABET_FAILURE') {
        return {
          ...state,
          loading: false
        }
      }

      if(action.type === 'FILTER_POPULARITY_START') {
        return {
          ...state,
          loading: true,
          filterAll: false,
          filterApple: false,
          filterSamsung: false,
          filterXiaomi: false,
          filterHuawei: false,
          filterPopularity: true,
          filterPrice: false,
          filterAlphabet:false
        }
      }
    
      if(action.type === 'FILTER_POPULARITY_SUCCESS') {
        return {
          ...state,
          phones: action.payload
        }
      }
    
      if(action.type === 'FILTER_POPULARITY_FAILURE') {
        return {
          ...state,
          loading: false
        }
      }

      if(action.type === "FILTER_ALL_START") {
        return {
          ...state,
          loading: true,
          filterAll: true,
          filterApple: false,
          filterSamsung: false,
          filterXiaomi: false,
          filterHuawei: false,
          filterPopularity: false,
          filterPrice: false,
          filterAlphabet:false
        }
      }

      if(action.type === "FILTER_ALL_SUCCESS") {
        return {
          ...state,
          phones: action.payload
        }
      }

      if(action.type === "FILTER_ALL_FAILURE") {
        return {
          ...state,
          loading: false
        }
      }

      if(action.type === "FILTER_APPLE_START") {
        return {
          ...state,
          loading: true,
          filterAll: false,
          filterApple: true,
          filterSamsung: false,
          filterXiaomi: false,
          filterHuawei: false,
          filterPopularity: false,
          filterPrice: false,
          filterAlphabet:false
        }
      }

      if(action.type === "FILTER_APPLE_SUCCESS") {
        return {
          ...state,
          phones: action.payload
        }
      }

      if(action.type === "FILTER_APPLE_FAILURE") {
        return {
          ...state,
          loading: false
        }
      }

      if(action.type === "FILTER_SAMSUNG_START") {
        return {
          ...state,
          loading: true,
          filterAll: false,
          filterApple: false,
          filterSamsung: true,
          filterXiaomi: false,
          filterHuawei: false,
          filterPopularity: false,
          filterPrice: false,
          filterAlphabet:false
        }
      }

      if(action.type === "FILTER_SAMSUNG_SUCCESS") {
        return {
          ...state,
          phones: action.payload
        }
      }

      if(action.type === "FILTER_SAMSUNG_FAILURE") {
        return {
          ...state,
          loading: false
        }
      }

      if(action.type === "FILTER_XIAOMI_START") {
        return {
          ...state,
          loading: true,
          filterAll: false,
          filterApple: false,
          filterSamsung: false,
          filterXiaomi: true,
          filterHuawei: false,
          filterPopularity: false,
          filterPrice: false,
          filterAlphabet:false
        }
      }

      if(action.type === "FILTER_XIAOMI_SUCCESS") {
        return {
          ...state,
          phones: action.payload
        }
      }

      if(action.type === "FILTER_XIAOMI_FAILURE") {
        return {
          ...state,
          loading: false
        }
      }

      if(action.type === "FILTER_HUAWEI_START") {
        return {
          ...state,
          loading: true,
          filterAll: false,
          filterApple: false,
          filterSamsung: false,
          filterXiaomi: false,
          filterHuawei: true,
          filterPopularity: false,
          filterPrice: false,
          filterAlphabet:false
        }
      }

      if(action.type === "FILTER_HUAWEI_SUCCESS") {
        return {
          ...state,
          phones: action.payload
        }
      }

      if(action.type === "FILTER_HUAWEI_FAILURE") {
        return {
          ...state,
          loading: false
        }
      }

      if(action.type === "ADD_PHONE_TO_BASKET") {
        return {
          ...state,
          basket: [...state.basket,action.payload]
        }
      }

      if(action.type === "DELETE_PHONE_FROM_BASKET") {
        let updatedBasket = [].concat(state.basket)
        updatedBasket.splice(updatedBasket.indexOf(action.payload), 1)
        return {
          ...state,
          basket: updatedBasket
        }
      }

      return state;
  }

  
  export default reducer;