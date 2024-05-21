import React, { useReducer } from 'react';

import ordersReducer from './ordersReducer';
import {OrderContexApp} from './ordersContext';
import {
    SELECT_PRODUCT
} from '../typesReducer';
import { dishType } from './orders';

type propsType = {
    children: JSX.Element;
}

type stateType = {
    order: any;
    dish: dishType | null;
}

const OrderState = (props: propsType): JSX.Element => {

    //init state
    const initialState: stateType = {
        order: [],
        dish: null,
    }

    // useReducer with dispatch
    const [ state, dispatch ] = useReducer(ordersReducer, initialState);

    const selectDish = (dish: dishType) => {
        dispatch({
            type: SELECT_PRODUCT,
            payload: dish
        })
    }

    return (
        <OrderContexApp.Provider value={{
            order: state.order,
            dish: state.dish,
            selectDish
        }}>
            {props.children}
        </OrderContexApp.Provider>
    )
}

export default OrderState;