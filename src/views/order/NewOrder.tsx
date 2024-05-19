import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'native-base';
import globalStyles from '../../styles/global';
import { useNavigation } from '@react-navigation/native';

export const NewOrder = () => {
	
	const router = useNavigation();
	
	return (
		<View style={globalStyles.container}>
			<View>
				<Text>Ola</Text>
			</View>
			<View style={styles.contentButton}>
				<Button rounded={'full'} style={globalStyles.button} onPress={() => router.navigate('Menu')}>
					<Text style={globalStyles.textbutton}>New Order</Text>
				</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	contentButton: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-end',
		paddingBottom: 35
	},
});

export default NewOrder;
