import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface TabBarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.tab,
            selectedCategory === category && styles.activeTab,
          ]}
          onPress={() => onSelectCategory(category)}
        >
          <Text
            style={[
              styles.tabText,
              selectedCategory === category && styles.activeTabText,
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: "#2196F3",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
  },
  activeTabText: {
    color: "#fff",
  },
});

export default TabBar;
