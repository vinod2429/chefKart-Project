import { Dish } from "../types";

export const dishes: Dish[] = [
  // Veg Dishes
  { id: 1, name: "Paneer Butter Masala", description:"Rich paneer dish", image:"https://i.imgur.com/paneer.jpg", ingredients:["Paneer","Butter","Tomato","Cream","Spices"], price:200, quantity:0, type:"veg", category:"Main Course" },
  { id: 2, name: "Veg Biryani", description:"Spicy rice with veggies", image:"https://i.imgur.com/vegbiryani.jpg", ingredients:["Rice","Vegetables","Spices","Yogurt"], price:180, quantity:0, type:"veg", category:"Main Course" },
  { id: 3, name: "Veg Spring Roll", description:"Crispy rolls", image:"https://i.imgur.com/springroll.jpg", ingredients:["Cabbage","Carrot","Wrapper","Spices"], price:120, quantity:0, type:"veg", category:"Starter" },
  { id: 4, name: "Dal Tadka", description:"Yellow lentils with spices", image:"https://i.imgur.com/daltadka.jpg", ingredients:["Dal","Ghee","Garlic","Spices"], price:150, quantity:0, type:"veg", category:"Main Course" },
  { id: 5, name: "Aloo Gobi", description:"Potato and cauliflower curry", image:"https://i.imgur.com/aloogobi.jpg", ingredients:["Potato","Cauliflower","Spices","Tomato"], price:160, quantity:0, type:"veg", category:"Main Course" },
  { id: 6, name: "Veg Manchurian", description:"Indo-Chinese dish", image:"https://i.imgur.com/manchurian.jpg", ingredients:["Vegetables","Cornflour","Soy Sauce","Spices"], price:190, quantity:0, type:"veg", category:"Main Course" },
  { id: 7, name: "Gulab Jamun", description:"Sweet dessert", image:"https://i.imgur.com/gulabjamun.jpg", ingredients:["Milk Solids","Sugar","Rose Water"], price:100, quantity:0, type:"veg", category:"Dessert" },
  { id: 8, name: "Fruit Salad", description:"Fresh fruits mix", image:"https://i.imgur.com/fruitsalad.jpg", ingredients:["Apple","Banana","Orange","Grapes"], price:90, quantity:0, type:"veg", category:"Dessert" },
  { id: 9, name: "Paneer Tikka", description:"Grilled paneer cubes", image:"https://i.imgur.com/paneertikka.jpg", ingredients:["Paneer","Yogurt","Spices"], price:220, quantity:0, type:"veg", category:"Starter" },
  { id: 10, name: "French Fries", description:"Crispy potato fries", image:"https://i.imgur.com/fries.jpg", ingredients:["Potato","Salt","Oil"], price:110, quantity:0, type:"veg", category:"Sides" },

  // Non-Veg Dishes
  { id: 101, name: "Chicken Curry", description:"Spicy chicken curry", image:"https://i.imgur.com/chickencurry.jpg", ingredients:["Chicken","Onion","Tomato","Spices"], price:250, quantity:0, type:"non-veg", category:"Main Course" },
  { id: 102, name: "Mutton Biryani", description:"Mutton with aromatic rice", image:"https://i.imgur.com/muttonbiryani.jpg", ingredients:["Mutton","Rice","Spices","Yogurt","Onion"], price:300, quantity:0, type:"non-veg", category:"Main Course" },
  { id: 103, name: "Chicken Tikka", description:"Grilled chicken cubes", image:"https://i.imgur.com/chickentikka.jpg", ingredients:["Chicken","Yogurt","Spices"], price:260, quantity:0, type:"non-veg", category:"Starter" },
  { id: 104, name: "Fish Fry", description:"Crispy fried fish", image:"https://i.imgur.com/fishfry.jpg", ingredients:["Fish","Spices","Oil"], price:280, quantity:0, type:"non-veg", category:"Starter" },
  { id: 105, name: "Egg Curry", description:"Curried eggs", image:"https://i.imgur.com/egg.jpg", ingredients:["Eggs","Onion","Tomato","Spices"], price:200, quantity:0, type:"non-veg", category:"Main Course" },
  { id: 106, name: "Prawn Masala", description:"Spicy prawns", image:"https://i.imgur.com/prawn.jpg", ingredients:["Prawn","Onion","Tomato","Spices"], price:320, quantity:0, type:"non-veg", category:"Main Course" },
  { id: 107, name: "Chicken Nuggets", description:"Crispy bite-sized nuggets", image:"https://i.imgur.com/nuggets.jpg", ingredients:["Chicken","Breadcrumbs","Spices"], price:210, quantity:0, type:"non-veg", category:"Sides" },
  { id: 108, name: "Mutton Kebab", description:"Grilled mutton kebabs", image:"https://i.imgur.com/kebab.jpg", ingredients:["Mutton","Spices","Yogurt"], price:290, quantity:0, type:"non-veg", category:"Starter" },
  { id: 109, name: "Fish Curry", description:"Coconut-based fish curry", image:"https://i.imgur.com/fishcurry.jpg", ingredients:["Fish","Coconut","Spices"], price:310, quantity:0, type:"non-veg", category:"Main Course" },
  { id: 110, name: "Chicken Salad", description:"Healthy chicken salad", image:"https://i.imgur.com/chickensalad.jpg", ingredients:["Chicken","Lettuce","Tomato","Olive Oil"], price:230, quantity:0, type:"non-veg", category:"Sides" },
];
