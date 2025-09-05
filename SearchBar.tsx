import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search dishes..."
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  input: { backgroundColor: "#f2f2f2", borderRadius: 8, padding: 8 },
});

export default SearchBar;
