import React, { useReducer } from 'react';
import firebase from '../../helpers/firebase';
import firebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';
import { GET_PRODUCTS_EXIST } from './typesReducer';
import {
	collection,
	onSnapshot,
	query,
	where,
} from 'firebase/firestore';

type propsType = {
	children: JSX.Element;
};

type stateType = {
	menu: any;
};

const FirebaseState = (props: propsType): JSX.Element => {
	//init state
	const initialState: stateType = {
		menu: [],
	};

	// useReducer with dispatch
	const [state, dispatch] = useReducer(firebaseReducer, initialState);

	const getProducts = () => {

		 onSnapshot(
			query(
				collection(firebase.db, 'products'),
				where('exist', '==', true),
			),
			(item) => {
				let dishResponse = item.docs.map((item) => {
					return {
						id: item.id,
						...item.data(),
					};
				});

                dispatch({
                    type: GET_PRODUCTS_EXIST,
					payload: dishResponse
                });
				
			},
		);
	};

	return (
		<FirebaseContext.Provider
			value={{
				menu: state.menu,
				firebase,
				getProducts,
			}}>
			{props.children}
		</FirebaseContext.Provider>
	);
};

export default FirebaseState;
