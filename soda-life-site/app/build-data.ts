/**
 * Build Your Own Drink — cup sizes, tiers, and add-on flavors.
 * Prices match in-store shop menu.
 */

export type CupSize = {
  oz: number;
  base: string;
  mix: string;
  energy: string;
};

export type BuildAddon = {
  name: string;
};

export type BuildCategory = {
  id: string;
  label: string;
  price: string;
  priceLabel: string;
  accent: "pink" | "blue" | "green" | "amber";
  items: BuildAddon[];
};

export const CUP_SIZES: CupSize[] = [
  { oz: 16, base: "$1.09", mix: "$2.09", energy: "$3.09" },
  { oz: 24, base: "$1.39", mix: "$2.39", energy: "$3.39" },
  { oz: 32, base: "$1.59", mix: "$2.59", energy: "$3.59" },
  { oz: 44, base: "$1.79", mix: "$2.79", energy: "$3.79" },
];

export const BUILD_CATEGORIES: BuildCategory[] = [
  {
    id: "syrups",
    label: "Syrups",
    price: "$0.50",
    priceLabel: "$0.50 each",
    accent: "blue",
    items: [
      "Vanilla",
      "Toasted Marshmallow",
      "Blueberry",
      "Grenadine",
      "Rose",
      "Cherry Lime",
      "Coconut",
      "Watermelon",
      "Mango",
      "Lemon",
      "Cinnamon",
      "Cranberry",
      "Strawberry",
      "Grape",
      "Blackberry",
      "Lavender",
      "Kiwi",
      "Mojito Mint",
      "Pineapple",
      "Cupcake",
      "Lime",
      "Pear",
      "Orange",
      "Blue Razz",
      "Red Razz",
      "Passion Fruit",
      "Huckleberry",
      "White Chocolate",
      "Irish Cream",
      "Cherry",
      "Blue Curaçao",
      "Grapefruit",
      "Butterscotch",
      "French Vanilla",
      "Cheesecake",
      "Pomegranate",
      "Peach",
      "Guava",
    ].map((name) => ({ name })),
  },
  {
    id: "fresh-fruit",
    label: "Fresh Fruit",
    price: "$0.35",
    priceLabel: "$0.35 each",
    accent: "green",
    items: [
      "Lime",
      "Lemon",
      "Cherry",
      "Pineapple",
      "Strawberry",
      "Orange",
      "Cucumbers",
      "Mango",
    ].map((name) => ({ name })),
  },
  {
    id: "purees-cream",
    label: "Purees & Cream",
    price: "$0.70",
    priceLabel: "$0.70 each",
    accent: "pink",
    items: [
      "Peach Puree",
      "Mango Puree",
      "Coconut Cream",
      "Vanilla Cream",
      "Half & Half",
    ].map((name) => ({ name })),
  },
];

export const BUILD_FOOTER_NOTE =
  "Mix any combination in-store — pick your base, size, and add-ons at the bar. Prices shown are per add-on; cup tier (Base, Mix, or Energy) sets your starting price.";
