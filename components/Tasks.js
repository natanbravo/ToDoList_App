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
    backgroundColor: "#0f70ff",
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
    backgroundColor: "#ffd93d",
    opacity: 1,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
    fontSize:20,
    fontWeight:"600",
    color:"#fff"
  },
  round: {
    width: 20,
    height: 20,
    borderColor: "#ffd93d",
    borderWidth: 4,
    borderRadius: 50,
  },
});
 
export default Task;