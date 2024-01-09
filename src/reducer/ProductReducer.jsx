import { CLEAR_ERRORS, GET_ALL_PRODUCT_USER_FAIL, GET_ALL_PRODUCT_USER_REQUEST, GET_ALL_PRODUCT_USER_SUCCESS } from "../constant/ProductConstant"


export const getAllProductUser = (state = {product : []}, action) =>{
    switch(action.type){
        case GET_ALL_PRODUCT_USER_REQUEST :
            
        return{
            loading : true,
            ...state
        }

        case GET_ALL_PRODUCT_USER_SUCCESS : 
        return {
            loading : false,
            product : action.payload
        }

        case GET_ALL_PRODUCT_USER_FAIL :
            return {
                loading :false,
                error : action.payload,

            }
        case  CLEAR_ERRORS : {
            return {
                ...state,
                error : null
            }
        }

        default : 
        return state
    }
}