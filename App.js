import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const WelcomeScreen = ({ navigation }) => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	return (
		<View style={styles.container}>
			<Text>Hello!</Text>
			<Text>Enter your name: </Text>
			<TextInput
				style={styles.Input}
				placeholder="e.g. John Doe"
				onChangeText={(val) => setName(val)}
			/>
			<Text>Enter your age:</Text>
			<TextInput
				style={styles.Input}
				placeholder="e.g. 99"
				onChangeText={(val) => setAge(val)}
			/>
			<Text>
				Hi {name}! Just to confirm you are {age}years old!
			</Text>
			<StatusBar style="auto" />
			<Button
				title="Let's Go!"
				onPress={() => navigation.navigate("Start", { name, age })}
			></Button>
		</View>
	);
};

const StartScreen = ({ navigation, route }) => {
	return (
		<View style={styles.container}>
			<Text> What do you want to do today {route.params.name} ?</Text>
			<Button title="Calendar" onPress={() => {}}></Button>
			<Button title="Finances" onPress={() => {}}></Button>
			<Button title="Productivity" onPress={() => {}}></Button>
		</View>
	);
};

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Welcome"
					component={WelcomeScreen}
					options={{
						title: "Welcome",
						headerTitleAlign: "center",
					}}
				/>
				<Stack.Screen name="Start" component={StartScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	Input: {
		borderWidth: 1,
		borderColor: "#777",
		padding: 8,
		margin: 10,
		width: 200,
	},
});
