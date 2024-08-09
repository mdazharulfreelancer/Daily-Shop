//import
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import { addToCart } from './reducer/CartReducer';
import { getAllDilevariProductPhone, getAllLowPriceProductPhone, getAllNewProductPcRight, getAllNewProductPhone, getAllProductFlashSalePc, getAllProductFlashSalePcpage, getAllProductFlashSalePhoneReducer, getAllProductHomeJustForYouPc, getAllProductHomeJustForYouPcProduct, getAllProductHomeJustForYouPhoneLeft, getAllProductHomeJustForYouPhoneRight, getAllProductUser, getProductDitalsIdName } from './reducer/ProductReducer';
import { cteateProductreducer } from './reducer/UserReducer';



// reducer
const reducer = combineReducers({

    getproduct : getAllProductUser,
    cartItem : addToCart,
    justforyoupc : getAllProductHomeJustForYouPc,
    ProductDital : getProductDitalsIdName,
//phone ------------------------------
    HomeJustForYouProductsLeft : getAllProductHomeJustForYouPhoneLeft,
    newproductphone : getAllNewProductPhone,
    lowpriceproductphone : getAllLowPriceProductPhone,
    freedalivariPhone : getAllDilevariProductPhone,
    loaduser : cteateProductreducer ,
//phone ------------------------------
//Pc for product store --------------------------------
  HomeJustForYouProductsPc : getAllProductHomeJustForYouPcProduct,
//Pc for product store --------------------------------
    HomeJustForYouProductsRight : getAllProductHomeJustForYouPhoneRight,
    FlashSalePc : getAllProductFlashSalePc,
    FlashSalePhone :getAllProductFlashSalePhoneReducer,
    FlashSalePcPage : getAllProductFlashSalePcpage,
    newproductright : getAllNewProductPcRight,
    lowpriceproduct : getAllLowPriceProductPhone,

})
// inital state
const initialState = {
    cartItem : {
        cartItems : localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
    }
}

//middleware
const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store