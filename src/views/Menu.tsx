import React, { Fragment, useContext, useEffect } from 'react';
import { FirebaseContext } from '../helpers/firebase';

import { Separator, FlatList, Image, Box, Text } from 'native-base';
import globalStyles from '../styles/global';
import { View } from 'react-native';

export const Menu = () => {
	const appContext = useContext(FirebaseContext);

	const renderItem = (item) => {
		const { id, category, description, exist, image, name, price } = item;

		return (
			<Box style={{ display: 'flex', flexDirection: 'row' }} borderBottomWidth="1" _dark={{
				borderColor: "muted.50"
			  }} borderColor="muted.300" pl={["0", "4"]} pr={["0", "5"]} py="2">
				<View style={{ marginRight: 6}}>
					<Image
						source={{ uri: image }}
						alt={`${name}-fogato`}
						size={'md'}
					/>
				</View>

				<View
					style={{
						width: '100%',
						paddingHorizontal: 12,
						display: 'flex',
						justifyContent: 'center',
					}}>
					<Text style={{ marginVertical: 3 }}>{name}</Text>
					<Text style={{ color: '#979797' }} numberOfLines={2}>
						{description}
					</Text>
					<Text>Price: ${price}</Text>
				</View>
			</Box>
		);
	};

	useEffect(() => {
		if (appContext) {
			appContext.getProducts();
		}
	}, []);

	return (
		<View style={globalStyles.container}>
			<View style={{ backgroundColor: '#FFF' }}>
				{appContext?.menu ? (
					<FlatList
						data={appContext.menu}
						renderItem={({ item }) => renderItem(item)}></FlatList>
				) : null}
			</View>
		</View>
	);
};
