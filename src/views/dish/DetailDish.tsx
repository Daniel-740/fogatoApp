import React from 'react';
import { Heading, Button, Image } from 'native-base';
import globalStyles from '../../styles/global';

import { StyleSheet, View, Text } from 'react-native';
import useOrder from '../../context/orders/ordersContext';
import { useNavigation } from '@react-navigation/native';

export const DetailDish = () => {
	const { dish } = useOrder();
	const router = useNavigation();

	return (
		<View style={[globalStyles.container, { flex: 1, justifyContent: 'space-between' }]}>
			<View>
				<Heading style={globalStyles.title}>{dish?.name}</Heading>
				<View style={styles.card}>
					<Image
						source={{ uri: dish?.image }}
						alt={`${dish?.name}-fogato`}
						style={globalStyles.detailImage}
					/>

					<Text style={styles.description}>{dish?.description}</Text>
					<Text style={globalStyles.amount}>
						Price: $ {dish?.price}
					</Text>
				</View>
			</View>

			<View
				style={styles.footer}>
				<Button rounded={'full'} style={globalStyles.button} onPress={() => router.navigate('FormDish')}>
					<Text style={globalStyles.textbutton}>Press Order</Text>
				</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		height: 'auto',
		padding: 12,
		borderWidth: 1,
		borderColor: '#c3c3c3',
		borderRadius: 4,
	},
	footer: {
		bottom: 35
	},
	description: {
		marginTop: 20,
		color: '#000'
	},
});

export default DetailDish;
