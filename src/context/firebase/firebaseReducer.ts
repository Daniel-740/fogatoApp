import { GET_PRODUCTS_EXIST } from "./typesReducer";

export default (state: any, action: any) => {
    switch (action.type){
        case GET_PRODUCTS_EXIST:
            return {
                ...state,
                menu: action.payload
            }

        default: 
            return state;
    }
}