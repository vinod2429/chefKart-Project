import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "./src/screens/MenuScreen";
import IngredientScreen from "./src/screens/IngredientScreen";
import { RootStackParamList } from "./src/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} options={{ title: "Menu" }} />
        <Stack.Screen name="Ingredient" component={IngredientScreen} options={{ title: "Ingredients" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
