//import
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
import { addToCart } from './reducer/CartReducer';
import { getAllProductUser } from './reducer/ProductReducer';



// reducer
const reducer = combineReducers({

    getproduct : getAllProductUser,
    cartItem : addToCart
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