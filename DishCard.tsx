import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Dish } from "../types";

interface DishCardProps {
  dish: Dish;
  onAdd: () => void;
  onRemove: () => void;
  onViewIngredients: () => void;
}

const DishCard: React.FC<DishCardProps> = ({ dish, onAdd, onRemove, onViewIngredients }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: dish.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.desc}>{dish.description}</Text>
        <Text>₹{dish.price}</Text>
        <View style={styles.buttons}>
          {dish.quantity === 0 ? (
            <TouchableOpacity style={styles.addBtn} onPress={onAdd}><Text>Add</Text></TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity style={styles.removeBtn} onPress={onRemove}><Text>-</Text></TouchableOpacity>
              <Text style={styles.qty}>{dish.quantity}</Text>
              <TouchableOpacity style={styles.addBtn} onPress={onAdd}><Text>+</Text></TouchableOpacity>
            </>
          )}
          <TouchableOpacity style={styles.ingBtn} onPress={onViewIngredients}><Text>Ingredients</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { flexDirection: "row", backgroundColor: "#fff", marginVertical: 6, borderRadius: 8, padding: 8, elevation: 2 },
  image: { width: 80, height: 80, borderRadius: 8 },
  info: { flex: 1, marginLeft: 10 },
  name: { fontWeight: "700", fontSize: 16 },
  desc: { color: "#555" },
  buttons: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  addBtn: { backgroundColor: "#2196F3", padding: 4, borderRadius: 4, marginRight: 4 },
  removeBtn: { backgroundColor: "#f44336", padding: 4, borderRadius: 4 },
  qty: { marginHorizontal: 4 },
  ingBtn: { backgroundColor: "#4CAF50", padding: 4, borderRadius: 4, marginLeft: "auto" },
});

export default DishCard;
