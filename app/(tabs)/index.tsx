import { TouchableOpacity, StatusBar, Text,Alert, View, FlatList } from "react-native";
import  useTheme from "@/hooks/useTheme";
import { createHomeStyles } from "@/assets/styles/home.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react"; 
import LoadingSpinner from "@/components/LodingSpinner";
import { useQueries } from "convex/react";
import { Ionicons } from "@expo/vector-icons";
import { Id, Doc } from "@/convex/_generated/dataModel";

type Todo = Doc<"todos">

export default function Index() {
  const {toggleDarkMode, colors} = useTheme();

  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos);
  const toggleTodo = useMutation(api.todos.toggleTodo);

  const isLoading = todos === undefined

  if(isLoading) return <LoadingSpinner/>

  const handleToggleTodo = async (id:Id<"todos">) => {
    try {
      await toggleTodo({id})
    } catch (error) {
      console.log("Error toggling todo", error);
      Alert.alert("Error", "Failed to toggle todo.");
    }   
  }

  const renderTodoItem = ({item}: {item:Todo}) => {
    return (
      <View style={homeStyles.todoItemWrapper}>
        <LinearGradient colors={colors.gradients.surface}
        style={homeStyles.todoItem}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        >
          <TouchableOpacity 
            style={homeStyles.checkbox}
            activeOpacity={0.7}  
            onPress={() => handleToggleTodo(item._id)}
          >
            <LinearGradient
            colors={item.isCompleted ? colors.gradients.success : colors.gradients.muted }
            style={[homeStyles.checkboxInner,
              { borderColor: item.isCompleted ? "transparent" : colors.border},
            ]}
            >
              {item.isCompleted && <Ionicons name="checkmark" size={18} color="#fff" /> }
            </LinearGradient>

          </TouchableOpacity>
        </LinearGradient>
      </View>
    )
  }

  return(
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={homeStyles.safeArea}>
        <Header/>
        <TodoInput/>
        <FlatList 
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item._id} 
        style={homeStyles.todoList}
        contentContainerStyle={homeStyles.todoListContent}
        />
      </SafeAreaView>
    </LinearGradient>
    
  );
}
