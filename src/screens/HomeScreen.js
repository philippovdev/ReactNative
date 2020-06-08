import React                              from 'react'
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
	return <View>
		<Text style={ styles.text }>Calculator!</Text>
		<Button
			onPress={() => navigation.navigate('Components')}
			title='Go to Components Demo'
		/>
		<Button
			onPress={() => navigation.navigate('List')}
			title='Go to List Demo'
		/>
	</View>
}

const styles = StyleSheet.create({
									 text: {
										 fontSize: 20,
									 },
								 })

export default HomeScreen
