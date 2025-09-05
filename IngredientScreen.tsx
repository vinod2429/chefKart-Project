import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Ingredient">;

const IngredientScreen: React.FC<Props> = ({ route }) => {
  const { dish } = route.params;

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text style={styles.desc}>{dish.description}</Text>
      <FlatList
        data={dish.ingredients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.ingredient}>• {item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  name: { fontSize: 20, fontWeight: "700", marginBottom: 4 },
  desc: { color: "#555", marginBottom: 10 },
  ingredient: { fontSize: 16, marginVertical: 2 },
});

export default IngredientScreen;
