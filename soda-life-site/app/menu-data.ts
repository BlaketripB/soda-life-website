/**
 * Soda Life full menu, transcribed from Google Maps.
 *
 * To edit a drink: find its section below and tweak in place.
 * To add a drink: append a new object to the right `drinks` array.
 * To rotate specials: see components/Specials.tsx (this file is menu-only).
 *
 * `base` is the specific sub-base printed on Google Maps (e.g. "Witches
 * Brew Alani", "Coconut Redbull") when it differs from the section label.
 * `note` captures edition tags ("Presley Edition", "Lightning Edition").
 * `price` is only set where Google Maps shows one (currently Kids Menu).
 */

export type Drink = {
  name: string;
  base?: string;
  flavors: string;
  price?: string;
  note?: string;
};

export type MenuSection = {
  id: string;
  label: string;
  tagline: string;
  /**
   * Tailwind gradient classes for the card image panel.
   * Strictly green/blue/pink/amber/cream only — never red.
   */
  gradient: string;
  /** Accent color for the section chip. */
  accent: "pink" | "blue" | "green" | "amber";
  drinks: Drink[];
};

export const MENU: MenuSection[] = [
  {
    id: "dr-pepper",
    label: "Dr Pepper",
    tagline: "The OG crowd favorite.",
    gradient: "from-sodaPink to-sodaBlue",
    accent: "pink",
    drinks: [
      { name: "Blind Date", flavors: "Raspberry puree, coconut cream" },
      { name: "Hey Hottie", flavors: "Vanilla, mango", note: "Hey Scotty Edition: Dr Pepper cream soda" },
      { name: "Big Love", flavors: "Grenadine, fresh lime, maraschino cherries" },
      { name: "Call Me", flavors: "Vanilla, coconut cream" },
      { name: "Pineapple Love", flavors: "Pineapple, coconut cream" },
      { name: "Oh Lover", flavors: "Peach, vanilla, coconut cream" },
      { name: "Hug N Kiss", flavors: "Coconut, cherry, cream" },
      { name: "Be Mine", flavors: "Coconut, blackberry, cream" },
      { name: "Date Night", flavors: "Tigers blood, vanilla" },
      { name: "Sweet Thang", flavors: "Pomegranate, coconut cream" },
      { name: "Pickup Line", flavors: "Peach, coconut" },
      { name: "Love Bird", flavors: "Vanilla, strawberry, coconut cream" },
      { name: "Soul Tickler", flavors: "Coconut, raspberry, cream", note: "Presley Edition: raspberry puree" },
      { name: "Sweet Kiss", flavors: "Coconut, fresh lime" },
    ],
  },
  {
    id: "coca-cola",
    label: "Coca Cola",
    tagline: "Classic with a twist.",
    gradient: "from-sodaBlue to-sodaPink",
    accent: "blue",
    drinks: [
      { name: "Mama Bear", flavors: "Pineapple, coconut cream" },
      { name: "Madre", base: "Dr Pepper", flavors: "Coconut, cherry, coconut cream" },
      { name: "Trophy Wife", flavors: "Vanilla, cream" },
      { name: "Mom Talk", flavors: "Vanilla, fresh lime" },
      { name: "Soda Queen", flavors: "Pineapple, peach puree, fresh lime, coconut cream" },
      { name: "Honeymoon", flavors: "Cranberry, fresh lime" },
      { name: "Money Spender", flavors: "Raspberry, lime" },
      { name: "Carpool Van", flavors: "Vanilla, coconut, raspberry" },
      { name: "Guilty Pleasure", flavors: "Cupcake, strawberry puree, vanilla cream" },
      { name: "Jo Mama", flavors: "Raspberry puree, coconut cream" },
      { name: "Always Right", flavors: "Coconut cream, fresh lime" },
      { name: "Suga Mama", flavors: "Cinnamon, cream" },
    ],
  },
  {
    id: "pepsi",
    label: "Pepsi",
    tagline: "Smooth, cheeky, classic.",
    gradient: "from-sodaBlue to-cyan-400",
    accent: "blue",
    drinks: [
      { name: "Honey-Do", flavors: "Blue curaçao, coconut" },
      { name: "Zaddy", flavors: "Raspberry puree, vanilla" },
      { name: "Soda King", flavors: "Vanilla, peach, vanilla cream" },
      { name: "Weird Uncle", flavors: "Cherry, coconut" },
      { name: "Yard Work", flavors: "Strawberry, coconut" },
      { name: "Life Style", flavors: "Vanilla, coconut cream" },
      { name: "Day Off", flavors: "Pineapple, coconut cream" },
      { name: "Money Maker", flavors: "Vanilla, cherry" },
      { name: "Pop Pop", flavors: "Cinnamon, cream" },
      { name: "Jo Daddy", flavors: "Fresh lime, coconut cream" },
      { name: "Big Daddy", flavors: "Vanilla, raspberry puree, coconut cream" },
      { name: "Pearferct Man", flavors: "Pear, cream" },
    ],
  },
  {
    id: "mtn-dew",
    label: "MTN Dew",
    tagline: "Bright, bold, and electric.",
    gradient: "from-sodaGreen to-lime-300",
    accent: "green",
    drinks: [
      { name: "Beachy Oasis", flavors: "Coconut, blue curaçao", note: "Bentley Edition: add coconut cream" },
      { name: "Palm Tree", flavors: "Coconut, lime, coconut cream" },
      { name: "Staycation", flavors: "Mango puree, strawberry puree" },
      { name: "5 O'Clock Somewhere", flavors: "Green apple, pineapple", note: "Mail Man Edition: Voltage" },
      { name: "Yard Work", flavors: "Strawberry, coconut" },
      { name: "Castaway", flavors: "Cream, raspberry, coconut" },
      { name: "The Coast", flavors: "Mango, watermelon, coconut cream" },
      { name: "Life's A Beach", flavors: "Pomegranate, fresh lime", note: "NOS Energy Edition" },
      { name: "Suns Out", flavors: "Grape, fresh lime" },
      { name: "Key Lime Dream", flavors: "Cheesecake, vanilla cream" },
      { name: "The Kiwi", flavors: "Kiwi, strawberry" },
      { name: "Sea Turtle", flavors: "Kiwi, green apple, coconut cream", note: "P-Town Pride: add White Monster" },
      { name: "Surf Shack", flavors: "Strawberry, guava, coconut cream", note: "Lightning Edition: Voltage" },
      { name: "Red Sea", base: "Code Red", flavors: "Piña colada puree, vanilla cream" },
      { name: "Breakup", base: "Code Red", flavors: "Coconut, fresh lime, cream" },
      { name: "Blue Cloud", flavors: "Vanilla, cotton candy, coconut cream", note: "Grey Sky Edition: add Voltage" },
      { name: "Banana Breeze", flavors: "Banana, strawberry, vanilla" },
      { name: "Nifty Bark", flavors: "Guava, grapefruit" },
    ],
  },
  {
    id: "sunkist-canada-dry-apple-beer",
    label: "Sunkist / Canada Dry / Apple Beer",
    tagline: "Fizzy, crisp, different.",
    gradient: "from-amber-300 to-sodaGreen",
    accent: "amber",
    drinks: [
      { name: "Candy Apple", base: "Apple Beer", flavors: "Green apple, French vanilla, cream" },
      { name: "Carmel Apple", base: "Apple Beer", flavors: "Caramel, cream" },
      { name: "Why Not", base: "Sunkist", flavors: "Coconut, raspberry, vanilla cream" },
      { name: "Party Hardy", base: "Canada Dry", flavors: "Fresh lime, raspberry puree" },
      { name: "Som Ginger", base: "Canada Dry", flavors: "Cinnamon, French vanilla, cream" },
      { name: "Morning After", base: "Canada Dry", flavors: "Coconut, pineapple" },
    ],
  },
  {
    id: "sprite-7up-jarritos",
    label: "Sprite / 7up / Jarritos",
    tagline: "Clear, clean, party-ready.",
    gradient: "from-sodaGreen to-sodaBlue",
    accent: "green",
    drinks: [
      { name: "Rike-N-Ike", flavors: "Cherry, strawberry, fresh lemon" },
      { name: "Friday Night", flavors: "Cherry, red raspberry, cream" },
      { name: "Spring Break", flavors: "Lemonade, pineapple, strawberry, coconut cream" },
      { name: "Slumber Party", flavors: "Pomegranate, strawberry" },
      { name: "Secret Party", flavors: "Vanilla, blue curaçao, coconut cream" },
      { name: "Bouncer Blast", flavors: "Strawberry, watermelon" },
      { name: "Mardigra", flavors: "Tigers blood, coconut cream" },
      { name: "T.G.I.F.", flavors: "Blue raspberry, red raspberry" },
      { name: "Party Animal", flavors: "Cherry, fresh lime, maraschino cherry" },
      { name: "All Nighter", flavors: "Cranberry, fresh lime" },
      { name: "In Da Club", flavors: "Piña colada, coconut" },
      { name: "Bring The Boom", base: "Sprite", flavors: "Powerade, Mtn Dew" },
      { name: "67", base: "Sprite", flavors: "Blue raspberry, pineapple, coconut cream" },
      { name: "Mango Madness", base: "Mango Jarrito", flavors: "Squirt, strawberry, raspberry" },
    ],
  },
  {
    id: "root-beer-red-cream-soda",
    label: "Root Beer / Red Cream Soda",
    tagline: "Nostalgia in a cup.",
    gradient: "from-amber-300 to-sodaPink",
    accent: "amber",
    drinks: [
      { name: "Mallow Meltdown", base: "Root Beer", flavors: "Toasted marshmallow, cream" },
      { name: "Root Fashion", base: "Root Beer", flavors: "Vanilla and cream" },
      { name: "Standoff", base: "Root Beer", flavors: "Vanilla, caramel" },
      { name: "Butter My Beer", base: "Root Beer", flavors: "Butterscotch, vanilla cream" },
      { name: "Tickle Me Pink", base: "Barq's Cream", flavors: "Mtn Dew, cotton candy, cream" },
      { name: "Sugar Rush", base: "Red Cream Soda", flavors: "Vanilla, cotton candy" },
      { name: "Red Rush", base: "Barq's Cream Soda", flavors: "Coconut and cream" },
    ],
  },
  {
    id: "lemonade",
    label: "Lemonade",
    tagline: "Squeezed, stirred, sunshine.",
    gradient: "from-amber-300 to-sodaGreen",
    accent: "amber",
    drinks: [
      { name: "What The Kell", base: "Lemonade", flavors: "Blue raspberry, coconut cream" },
      { name: "Mmm Baby", base: "Lemonade", flavors: "Grapefruit, coconut cream" },
      { name: "Ooh Nelly", base: "Lemonade", flavors: "Orange, guava, grapefruit" },
      { name: "Why So Wonderful", base: "Lemonade", flavors: "Peach, blue curaçao" },
      { name: "Too Tasty", base: "Lemonade", flavors: "Watermelon, fresh lemon, strawberry puree" },
      { name: "Bruh", base: "Lemonade", flavors: "Mojito mint, fresh lime, coconut cream" },
      { name: "The Rizz", base: "Lemonade", flavors: "Peach puree, raspberry puree" },
      { name: "It'll Buff", base: "Pink Lemonade", flavors: "Passion fruit, guava, coconut cream" },
      { name: "Let's Go!", base: "Pink Lemonade", flavors: "Vanilla, grapefruit, coconut cream" },
    ],
  },
  {
    id: "fresca-squirt-powerade",
    label: "Fresca / Squirt / Powerade",
    tagline: "Crisp, citrusy, athletic.",
    gradient: "from-sodaBlue to-sodaGreen",
    accent: "blue",
    drinks: [
      { name: "A Cold Sunday", base: "Fresca", flavors: "Peach, blue curaçao, cranberry, fresh lime" },
      { name: "Sunny Monday", base: "Squirt / Fresca", flavors: "Huckleberry, strawberry, blackberry" },
      { name: "Thirsty Thursday", base: "Fresca", flavors: "Pomegranate, grapefruit, fresh lime" },
      { name: "Weekend At Brian's", base: "Fresca", flavors: "Guava, peach puree, coconut cream, fresh lime" },
      { name: "Berry Good", base: "Powerade", flavors: "Blue raspberry, red raspberry" },
      { name: "Good Grief", base: "Powerade", flavors: "Coconut, coconut cream" },
      { name: "Holey Moley", base: "Powerade", flavors: "Coconut, coconut cream" },
      { name: "Yowboy Cowboy", base: "Powerade", flavors: "Raspberry puree, coconut cream" },
    ],
  },
  {
    id: "energy-drinks",
    label: "Energy Drinks",
    tagline: "Built for big days.",
    gradient: "from-sodaPink to-sodaBlue",
    accent: "pink",
    drinks: [
      { name: "Big P", base: "Watermelon Red Bull", flavors: "Vanilla, blue raspberry, Sprite, coconut cream" },
      { name: "Tropic Thunder", base: "Tropical Red Bull", flavors: "Vanilla, piña colada puree, Sprite" },
      { name: "The B.S.", base: "Red Bull", flavors: "Pineapple, coconut, blue curaçao, coconut cream, Sprite & Mtn Dew", note: "NOS Edition!" },
      { name: "Buckaroo", base: "Coconut Red Bull", flavors: "Blackberry, vanilla, coconut cream" },
      { name: "Nifty Bark", base: "Coconut Red Bull", flavors: "Pineapple, coconut, blue curaçao, coconut cream, Fresca, fresh lime" },
      { name: "The Scooter", base: "White Monster", flavors: "Coconut, pineapple, strawberry" },
      { name: "Paradise", base: "Strawberry Monster", flavors: "Guava, passion fruit puree, coconut cream, Mtn Dew" },
      { name: "The Dream", base: "Monster", flavors: "Coconut, vanilla cream, Mtn Dew or Sprite" },
      { name: "Winter Night", base: "White Monster", flavors: "Peach, pomegranate, pineapple, Mtn Dew" },
      { name: "Sommers Night", base: "Ultra Blue Monster", flavors: "Pineapple, green apple, cream, Mtn Dew" },
      { name: "Shanny Bananny", base: "Original Red Bull", flavors: "Strawberry, banana, vanilla, Mtn Dew or Sprite" },
      { name: "Shaka", base: "Pipeline Punch Monster", flavors: "Pineapple, Mtn Dew, coconut cream" },
    ],
  },
  {
    id: "alani",
    label: "Alani Mixed Drinks",
    tagline: "Pretty, poppy, pro level.",
    gradient: "from-sodaPink to-pink-300",
    accent: "pink",
    drinks: [
      { name: "Patch Of Heaven", base: "Sherbet Alani", flavors: "Pomegranate, raspberry puree, Squirt, coconut cream" },
      { name: "Franken Fiz", base: "Witches Brew Alani", flavors: "Green apple, caramel, cream" },
      { name: "Heck Ya", base: "Strawberry Lemonade", flavors: "Peach puree, cranberry" },
      { name: "Crash Out", base: "Strawberry Lemonade", flavors: "Cranberry, strawberry puree" },
      { name: "Gosh Dang It", base: "Pink Lemonade", flavors: "Passion fruit, cranberry, coconut cream" },
      { name: "Blossom Bliss", base: "Cherry Twist Alani", flavors: "Vanilla, coconut, raspberry puree, coconut cream, Sprite" },
      { name: "Sherbert Storm", base: "Blue Slush Alani", flavors: "Coconut, blue raspberry, half & half creamer, Mtn Dew Voltage" },
      { name: "Crazy Blues", base: "Blue Slush Alani", flavors: "Mango, pineapple, coconut, Sprite" },
      { name: "Bayside", base: "Sherbet Swirl Alani", flavors: "Vanilla, blue raspberry, Mtn Dew, coconut cream" },
      { name: "Cloud 9", base: "Alani", flavors: "Cotton candy, blue raspberry, cotton candy, coconut cream, Sprite" },
      { name: "Witches Bubbly", base: "Witches Brew Alani", flavors: "Pineapple, green apple, Squirt, coconut cream" },
      { name: "Blue Lightning", base: "Blue Slush Alani", flavors: "Vanilla, dragon fruit, Voltage, coconut cream" },
      { name: "Hawi Kiki", base: "Blue Slush Alani", flavors: "Vanilla, blue curaçao, coconut cream, Mtn Dew" },
    ],
  },
  {
    id: "jolly-rancher",
    label: "Jolly Rancher Slushies",
    tagline: "Pure candy, slushed.",
    gradient: "from-sodaPink to-sodaBlue",
    accent: "pink",
    drinks: [
      { name: "Cherry / Blue Raspberry", flavors: "Two-flavor slush" },
      { name: "Green Apple / Watermelon", flavors: "Two-flavor slush" },
      { name: "Or Mix", flavors: "Swirl any two Jolly Rancher flavors" },
    ],
  },
  {
    id: "refreshers",
    label: "Refreshers / Flavored Water",
    tagline: "Light, fruity, no soda.",
    gradient: "from-sodaGreen to-cyan-300",
    accent: "green",
    drinks: [
      { name: "Savor The Flavor", flavors: "Fresh strawberry, strawberry puree, coconut, vanilla, coconut cream" },
      { name: "Fruitylicious", flavors: "Strawberry puree, mango puree, coconut, fresh lime, fresh strawberry" },
      { name: "Sandy Sunrise", flavors: "Guava, passion fruit, strawberry, coconut, strawberry puree, fresh lemon" },
      { name: "Flower Field", flavors: "Lavender, pear, strawberry puree, fresh lime, fresh lemon" },
      { name: "Island Dream", flavors: "Pomegranate, raspberry puree, fresh lime, coconut cream" },
      { name: "Blue Sky", flavors: "Blue curaçao, coconut, vanilla, fresh lemon" },
      { name: "Mango Tree", flavors: "Coconut, vanilla, mango puree, coconut cream" },
      { name: "Pink Passion", flavors: "Pineapple, passion fruit, strawberry puree, coconut cream" },
      { name: "Sparkling Penny", flavors: "Black cherry, vanilla, coconut, coconut cream" },
      { name: "Just Delicious", flavors: "Strawberry puree, peach, mango" },
      { name: "Lemon Berry", base: "Shot of Lemonade", flavors: "Blue raspberry, peach, fresh lime" },
      { name: "Southern Sunrise", flavors: "Strawberry, pineapple, peach" },
    ],
  },
  {
    id: "kids",
    label: "Kids Menu",
    tagline: "Little sips, big smiles.",
    gradient: "from-sodaPink to-sodaGreen",
    accent: "pink",
    drinks: [
      { name: "Blue Ocean", base: "Sprite", flavors: "Blue razz, sea life gummies", price: "$3.19" },
      { name: "Fluffy Cloud", base: "Sprite", flavors: "Cotton candy", price: "$3.19" },
      { name: "Bubble Up", base: "Sprite", flavors: "Cherry lime, gumballs", price: "$3.19" },
      { name: "Peachy Twist", base: "Sprite", flavors: "Blue curaçao, peach and peach rings", price: "$3.19" },
      { name: "Coconut Island", base: "Sprite", flavors: "Coconut, pineapple", price: "$3.19" },
      { name: "Shark Lagoon", base: "Fruit Punch Gatorade", flavors: "Sprite, coconut cream, shark gummies", price: "$3.19" },
      { name: "Sweet Life", base: "Sprite", flavors: "Coconut, pineapple, strawberry, whip cream, sprinkles", price: "$3.19" },
    ],
  },
];

export type FoodItem = { name: string; note?: string };

export const FOOD: FoodItem[] = [
  { name: "Crispitos", note: "Pick 2" },
  { name: "Pizza Sticks", note: "Pick 2" },
  { name: "Cheese Munchers" },
  { name: "Jalapeño Munchers" },
  { name: "Pretzel Bites" },
  { name: "Churro Fries" },
  { name: "Funnel Fries" },
  { name: "Mac-N-Cheese Bites" },
  { name: "Chicken Tenders", note: "Pick 2" },
  { name: "Dipping Sauce" },
];
