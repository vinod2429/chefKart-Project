import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface FilterBarProps {
  veg: boolean;
  nonVeg: boolean;
  onToggleVeg: () => void;
  onToggleNonVeg: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ veg, nonVeg, onToggleVeg, onToggleNonVeg }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.btn, veg && styles.active]} onPress={onToggleVeg}>
        <Text style={styles.text}>Veg</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, nonVeg && styles.active]} onPress={onToggleNonVeg}>
        <Text style={styles.text}>Non-Veg</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-around", marginVertical: 10 },
  btn: { padding: 8, borderRadius: 20, backgroundColor: "#ddd" },
  active: { backgroundColor: "#2196F3" },
  text: { fontWeight: "600", color: "#fff" },
});

export default FilterBar;
