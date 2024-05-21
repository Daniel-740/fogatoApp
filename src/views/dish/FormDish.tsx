import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
	FormControl,
	Input,
	Stack,
	Button,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import globalStyles from '../../styles/global';
import useOrder from '../../context/orders/ordersContext';

export const FormDish = () => {
	return (
		<View>
			<FormControl>
				<Text style={globalStyles.title}>Amount</Text>

				<Stack space={3} direction={'row'} width={'100%'} justifyContent={'center'}>
					<Stack direction={'column'} width={'33%'}>
						<Button backgroundColor={'black'} style={styles.button}>
							<Icon name={'minus'} color={'#FFF'} style={{ fontSize: 20
							}}/>
						</Button>
					</Stack>
					<Stack direction={'column'} width={'33%'} style={{
						justifyContent: 'center'
					}}>
						<Input 
							variant={'unstyled'}
							style={styles.input}
							value="1"
						/>
					</Stack>
					<Stack direction={'column'} width={'33%'}>
						<Button backgroundColor={'black'} style={styles.button}>
							<Icon name={'plus'} color={'#FFF'} style={{ fontSize: 20
							}} />
						</Button>
					</Stack>
				</Stack>
			</FormControl>
		</View>
	);
};

const styles = StyleSheet.create({
	grid: {
		width: '100%',
	},
	button: {
		height: 80,
		justifyContent: 'center'
	},
	input: {
		textAlign: 'center',
		fontSize: 20,
		borderWidth: 0,
		borderColor: '#FFF'
	}
});

export default FormDish;
