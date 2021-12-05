import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [pvBoss, setPvBoss] = useState(500)
  const [turn, setTurn] = useState(null)
  const [count, setCount] = useState(0)
	const boss = {
		attack: 10,
		pv: 500,
		nom: "noratata",
	};
	const tank = {
		attack: 3,
		pv: 50,

	};
	const heal = {
		attack: 2,
		pv: 30,
	};
	const dps = {
		attack: 9,
		pv: 20,
	};

const ordredujeu=[tank,boss,heal,dps]
const newGame=()=>{
setTurn(ordredujeu[0])

}

	const attaque = (attaquant, attaqué) => {
		console.log("les points du " + attaqué.nom + " sont de " + pvBoss);
		attaqué.pv = attaqué.pv - attaquant.attack;
    setPvBoss(pvBoss=>pvBoss-attaquant.attack)
		console.log("les points du " + attaqué.nom + " sont de " + pvBoss);
	};

	
	console.log("boss", boss);
	return (
		<View style={styles.container}>
			<Text>{JSON.stringify(turn)}</Text>
			<Text>{count}</Text>
			<Pressable onPress={()=>newGame()}>
				<View style={{ width: 200, height: 100, backgroundColor: "black" }}>
					<Text style={{ color: "white" }}>nouvelle partie</Text>
				</View>
			</Pressable>
			<Pressable onPress={()=>setCount(count=>count+1)}>
				<View style={{ width: 200, height: 100, backgroundColor: "black" }}>
					<Text style={{ color: "white" }}>passe ton tour</Text>
				</View>
			</Pressable>
			<Pressable onPress={()=>attaque(tank)}>
				<View style={{ width: 200, height: 100, backgroundColor: "black" }}>
					<Text style={{ color: "white" }}>ATTACK !!!</Text>
				</View>
			</Pressable>
			<Pressable onPress={()=>magie(tank)}>
				<View style={{ width: 200, height: 100, backgroundColor: "black" }}>
					<Text style={{ color: "white" }}>ATTACK !!!</Text>
				</View>
			</Pressable>
				<View style={{ width: 200, height: 100, backgroundColor: "grey" }}>
					<Text style={{ color: "white" }}>{boss.nom}</Text>
					<Text style={{ color: "white" }}>{pvBoss}</Text>
				</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
