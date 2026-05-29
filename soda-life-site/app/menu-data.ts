/**
 * Soda Life full menu, transcribed from Google Maps.
 *
 * To edit a drink: find its section below and tweak in place.
 * To add a drink: append a new object to the right `drinks` array.
 * `base` is the specific sub-base printed on Google Maps (e.g. "Witches
 * Brew Alani", "Coconut Redbull") when it differs from the section label.
 * `note` captures edition tags ("Presley Edition", "Lightning Edition").
 * `price` is only set where Google Maps shows one (currently Kids Menu).
 *
 * `gradient` pairs hex colors (from = first listed flavor tone, to = last/dominant).
 * Palette: no red — use deep pink #FF1F8F / coral #F0997B for berries, etc.
 */

export type Drink = {
  name: string;
  base?: string;
  flavors: string;
  price?: string;
  note?: string;
  /** Unique flavor-coded gradient (CSS hex). */
  gradient: { from: string; to: string };
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
      { name: "Blind Date", flavors: "Raspberry puree, coconut cream", gradient: { from: "#FF1F8F", to: "#F4E4C1" } },
      { name: "Hey Hottie", flavors: "Vanilla, mango", note: "Hey Scotty Edition: Dr Pepper cream soda", gradient: { from: "#F4E4C1", to: "#EF9F27" } },
      { name: "Big Love", flavors: "Grenadine, fresh lime, maraschino cherries", gradient: { from: "#F0997B", to: "#FF1F8F" } },
      { name: "Call Me", flavors: "Vanilla, coconut cream", gradient: { from: "#F4E4C1", to: "#F4C0D1" } },
      { name: "Pineapple Love", flavors: "Pineapple, coconut cream", gradient: { from: "#FAC775", to: "#F4E4C1" } },
      { name: "Oh Lover", flavors: "Peach, vanilla, coconut cream", gradient: { from: "#EF9F27", to: "#F4C0D1" } },
      { name: "Hug N Kiss", flavors: "Coconut, cherry, cream", gradient: { from: "#F4C0D1", to: "#FF1F8F" } },
      { name: "Be Mine", flavors: "Coconut, blackberry, cream", gradient: { from: "#F4E4C1", to: "#7F77DD" } },
      { name: "Date Night", flavors: "Tigers blood, vanilla", gradient: { from: "#F0997B", to: "#F4E4C1" } },
      { name: "Sweet Thang", flavors: "Pomegranate, coconut cream", gradient: { from: "#FF1F8F", to: "#F4C0D1" } },
      { name: "Pickup Line", flavors: "Peach, coconut", gradient: { from: "#FAC775", to: "#F4E4C1" } },
      { name: "Love Bird", flavors: "Vanilla, strawberry, coconut cream", gradient: { from: "#F4E4C1", to: "#F0997B" } },
      { name: "Soul Tickler", flavors: "Coconut, raspberry, cream", note: "Presley Edition: raspberry puree", gradient: { from: "#F4E4C1", to: "#FF1F8F" } },
      { name: "Sweet Kiss", flavors: "Coconut, fresh lime", gradient: { from: "#F4C0D1", to: "#6FCB1F" } },
    ],
  },
  {
    id: "coca-cola",
    label: "Coca Cola",
    tagline: "Classic with a twist.",
    gradient: "from-sodaPink to-sodaBlue",
    accent: "blue",
    drinks: [
      { name: "Mama Bear", flavors: "Pineapple, coconut cream", gradient: { from: "#EF9F27", to: "#F4E4C1" } },
      { name: "Madre", base: "Dr Pepper", flavors: "Coconut, cherry, coconut cream", gradient: { from: "#F4E4C1", to: "#F0997B" } },
      { name: "Trophy Wife", flavors: "Vanilla, cream", gradient: { from: "#F4E4C1", to: "#F4C0D1" } },
      { name: "Mom Talk", flavors: "Vanilla, fresh lime", gradient: { from: "#F4C0D1", to: "#B8E885" } },
      { name: "Soda Queen", flavors: "Pineapple, peach puree, fresh lime, coconut cream", gradient: { from: "#FAC775", to: "#F4E4C1" } },
      { name: "Honeymoon", flavors: "Cranberry, fresh lime", gradient: { from: "#FF1F8F", to: "#6FCB1F" } },
      { name: "Money Spender", flavors: "Raspberry, lime", gradient: { from: "#FF1F8F", to: "#B8E885" } },
      { name: "Carpool Van", flavors: "Vanilla, coconut, raspberry", gradient: { from: "#F4E4C1", to: "#FF1F8F" } },
      { name: "Guilty Pleasure", flavors: "Cupcake, strawberry puree, vanilla cream", gradient: { from: "#F4C0D1", to: "#F0997B" } },
      { name: "Jo Mama", flavors: "Raspberry puree, coconut cream", gradient: { from: "#FF1F8F", to: "#F4E4C1" } },
      { name: "Always Right", flavors: "Coconut cream, fresh lime", gradient: { from: "#F4E4C1", to: "#6FCB1F" } },
      { name: "Suga Mama", flavors: "Cinnamon, cream", gradient: { from: "#BA7517", to: "#F4E4C1" } },
    ],
  },
  {
    id: "pepsi",
    label: "Pepsi",
    tagline: "Smooth, cheeky, classic.",
    gradient: "from-sodaBlue to-cyan-400",
    accent: "blue",
    drinks: [
      { name: "Honey-Do", flavors: "Blue curaçao, coconut", gradient: { from: "#2DB8E0", to: "#F4E4C1" } },
      { name: "Zaddy", flavors: "Raspberry puree, vanilla", gradient: { from: "#FF1F8F", to: "#F4C0D1" } },
      { name: "Soda King", flavors: "Vanilla, peach, vanilla cream", gradient: { from: "#F4E4C1", to: "#FAC775" } },
      { name: "Weird Uncle", flavors: "Cherry, coconut", gradient: { from: "#F0997B", to: "#F4E4C1" } },
      { name: "Yard Work", flavors: "Strawberry, coconut", gradient: { from: "#F0997B", to: "#F4C0D1" } },
      { name: "Life Style", flavors: "Vanilla, coconut cream", gradient: { from: "#F4E4C1", to: "#F4C0D1" } },
      { name: "Day Off", flavors: "Pineapple, coconut cream", gradient: { from: "#FAC775", to: "#F4C0D1" } },
      { name: "Money Maker", flavors: "Vanilla, cherry", gradient: { from: "#F4C0D1", to: "#FF1F8F" } },
      { name: "Pop Pop", flavors: "Cinnamon, cream", gradient: { from: "#EF9F27", to: "#F4E4C1" } },
      { name: "Jo Daddy", flavors: "Fresh lime, coconut cream", gradient: { from: "#6FCB1F", to: "#F4E4C1" } },
      { name: "Big Daddy", flavors: "Vanilla, raspberry puree, coconut cream", gradient: { from: "#F4E4C1", to: "#FF1F8F" } },
      { name: "Pearferct Man", flavors: "Pear, cream", gradient: { from: "#B8E885", to: "#F4E4C1" } },
    ],
  },
  {
    id: "mtn-dew",
    label: "MTN Dew",
    tagline: "Bright, bold, and electric.",
    gradient: "from-sodaGreen to-lime-300",
    accent: "green",
    drinks: [
      { name: "Beachy Oasis", flavors: "Coconut, blue curaçao", note: "Bentley Edition: add coconut cream", gradient: { from: "#F4E4C1", to: "#6DD4F0" } },
      { name: "Palm Tree", flavors: "Coconut, lime, coconut cream", gradient: { from: "#F4C0D1", to: "#6FCB1F" } },
      { name: "Staycation", flavors: "Mango puree, strawberry puree", gradient: { from: "#EF9F27", to: "#F0997B" } },
      { name: "5 O'Clock Somewhere", flavors: "Green apple, pineapple", note: "Mail Man Edition: Voltage", gradient: { from: "#6FCB1F", to: "#FAC775" } },
      { name: "Yard Work", flavors: "Strawberry, coconut", gradient: { from: "#F0997B", to: "#F4E4C1" } },
      { name: "Castaway", flavors: "Cream, raspberry, coconut", gradient: { from: "#F4E4C1", to: "#FF1F8F" } },
      { name: "The Coast", flavors: "Mango, watermelon, coconut cream", gradient: { from: "#FAC775", to: "#F0997B" } },
      { name: "Life's A Beach", flavors: "Pomegranate, fresh lime", note: "NOS Energy Edition", gradient: { from: "#FF1F8F", to: "#B8E885" } },
      { name: "Suns Out", flavors: "Grape, fresh lime", gradient: { from: "#7F77DD", to: "#6FCB1F" } },
      { name: "Key Lime Dream", flavors: "Cheesecake, vanilla cream", gradient: { from: "#F4E4C1", to: "#B8E885" } },
      { name: "The Kiwi", flavors: "Kiwi, strawberry", gradient: { from: "#6FCB1F", to: "#F0997B" } },
      { name: "Sea Turtle", flavors: "Kiwi, green apple, coconut cream", note: "P-Town Pride: add White Monster", gradient: { from: "#B8E885", to: "#F4E4C1" } },
      { name: "Surf Shack", flavors: "Strawberry, guava, coconut cream", note: "Lightning Edition: Voltage", gradient: { from: "#F0997B", to: "#FAC775" } },
      { name: "Red Sea", base: "Code Red", flavors: "Piña colada puree, vanilla cream", gradient: { from: "#FAC775", to: "#F4C0D1" } },
      { name: "Breakup", base: "Code Red", flavors: "Coconut, fresh lime, cream", gradient: { from: "#F4E4C1", to: "#6FCB1F" } },
      { name: "Blue Cloud", flavors: "Vanilla, cotton candy, coconut cream", note: "Grey Sky Edition: add Voltage", gradient: { from: "#F4E4C1", to: "#6DD4F0" } },
      { name: "Banana Breeze", flavors: "Banana, strawberry, vanilla", gradient: { from: "#FAC775", to: "#F4C0D1" } },
      { name: "Nifty Bark", flavors: "Guava, grapefruit", gradient: { from: "#EF9F27", to: "#F4C0D1" } },
    ],
  },
  {
    id: "sunkist-canada-dry-apple-beer",
    label: "Sunkist / Canada Dry / Apple Beer",
    tagline: "Fizzy, crisp, different.",
    gradient: "from-amber-300 to-sodaGreen",
    accent: "amber",
    drinks: [
      { name: "Candy Apple", base: "Apple Beer", flavors: "Green apple, French vanilla, cream", gradient: { from: "#6FCB1F", to: "#F4E4C1" } },
      { name: "Carmel Apple", base: "Apple Beer", flavors: "Caramel, cream", gradient: { from: "#BA7517", to: "#F4C0D1" } },
      { name: "Why Not", base: "Sunkist", flavors: "Coconut, raspberry, vanilla cream", gradient: { from: "#F4E4C1", to: "#FF1F8F" } },
      { name: "Party Hardy", base: "Canada Dry", flavors: "Fresh lime, raspberry puree", gradient: { from: "#6FCB1F", to: "#FF1F8F" } },
      { name: "Som Ginger", base: "Canada Dry", flavors: "Cinnamon, French vanilla, cream", gradient: { from: "#BA7517", to: "#F4E4C1" } },
      { name: "Morning After", base: "Canada Dry", flavors: "Coconut, pineapple", gradient: { from: "#F4C0D1", to: "#EF9F27" } },
    ],
  },
  {
    id: "sprite-7up-jarritos",
    label: "Sprite / 7up / Jarritos",
    tagline: "Clear, clean, party-ready.",
    gradient: "from-sodaGreen to-sodaBlue",
    accent: "green",
    drinks: [
      { name: "Rike-N-Ike", flavors: "Cherry, strawberry, fresh lemon", gradient: { from: "#F0997B", to: "#B8E885" } },
      { name: "Friday Night", flavors: "Cherry, red raspberry, cream", gradient: { from: "#FF1F8F", to: "#F4E4C1" } },
      { name: "Spring Break", flavors: "Lemonade, pineapple, strawberry, coconut cream", gradient: { from: "#B8E885", to: "#F0997B" } },
      { name: "Slumber Party", flavors: "Pomegranate, strawberry", gradient: { from: "#FF1F8F", to: "#F0997B" } },
      { name: "Secret Party", flavors: "Vanilla, blue curaçao, coconut cream", gradient: { from: "#F4E4C1", to: "#2DB8E0" } },
      { name: "Bouncer Blast", flavors: "Strawberry, watermelon", gradient: { from: "#F0997B", to: "#FF1F8F" } },
      { name: "Mardigra", flavors: "Tigers blood, coconut cream", gradient: { from: "#F0997B", to: "#F4E4C1" } },
      { name: "T.G.I.F.", flavors: "Blue raspberry, red raspberry", gradient: { from: "#2DB8E0", to: "#FF1F8F" } },
      { name: "Party Animal", flavors: "Cherry, fresh lime, maraschino cherry", gradient: { from: "#F0997B", to: "#6FCB1F" } },
      { name: "All Nighter", flavors: "Cranberry, fresh lime", gradient: { from: "#FF1F8F", to: "#B8E885" } },
      { name: "In Da Club", flavors: "Piña colada, coconut", gradient: { from: "#FAC775", to: "#F4E4C1" } },
      { name: "Bring The Boom", base: "Sprite", flavors: "Powerade, Mtn Dew", gradient: { from: "#2DB8E0", to: "#6FCB1F" } },
      { name: "67", base: "Sprite", flavors: "Blue raspberry, pineapple, coconut cream", gradient: { from: "#6DD4F0", to: "#F4E4C1" } },
      { name: "Mango Madness", base: "Mango Jarrito", flavors: "Squirt, strawberry, raspberry", gradient: { from: "#EF9F27", to: "#FF1F8F" } },
    ],
  },
  {
    id: "root-beer-red-cream-soda",
    label: "Root Beer / Red Cream Soda",
    tagline: "Nostalgia in a cup.",
    gradient: "from-amber-300 to-sodaPink",
    accent: "amber",
    drinks: [
      { name: "Mallow Meltdown", base: "Root Beer", flavors: "Toasted marshmallow, cream", gradient: { from: "#BA7517", to: "#F4E4C1" } },
      { name: "Root Fashion", base: "Root Beer", flavors: "Vanilla and cream", gradient: { from: "#F4E4C1", to: "#F4C0D1" } },
      { name: "Standoff", base: "Root Beer", flavors: "Vanilla, caramel", gradient: { from: "#F4C0D1", to: "#EF9F27" } },
      { name: "Butter My Beer", base: "Root Beer", flavors: "Butterscotch, vanilla cream", gradient: { from: "#EF9F27", to: "#F4E4C1" } },
      { name: "Tickle Me Pink", base: "Barq's Cream", flavors: "Mtn Dew, cotton candy, cream", gradient: { from: "#6FCB1F", to: "#6DD4F0" } },
      { name: "Sugar Rush", base: "Red Cream Soda", flavors: "Vanilla, cotton candy", gradient: { from: "#F4E4C1", to: "#6DD4F0" } },
      { name: "Red Rush", base: "Barq's Cream Soda", flavors: "Coconut and cream", gradient: { from: "#F4C0D1", to: "#F4E4C1" } },
    ],
  },
  {
    id: "lemonade",
    label: "Lemonade",
    tagline: "Squeezed, stirred, sunshine.",
    gradient: "from-amber-300 to-sodaGreen",
    accent: "amber",
    drinks: [
      { name: "What The Kell", base: "Lemonade", flavors: "Blue raspberry, coconut cream", gradient: { from: "#2DB8E0", to: "#F4E4C1" } },
      { name: "Mmm Baby", base: "Lemonade", flavors: "Grapefruit, coconut cream", gradient: { from: "#F0997B", to: "#F4C0D1" } },
      { name: "Ooh Nelly", base: "Lemonade", flavors: "Orange, guava, grapefruit", gradient: { from: "#EF9F27", to: "#FAC775" } },
      { name: "Why So Wonderful", base: "Lemonade", flavors: "Peach, blue curaçao", gradient: { from: "#FAC775", to: "#2DB8E0" } },
      { name: "Too Tasty", base: "Lemonade", flavors: "Watermelon, fresh lemon, strawberry puree", gradient: { from: "#F0997B", to: "#B8E885" } },
      { name: "Bruh", base: "Lemonade", flavors: "Mojito mint, fresh lime, coconut cream", gradient: { from: "#6FCB1F", to: "#F4E4C1" } },
      { name: "The Rizz", base: "Lemonade", flavors: "Peach puree, raspberry puree", gradient: { from: "#EF9F27", to: "#FF1F8F" } },
      { name: "It'll Buff", base: "Pink Lemonade", flavors: "Passion fruit, guava, coconut cream", gradient: { from: "#FAC775", to: "#F4E4C1" } },
      { name: "Let's Go!", base: "Pink Lemonade", flavors: "Vanilla, grapefruit, coconut cream", gradient: { from: "#F4E4C1", to: "#F0997B" } },
    ],
  },
  {
    id: "fresca-squirt-powerade",
    label: "Fresca / Squirt / Powerade",
    tagline: "Crisp, citrusy, athletic.",
    gradient: "from-sodaBlue to-sodaGreen",
    accent: "blue",
    drinks: [
      { name: "A Cold Sunday", base: "Fresca", flavors: "Peach, blue curaçao, cranberry, fresh lime", gradient: { from: "#EF9F27", to: "#6FCB1F" } },
      { name: "Sunny Monday", base: "Squirt / Fresca", flavors: "Huckleberry, strawberry, blackberry", gradient: { from: "#7F77DD", to: "#FF1F8F" } },
      { name: "Thirsty Thursday", base: "Fresca", flavors: "Pomegranate, grapefruit, fresh lime", gradient: { from: "#FF1F8F", to: "#B8E885" } },
      { name: "Weekend At Brian's", base: "Fresca", flavors: "Guava, peach puree, coconut cream, fresh lime", gradient: { from: "#FAC775", to: "#6FCB1F" } },
      { name: "Berry Good", base: "Powerade", flavors: "Blue raspberry, red raspberry", gradient: { from: "#6DD4F0", to: "#FF1F8F" } },
      { name: "Good Grief", base: "Powerade", flavors: "Coconut, coconut cream", gradient: { from: "#F4E4C1", to: "#F4C0D1" } },
      { name: "Holey Moley", base: "Powerade", flavors: "Coconut, coconut cream", gradient: { from: "#F4C0D1", to: "#F4E4C1" } },
      { name: "Yowboy Cowboy", base: "Powerade", flavors: "Raspberry puree, coconut cream", gradient: { from: "#FF1F8F", to: "#F4E4C1" } },
    ],
  },
  {
    id: "energy-drinks",
    label: "Energy Drinks",
    tagline: "Built for big days.",
    gradient: "from-sodaPink to-sodaBlue",
    accent: "pink",
    drinks: [
      { name: "Big P", base: "Watermelon Red Bull", flavors: "Vanilla, blue raspberry, Sprite, coconut cream", gradient: { from: "#F0997B", to: "#6DD4F0" } },
      { name: "Tropic Thunder", base: "Tropical Red Bull", flavors: "Vanilla, piña colada puree, Sprite", gradient: { from: "#F4E4C1", to: "#FAC775" } },
      { name: "The B.S.", base: "Red Bull", flavors: "Pineapple, coconut, blue curaçao, coconut cream, Sprite & Mtn Dew", note: "NOS Edition!", gradient: { from: "#FAC775", to: "#2DB8E0" } },
      { name: "Buckaroo", base: "Coconut Red Bull", flavors: "Blackberry, vanilla, coconut cream", gradient: { from: "#7F77DD", to: "#F4E4C1" } },
      { name: "Nifty Bark", base: "Coconut Red Bull", flavors: "Pineapple, coconut, blue curaçao, coconut cream, Fresca, fresh lime", gradient: { from: "#FAC775", to: "#6FCB1F" } },
      { name: "The Scooter", base: "White Monster", flavors: "Coconut, pineapple, strawberry", gradient: { from: "#F4E4C1", to: "#F0997B" } },
      { name: "Paradise", base: "Strawberry Monster", flavors: "Guava, passion fruit puree, coconut cream, Mtn Dew", gradient: { from: "#FAC775", to: "#6FCB1F" } },
      { name: "The Dream", base: "Monster", flavors: "Coconut, vanilla cream, Mtn Dew or Sprite", gradient: { from: "#F4C0D1", to: "#B8E885" } },
      { name: "Winter Night", base: "White Monster", flavors: "Peach, pomegranate, pineapple, Mtn Dew", gradient: { from: "#EF9F27", to: "#FAC775" } },
      { name: "Sommers Night", base: "Ultra Blue Monster", flavors: "Pineapple, green apple, cream, Mtn Dew", gradient: { from: "#FAC775", to: "#6FCB1F" } },
      { name: "Shanny Bananny", base: "Original Red Bull", flavors: "Strawberry, banana, vanilla, Mtn Dew or Sprite", gradient: { from: "#F0997B", to: "#F4E4C1" } },
      { name: "Shaka", base: "Pipeline Punch Monster", flavors: "Pineapple, Mtn Dew, coconut cream", gradient: { from: "#EF9F27", to: "#F4E4C1" } },
    ],
  },
  {
    id: "alani",
    label: "Alani Mixed Drinks",
    tagline: "Pretty, poppy, pro level.",
    gradient: "from-sodaPink to-pink-300",
    accent: "pink",
    drinks: [
      { name: "Patch Of Heaven", base: "Sherbet Alani", flavors: "Pomegranate, raspberry puree, Squirt, coconut cream", gradient: { from: "#FF1F8F", to: "#F4E4C1" } },
      { name: "Franken Fiz", base: "Witches Brew Alani", flavors: "Green apple, caramel, cream", gradient: { from: "#6FCB1F", to: "#BA7517" } },
      { name: "Heck Ya", base: "Strawberry Lemonade", flavors: "Peach puree, cranberry", gradient: { from: "#FAC775", to: "#FF1F8F" } },
      { name: "Crash Out", base: "Strawberry Lemonade", flavors: "Cranberry, strawberry puree", gradient: { from: "#FF1F8F", to: "#F0997B" } },
      { name: "Gosh Dang It", base: "Pink Lemonade", flavors: "Passion fruit, cranberry, coconut cream", gradient: { from: "#EF9F27", to: "#F4C0D1" } },
      { name: "Blossom Bliss", base: "Cherry Twist Alani", flavors: "Vanilla, coconut, raspberry puree, coconut cream, Sprite", gradient: { from: "#F4E4C1", to: "#FF1F8F" } },
      { name: "Sherbert Storm", base: "Blue Slush Alani", flavors: "Coconut, blue raspberry, half & half creamer, Mtn Dew Voltage", gradient: { from: "#F4E4C1", to: "#2DB8E0" } },
      { name: "Crazy Blues", base: "Blue Slush Alani", flavors: "Mango, pineapple, coconut, Sprite", gradient: { from: "#EF9F27", to: "#F4E4C1" } },
      { name: "Bayside", base: "Sherbet Swirl Alani", flavors: "Vanilla, blue raspberry, Mtn Dew, coconut cream", gradient: { from: "#F4C0D1", to: "#6DD4F0" } },
      { name: "Cloud 9", base: "Alani", flavors: "Cotton candy, blue raspberry, cotton candy, coconut cream, Sprite", gradient: { from: "#6DD4F0", to: "#F4E4C1" } },
      { name: "Witches Bubbly", base: "Witches Brew Alani", flavors: "Pineapple, green apple, Squirt, coconut cream", gradient: { from: "#FAC775", to: "#6FCB1F" } },
      { name: "Blue Lightning", base: "Blue Slush Alani", flavors: "Vanilla, dragon fruit, Voltage, coconut cream", gradient: { from: "#F4E4C1", to: "#2DB8E0" } },
      { name: "Hawi Kiki", base: "Blue Slush Alani", flavors: "Vanilla, blue curaçao, coconut cream, Mtn Dew", gradient: { from: "#6DD4F0", to: "#B8E885" } },
    ],
  },
  {
    id: "jolly-rancher",
    label: "Jolly Rancher Slushies",
    tagline: "Pure candy, slushed.",
    gradient: "from-sodaPink to-sodaBlue",
    accent: "pink",
    drinks: [
      { name: "Cherry / Blue Raspberry", flavors: "Two-flavor slush", gradient: { from: "#F0997B", to: "#2DB8E0" } },
      { name: "Green Apple / Watermelon", flavors: "Two-flavor slush", gradient: { from: "#6FCB1F", to: "#F0997B" } },
      { name: "Or Mix", flavors: "Swirl any two Jolly Rancher flavors", gradient: { from: "#AFA9EC", to: "#FAC775" } },
    ],
  },
  {
    id: "refreshers",
    label: "Refreshers / Flavored Water",
    tagline: "Light, fruity, no soda.",
    gradient: "from-sodaGreen to-cyan-300",
    accent: "green",
    drinks: [
      { name: "Savor The Flavor", flavors: "Fresh strawberry, strawberry puree, coconut, vanilla, coconut cream", gradient: { from: "#F0997B", to: "#F4E4C1" } },
      { name: "Fruitylicious", flavors: "Strawberry puree, mango puree, coconut, fresh lime, fresh strawberry", gradient: { from: "#F0997B", to: "#6FCB1F" } },
      { name: "Sandy Sunrise", flavors: "Guava, passion fruit, strawberry, coconut, strawberry puree, fresh lemon", gradient: { from: "#FAC775", to: "#B8E885" } },
      { name: "Flower Field", flavors: "Lavender, pear, strawberry puree, fresh lime, fresh lemon", gradient: { from: "#AFA9EC", to: "#B8E885" } },
      { name: "Island Dream", flavors: "Pomegranate, raspberry puree, fresh lime, coconut cream", gradient: { from: "#FF1F8F", to: "#F4E4C1" } },
      { name: "Blue Sky", flavors: "Blue curaçao, coconut, vanilla, fresh lemon", gradient: { from: "#2DB8E0", to: "#B8E885" } },
      { name: "Mango Tree", flavors: "Coconut, vanilla, mango puree, coconut cream", gradient: { from: "#F4E4C1", to: "#EF9F27" } },
      { name: "Pink Passion", flavors: "Pineapple, passion fruit, strawberry puree, coconut cream", gradient: { from: "#FAC775", to: "#F0997B" } },
      { name: "Sparkling Penny", flavors: "Black cherry, vanilla, coconut, coconut cream", gradient: { from: "#FF1F8F", to: "#F4C0D1" } },
      { name: "Just Delicious", flavors: "Strawberry puree, peach, mango", gradient: { from: "#F0997B", to: "#FAC775" } },
      { name: "Lemon Berry", base: "Shot of Lemonade", flavors: "Blue raspberry, peach, fresh lime", gradient: { from: "#6DD4F0", to: "#6FCB1F" } },
      { name: "Southern Sunrise", flavors: "Strawberry, pineapple, peach", gradient: { from: "#F0997B", to: "#EF9F27" } },
    ],
  },
  {
    id: "kids",
    label: "Kids Menu",
    tagline: "Little sips, big smiles.",
    gradient: "from-sodaPink to-sodaGreen",
    accent: "pink",
    drinks: [
      { name: "Blue Ocean", base: "Sprite", flavors: "Blue razz, sea life gummies", price: "$3.19", gradient: { from: "#2DB8E0", to: "#6DD4F0" } },
      { name: "Fluffy Cloud", base: "Sprite", flavors: "Cotton candy", price: "$3.19", gradient: { from: "#6DD4F0", to: "#F4C0D1" } },
      { name: "Bubble Up", base: "Sprite", flavors: "Cherry lime, gumballs", price: "$3.19", gradient: { from: "#F0997B", to: "#6FCB1F" } },
      { name: "Peachy Twist", base: "Sprite", flavors: "Blue curaçao, peach and peach rings", price: "$3.19", gradient: { from: "#2DB8E0", to: "#FAC775" } },
      { name: "Coconut Island", base: "Sprite", flavors: "Coconut, pineapple", price: "$3.19", gradient: { from: "#F4E4C1", to: "#EF9F27" } },
      { name: "Shark Lagoon", base: "Fruit Punch Gatorade", flavors: "Sprite, coconut cream, shark gummies", price: "$3.19", gradient: { from: "#FF1F8F", to: "#F4E4C1" } },
      { name: "Sweet Life", base: "Sprite", flavors: "Coconut, pineapple, strawberry, whip cream, sprinkles", price: "$3.19", gradient: { from: "#F4C0D1", to: "#F0997B" } },
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
  { name: "Dipping Sauce" },
];
