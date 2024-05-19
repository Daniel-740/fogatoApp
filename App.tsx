import 'react-native-gesture-handler';
import React from 'react';
import { AppNavigator } from './src/navigator';
import FirebaseState from './src/context/firebase/firebaseState';
import OrderState from './src/context/orders/ordersState';
import { NativeBaseProvider } from 'native-base';

function App(): React.JSX.Element {
	return (
		<>
			<NativeBaseProvider>
				<FirebaseState>
					<OrderState>
						<AppNavigator />
					</OrderState>
				</FirebaseState>
			</NativeBaseProvider>
		</>
	);
}

export default App;
