// Import images for each dish
import jollof from "../assets/jollof-rice.jpg"
import friedRice from "../assets/friedrice.jpg"
import pepperSoup from "../assets/peppersoup.jpg"
import dodo from "../assets/plantain.jpg"

import egusi from "../assets/egusi.png"
import oha from "../assets/oha.jpg"
import ukodo from "../assets/jollof-rice.jpg"
import abacha from "../assets/abacha.jpg"

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")      // spaces → dashes
    .replace(/[()]/g, "")      // remove brackets
    .replace(/[^a-z0-9-]/g, ""); // remove special chars
}

export const nigerianMenu = [
  { id: 1, name: "Jollof Rice", description: "Spicy tomato rice with rich Nigerian flavor", price: 80.20, image: jollof },
  { id: 2, name: "Fried Rice", description: "Colorful rice with vegetables and meat", price: 68.43, image: friedRice },
  { id: 3, name: "Pepper Soup", description: "Hot and spicy Nigerian soup with fish or chicken", price: 60.10, image: pepperSoup },
  { id: 4, name: "Fried Plantain (Dodo)", description: "Golden fried sweet plantains", price: 48.02, image: dodo },
  { id: 5, name: "Egusi Soup", description: "Melon seed soup with spinach and tender meat", price: 85.04, image: egusi },
  { id: 6, name: "Oha Soup", description: "Traditional Igbo soup with Oha leaves and assorted meat", price: 78.22, image: oha },
  { id: 7, name: "Special Request", description: "Yam and meat pepper soup, hearty and flavorful", price: 62.11, image: ukodo },
  { id: 8, name: "Abacha (African Salad)", description: "Shredded cassava salad with spices and fish", price: 40.66, image: abacha },
].map(item => ({
  ...item,
  slug: slugify(item.name)
}));

