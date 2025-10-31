import { useEffect, useState } from "react";
import { Text, View } from "react-native";


export default function Index() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log("App mounted");
  }, []);

  async function fetchPokemonData() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=20");
      const data = await response.json();
      console.log(data);  
    } catch (error) {
      
    }
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Pokedex</Text>
    </View>
  );
}
