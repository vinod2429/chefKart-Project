import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  totalSelected: number;
}

const SelectionSummary: React.FC<Props> = ({ totalSelected }) => {
  return (
    <View style={styles.container}>
      <Text>Total Selected: {totalSelected}</Text>
      <TouchableOpacity style={styles.button}><Text style={{color:"#fff"}}>Continue</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between", padding: 10, backgroundColor: "#eee", borderRadius: 8, marginVertical: 10 },
  button: { backgroundColor: "#2196F3", padding: 8, borderRadius: 6 },
});

export default SelectionSummary;
