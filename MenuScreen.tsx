import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, Dish } from "../types";
import { dishes } from "../data/dishes";
import TabBar from "../components/TabBar";
import FilterBar from "../components/FilterBar";
import DishCard from "../components/DishCard";
import SearchBar from "../components/SearchBar";
import SelectionSummary from "../components/SelectionSummary";

type Props = NativeStackScreenProps<RootStackParamList, "Menu">;

const categories = ["Starter", "Main Course", "Dessert", "Sides"];

const MenuScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("Starter");
  const [veg, setVeg] = useState(true);
  const [nonVeg, setNonVeg] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [dishList, setDishList] = useState(dishes);

  const toggleVeg = () => setVeg(!veg);
  const toggleNonVeg = () => setNonVeg(!nonVeg);

  const updateQuantity = (dishId: number, increment: boolean) => {
    setDishList((prev) =>
      prev.map((d) =>
        d.id === dishId ? { ...d, quantity: increment ? d.quantity + 1 : Math.max(d.quantity - 1, 0) } : d
      )
    );
  };

  const filteredDishes = dishList.filter(
    (d) =>
      d.category === selectedCategory &&
      ((veg && d.type === "veg") || (nonVeg && d.type === "non-veg")) &&
      d.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalSelected = dishList.reduce((acc, d) => acc + d.quantity, 0);

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <SearchBar value={searchText} onChangeText={setSearchText} />
      <TabBar categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <FilterBar veg={veg} nonVeg={nonVeg} onToggleVeg={toggleVeg} onToggleNonVeg={toggleNonVeg} />
      <FlatList
        data={filteredDishes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DishCard
            dish={item}
            onAdd={() => updateQuantity(item.id, true)}
            onRemove={() => updateQuantity(item.id, false)}
            onViewIngredients={() => navigation.navigate("Ingredient", { dish: item })}
          />
        )}
      />
      <SelectionSummary totalSelected={totalSelected} />
    </View>
  );
};

export default MenuScreen;
