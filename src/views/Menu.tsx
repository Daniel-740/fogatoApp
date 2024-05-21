import React, { useContext, useEffect } from 'react';
import { FirebaseContext } from '../helpers/firebase';
import { useNavigation } from '@react-navigation/native';

import { FlatList, Image, Box, Text } from 'native-base';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import useOrder from '../context/orders/ordersContext';

type itemListType = {
	id: string;
	category: string;
	description: string;
	image: string;
	name: string;
	price: string;
};

export const Menu = () => {
	const firebaseAppContext = useContext(FirebaseContext);
	const { selectDish } = useOrder();

	const router = useNavigation();

	const handleDish = (dish: itemListType) => {
			selectDish(dish);
			router.navigate('DetailDish');
	};

	const renderItem = (item: itemListType, index: number) => {
		const { id, category, description, image, name, price } = item;

		return (
			<>
				{viewHeading(category, index)}

				<TouchableOpacity onPress={() => handleDish(item)}>
					<Box
						style={styles.box}
						borderBottomWidth="1"
						_dark={{
							borderColor: 'muted.50',
						}}
						borderColor="muted.300"
						pl={['0', '4']}
						pr={['0', '5']}
						py="2">
						<View style={{ marginRight: 6, marginLeft: 14 }}>
							<Image
								source={{ uri: image }}
								alt={`${name}-fogato`}
								size={'md'}
								style={{ objectFit: 'cover' }}
							/>
						</View>

						<View style={styles.containerListText}>
							<Text style={styles.listName}>{name}</Text>
							<Text
								style={styles.listDescription}
								numberOfLines={2}>
								{description}
							</Text>
							<Text>Price: ${price}</Text>
						</View>
					</Box>
				</TouchableOpacity>
			</>
		);
	};

	const viewHeading = (category: string, index: number) => {
		if (index > 0) {
			const beforeCategory = firebaseAppContext?.menu[index - 1].category;

			if (beforeCategory !== category) {
				return (
					<View style={styles.boxSeparator}>
						<Text style={styles.textSeparator}>{category}</Text>
					</View>
				);
			}
		} else {
			return (
				<View style={styles.boxSeparator}>
					<Text style={styles.textSeparator}>{category}</Text>
				</View>
			);
		}
	};

	useEffect(() => {
		if (firebaseAppContext) {
			firebaseAppContext.getProducts();
		}
	}, []);

	return (
		<View>
			<View style={{ backgroundColor: '#FFF' }}>
				{firebaseAppContext?.menu ? (
					<FlatList
						data={firebaseAppContext.menu}
						renderItem={({ item, index }) =>
							renderItem(item, index)
						}></FlatList>
				) : null}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	box: {
		display: 'flex',
		flexDirection: 'row',
	},
	containerListText: {
		width: '100%',
		paddingHorizontal: 12,
		display: 'flex',
		justifyContent: 'center',
	},
	listName: { marginVertical: 3 },
	listDescription: { color: '#979797', textAlign: 'left', width: '75%' },
	boxSeparator: {
		backgroundColor: '#000',
		paddingVertical: 9,
		marginBottom: 10,
	},
	textSeparator: {
		color: '#FFDA00',
		fontWeight: 'bold',
		marginLeft: 10,
		textTransform: 'uppercase',
	},
});
