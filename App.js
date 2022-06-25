import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Header from "./Components/header";
import TodoItem from "./Components/todoItem";
import AddToDo from "./Components/addToDo";
import SandBox from "./Components/sandBox";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

export default function App() {
  // const [text, settext] = useState();
  // const [age, setAge] = useState();
  const [todo, setTodo] = useState([
    { text: "Buy coffee", key: "1" },
    { text: "Create an app", key: "2" },
    { text: "Play the game", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodo((prevTodo) => {
        return [{ text: text, key: Math.random.toString() }, ...prevTodo];
      });
    }
    else{
      Alert.alert('OOPS!','todos must be over 3 Character long',[
        {text:'Understood',onPress:()=> console.log('alert clodes')}
      ])
    }
  };

  return (
<TouchableWithoutFeedback onPress={()=>{
  Keyboard.dismiss();
  console.log('dis')
}}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddToDo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todo}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    flex:1,
    // backgroundColor:'pink',
    padding: 40,
  },
  list: {
    flex:1,
    // backgroundColor: 'pink',
    marginTop: 20,
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  item: {
    marginTop: 24,
    padding: 20,
    backgroundColor: "pink",
    fontSize: 24,
  },
});
