import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import  useTheme  from "@/hooks/useTheme";

export default function Index() {
  const {toggleDarkMode} = useTheme();
  return(
    <View style={styles.container}>
      <Text style={styles.content}>Edit app/index.tsx to edit this screen!</Text>
      <TouchableOpacity onPress={ toggleDarkMode }><Text>toggle the mode!</Text></TouchableOpacity>
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