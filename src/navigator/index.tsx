import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DetailDish from '../views/dish/DetailDish';
import FormDish from '../views/dish/FormDish';
import NewOrder from '../views/order/NewOrder';
import OrderProgress from '../views/order/OrderProgress';
import OrderSummary from '../views/order/OrderSummary';
import { Menu } from '../views/Menu';
import { RootStackNavigatorParamListType } from './types';

const Stack = createStackNavigator<RootStackNavigatorParamListType>();

const SCREEN_OPTIONS = {
	headerStyle: {
		backgroundColor: '#E65654',
	},
	headerTitleStyle: {
		fontWeight: 'bold',
		color: '#FFFFFF',
	},
	headerTintColor: '#FFFFFF',
};

const CONTAINER_THEME = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: '#FFF',
	},
};

export const AppNavigator = () => {
	return (
		<NavigationContainer theme={CONTAINER_THEME}>
			<Stack.Navigator screenOptions={SCREEN_OPTIONS}>
				<Stack.Screen
					name="NewOrder"
					component={NewOrder}
					options={{
						title: 'New Order',
						headerTitleAlign: 'center',
					}}
				/>

				<Stack.Screen
					name="Menu"
					component={Menu}
					options={{
						title: 'Menu',
						headerTitleAlign: 'center',
					}}
				/>

				<Stack.Screen
					name="DetailDish"
					component={DetailDish}
					options={{
						title: 'Detail Dish',
						headerTitleAlign: 'center',
					}}
				/>

				<Stack.Screen
					name="FormDish"
					component={FormDish}
					options={{
						title: 'Form Dish',
						headerTitleAlign: 'center',
					}}
				/>

				<Stack.Screen
					name="OrderSummary"
					component={OrderSummary}
					options={{
						title: 'Order Summary',
						headerTitleAlign: 'center',
					}}
				/>

				<Stack.Screen
					name="OrderProgress"
					component={OrderProgress}
					options={{
						title: 'Order Progress',
						headerTitleAlign: 'center',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
