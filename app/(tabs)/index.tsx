import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import  useTheme  from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Index() {
  const {toggleDarkMode} = useTheme();

  const todos = useQuery(api.todos.getTodos)
  console.log(todos);

  const addTodo = useMutation(api.todos.addTodo)

  return(
    <View style={styles.container}>
      <Text style={styles.content}>Edit app/index.tsx to edit this screen!</Text>
      <TouchableOpacity onPress={ () => addTodo({text:"walk the dog"}) }><Text>Add a new TODO!</Text></TouchableOpacity>
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