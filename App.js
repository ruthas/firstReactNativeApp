import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	ScrollView,
} from "react-native";

export default function App() {
	const [title, setTitle] = useState("THIS IS A LOUD TITLE");
	const [person, setPerson] = useState({
		name: "Person",
		characteristic: "A person",
	});

	const handleClick = () => {
		setTitle("Look! You're now a Changed Person!");
		setPerson({
			name: "Changed Person",
			characteristic: "a Changed Person again",
		});
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<Text>🥳🥳🥳</Text>
				<Text style={styles.titleStyle}>{title}</Text>
				<Text>The are a person's details:</Text>
				<Text>Name: {person.name}</Text>
				<Text>Characteristic: {person.characteristic}</Text>
				<View style={styles.buttonStyle}>
					<Button title="Become a Changed Person" onPress={handleClick} />
				</View>
				<View style={styles.buttonStyle}>
					<Button
						title="Click over here 👁👁"
						onPress={() => alert("I SEE YOU")}
					/>
				</View>
				<View style={styles.image}>
					<Image source={require("./assets/cool-corgi.jpg")} />
					<Image source={require("./assets/cool-corgi.jpg")} />
					<Image source={require("./assets/cool-corgi.jpg")} />
					<Image source={require("./assets/cool-corgi.jpg")} />
					<Image source={require("./assets/cool-corgi.jpg")} />
				</View>
			</ScrollView>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		paddingTop: 65,
		backgroundColor: "#bde0fe",
		justifyContent: "center",
	},
	titleStyle: {
		fontSize: 24,
		fontWeight: "bold",
		color: "purple",
		textTransform: "uppercase",
	},
	textStyle: {
		fontSize: 24,
		padding: 25,
	},
	buttonStyle: {
		padding: 20,
		margin: 20,

		borderRadius: 4,
		backgroundColor: "#ffc8dd",
	},
	image: {
		marginHorizontal: 10,
		marginTop: 15,
	},
});
