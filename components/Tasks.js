import react from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.round}></View>
    </View>
  );
};


const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    marginHorizontal: 10,
    top:15
    
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 30,
    height: 30,
    backgroundColor: "#55BCF6",
    opacity: 0.7,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
    fontSize:18,
    fontWeight:"400"
  },
  round: {
    width: 20,
    height: 20,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 50,
  },
});
 
export default Task;