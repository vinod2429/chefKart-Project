export interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  price: number;
  quantity: number;
  type: "veg" | "non-veg";
  category: "Starter" | "Main Course" | "Dessert" | "Sides";
}

export type RootStackParamList = {
  Menu: undefined;
  Ingredient: { dish: Dish };
};
