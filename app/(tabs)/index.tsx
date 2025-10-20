import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return(
    <View style={styles.container}>
      <Text style={styles.content}>Edit app/index.tsx to edit this screen!</Text>
      <Link href={"/about"}> Visit about screen </Link>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    content: {
      fontSize: 22,
    },
})