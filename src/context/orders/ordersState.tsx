import React, { useReducer } from 'react';

import ordersReducer from './ordersReducer';
import OrderContext from './ordersContext';

type propsType = {
    children: JSX.Element;
}

type stateType = {
    dish: any;
}

const OrderState = (props: propsType): JSX.Element => {

    //init state
    const initialState: stateType = {
        dish: []
    }

    // useReducer with dispatch
    const [ state, dispatch ] = useReducer(ordersReducer, initialState);

    return (
        <OrderContext.Provider value={{
            order: state.order
        }}>
            {props.children}
        </OrderContext.Provider>
    )
}

export default OrderState;