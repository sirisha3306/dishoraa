const recipes = [
  {
    title: "Masala Maggi",
    category: "Snack",
    time: "8 mins",
    image: "masalamaggie.jpg",
    ingredients: ["Maggi noodles", "Water", "Chopped onion", "Chopped tomato", "Green chili", "Masala (from packet)", "Butter/oil", "Coriander leaves"],
    steps: [
      "Boil water and add noodles.",
      "In another pan, sauté onions, tomatoes, and chili.",
      "Add tastemaker and cooked noodles.",
      "Stir and finish with butter and coriander."
    ]
  },
   {
  "title": "Avocado Toast with Egg",
  "category": "Breakfast",
  "time": "7 mins",
  "image": "avacodo.jpg",
  "ingredients": [
    "1 slice bread (whole wheat/sourdough)",
    "½ ripe avocado",
    "1 egg",
    "Salt & pepper",
    "Red pepper flakes (optional)",
    "Olive oil"
  ],
  "steps": [
    "Toast the bread until crispy.",
    "Mash avocado and spread on toast.",
    "Fry or poach the egg (2-3 mins).",
    "Place egg on toast, season with salt, pepper, and chili flakes.",
    "Drizzle with olive oil."
  ]
},
{
  title: "Microwave Omelette",
  category: "Breakfast",
  time: "5 mins",
  image: "omlette.jpg",
  "ingredients": [
    "2 eggs",
    "2 tbsp milk",
    "Handful shredded cheese",
    "Diced veggies (spinach, bell pepper, tomato)",
    "Salt & pepper"
  ],
  "steps": [
    "Whisk eggs, milk, salt, and pepper in a microwave-safe bowl.",
    "Add cheese and veggies, mix well.",
    "Microwave for 1.5–2 minutes (until set).",
    "Fold and serve!"
  ]
},
{
  "title": "Peanut Butter Banana Wrap",
  "category": "Snack",
  "time": "4 mins",
  "image": "peanut.jpg",
  "ingredients": [
    "1 tortilla/flatbread",
    "2 tbsp peanut butter",
    "1 banana, sliced",
    "Honey (optional)",
    "Cinnamon (optional)"
  ],
  "steps": [
    "Spread peanut butter on the tortilla.",
    "Add banana slices, drizzle honey, sprinkle cinnamon.",
    "Roll tightly and slice in half."
  ]
},
{
  "title": "5-Minute Caprese Salad",
  "category": "Salad",
  "time": "5 mins",
  "image": "caprese.jpg",
  "ingredients": [
    "1 cup cherry tomatoes, halved",
    "½ cup fresh mozzarella balls",
    "Handful fresh basil leaves",
    "1 tbsp balsamic glaze",
    "Olive oil, salt & pepper"
  ],
  "steps": [
    "Toss tomatoes, mozzarella, and basil in a bowl.",
    "Drizzle with olive oil and balsamic glaze.",
    "Season with salt & pepper."
  ]
},
{
  "title": "Besan Chilla",
  "category": "Breakfast",
  "time": "10 mins",
  "image": "besanchilla.jpg",
  "ingredients": [
    "½ cup besan (gram flour)",
    "¼ cup water",
    "1 small onion (finely chopped)",
    "1 green chili (chopped)",
    "½ tsp turmeric",
    "½ tsp red chili powder",
    "Salt to taste",
    "Oil for cooking"
  ],
  "steps": [
    "Mix besan, water, and spices into a smooth batter.",
    "Add onions and chili.",
    "Heat oil in a pan, pour batter like a pancake.",
    "Cook 2 mins per side until golden.",
    "Serve with chutney or ketchup."
  ]
},
{
  "title": "Paneer Sandwich",
  "category": "Snack",
  "time": "8 mins",
  "image": "paneersandwich.jpg",
  "ingredients": [
    "4 bread slices",
    "½ cup crumbled paneer",
    "1 tbsp mint chutney",
    "½ tsp chaat masala",
    "1 tbsp butter",
    "Salt to taste"
  ],
  "steps": [
    "Mix paneer, chaat masala, and salt.",
    "Spread chutney on bread, add paneer mix, and cover with another slice.",
    "Butter the outer sides and grill on a pan until crispy (2 mins per side)."
  ]
},
{
  "title": "Dahi Toast",
  "category": "Breakfast",
  "time": "6 mins",
  "image": "dahitoast.jpg",
  "ingredients": [
    "4 bread slices",
    "½ cup thick curd (whisked)",
    "1 green chili (chopped)",
    "1 tbsp coriander leaves",
    "½ tsp roasted cumin powder",
    "Salt to taste",
    "Butter for toasting"
  ],
  "steps": [
    "Mix curd, chili, coriander, cumin powder, and salt.",
    "Spread between bread slices.",
    "Toast with butter until golden (2 mins per side)."
  ]
},
{
  "title": "Microwave Dal Khichdi",
  "category": "Quick Meal",
  "time": "10 mins",
  "image": "dalkihchdi.jpg",
  "ingredients": [
    "½ cup rice (washed)",
    "¼ cup yellow moong dal (washed)",
    "1.5 cups water",
    "½ tsp turmeric",
    "½ tsp ghee",
    "Salt to taste"
  ],
  "steps": [
    "Mix rice, dal, water, turmeric, and salt in a microwave-safe bowl.",
    "Microwave for 8 mins (stir once halfway).",
    "Add ghee and serve with pickle/yogurt."
  ]
},
{
  "title": "Sprouts Chaat",
  "category": "Snack",
  "time": "5 mins",
  "image": "sproutschaat.jpg",
  "ingredients": [
    "1 cup boiled sprouts",
    "1 small onion (chopped)",
    "1 small tomato (chopped)",
    "½ tsp chaat masala",
    "½ tsp lemon juice",
    "Coriander leaves (garnish)"
  ],
  "steps": [
    "Mix sprouts, onion, and tomato in a bowl.",
    "Add chaat masala and lemon juice.",
    "Garnish with coriander leaves."
  ]
},
{
  "title": "Coconut Ladoo",
  "category": "Sweet",
  "time": "7 mins",
  "image": "coconutladoo.jpg",
  "ingredients": [
    "1 cup desiccated coconut",
    "½ cup condensed milk",
    "Cardamom powder (optional)"
  ],
  "steps": [
    "Mix coconut and condensed milk in a pan.",
    "Cook on low heat for 3-4 mins until thick.",
    "Let cool slightly, shape into ladoos.",
    "Roll in extra coconut (optional)."
  ]
},
  {
    title: "Bread Poha",
    category: "Breakfast",
    time: "10 mins",
    image: "breadpoha.jpg",
    ingredients: ["Bread slices", "Onion", "Tomato", "Green chili", "Mustard seeds", "Curry leaves", "Salt", "Turmeric", "Oil"],
    steps: [
      "Cut bread into small cubes.",
      "Heat oil, splutter mustard seeds, add curry leaves.",
      "Add onions, green chilies, and sauté.",
      "Add tomatoes, turmeric, salt. Cook until soft.",
      "Toss in bread pieces and mix well."
    ]
  
  },
  {
    title: "Instant Veggie Upma",
    category: "Breakfast",
    time: "12 mins",
    image: "instantveggieupma.jpg",
   ingredients: ["Rava", "Water", "Chopped veggies", "Salt", "Oil", "Mustard seeds"],
    steps: [
      "Heat oil and splutter mustard seeds.",
      "Add chopped veggies and sauté.",
      "Add rava, roast a bit.",
      "Pour water, add salt, stir until fluffy."
    ]
  },
 {
  "title": "Aloo Chana Chaat",
  "category": "Savory",
  "time": "5 mins",
  "image": "aloo.jpg",
  "ingredients": [
    "½ cup boiled chickpeas",
    "½ cup boiled potatoes (diced)",
    "1 tbsp chopped onion",
    "½ tsp cumin powder",
    "½ tsp chaat masala",
    "1 tbsp lemon juice",
    "Coriander leaves"
  ],
  "steps": [
    "Mix chickpeas, potatoes, and onion in a bowl.",
    "Add cumin powder, chaat masala, and lemon juice.",
    "Toss well and garnish with coriander."
  ]
},
  {
    title: "Cold Coffee with Ice Cream",
    category: "Sweet",
    time: "5 mins",
    image: "coldcoffeewithicecream.jpg",
    ingredients: ["Chilled milk", "Instant coffee", "Sugar", "Vanilla ice cream", "Ice cubes"],
    steps: [
      "Blend milk, coffee, sugar, and ice.",
      "Pour into a glass.",
      "Top with a scoop of ice cream.",
      "Serve chilled!"
    ]
    
  },
  {
    title: "2-Min Microwave Choco Cake",
    category: "Sweet",
    time: "2 mins",
    image: "chococake.jpg",
    ingredients: ["All-purpose flour", "Cocoa powder", "Sugar", "Milk", "Oil", "Baking powder"],
    steps: [
      "Mix all ingredients in a mug.",
      "Stir well to form a smooth batter.",
      "Microwave for 1.5 to 2 minutes.",
      "Let it cool slightly and dig in!"
    ]
  },
  {
    title: "Veg Sandwich",
    category: "Snack",
    time: "10 mins",
    image: "vegsandwich.jpg",
    ingredients: ["Bread slices", "Butter", "Chopped veggies (onion, tomato, cucumber)", "Salt", "Pepper", "Green chutney (optional)"],
    steps: [
      "Butter the bread slices.",
      "Layer chopped veggies on one slice.",
      "Sprinkle salt and pepper.",
      "Cover with another slice, grill or toast."
    ]
  },
  {
    title: "Oats Masala Bowl",
    category: "Savory",
    time: "12 mins",
    image: "oatsmasala.jpg",
    ingredients: ["Oats", "Water", "Chopped veggies", "Salt", "Garam masala", "Oil", "Mustard seeds"], 
    steps: [
      "Dry roast oats and set aside.",
      "Heat oil, splutter mustard seeds.",
      "Add veggies, sauté with salt and garam masala.",
      "Add oats and water, cook till thick."
    ]
  },
  {
    title: "Banana Pancake (No Eggs)",
    category: "Sweet",
    time: "10 mins",
    image: "bananapancake.jpg",
    ingredients: ["Ripe banana", "Milk", "Wheat flour", "Baking powder", "Sugar", "Butter"],
    steps: [
      "Mash banana, mix with milk, flour, sugar, baking powder.",
      "Form a thick batter.",
      "Heat a pan, spread batter into pancake shape.",
      "Cook both sides until golden brown. Serve warm."
    ]
  },
  {
    title: "Corn Chat",
    category: "Snack",
    time: "7 mins",
    image: "cornchaat.jpg",
    ingredients: ["Boiled corn", "Chaat masala", "Lemon juice", "Salt", "Chopped onion", "Coriander"],
    steps: [
      "Mix boiled corn with onion, coriander.",
      "Add chaat masala, salt, and lemon juice.",
      "Toss well and serve immediately."
    ]
  },
  {
  "title": "Masala Cheese Toast",
  "category": "Savory",
  "time": "8 mins",
  "image": "masalacheese.jpg",
  "ingredients": [
    "2 bread slices",
    "½ cup grated cheese (cheddar/mozzarella)",
    "1 tbsp butter",
    "½ tsp red chili flakes",
    "½ tsp chaat masala",
    "1 tbsp finely chopped coriander"
  ],
  "steps": [
    "Butter the bread slices.",
    "Sprinkle cheese, chili flakes, chaat masala, and coriander.",
    "Grill on a pan (cheese-side down) for 2 mins until crispy.",
    "Flip to toast the other side for 1 min."
  ]
},
{
  "title": "Sev Puri",
  "category": "Savory",
  "time": "7 mins",
  "image": "sevpuri.jpg",
  "ingredients": [
    "8-10 ready-made puris (flat papdis)",
    "½ cup boiled mashed potatoes",
    "2 tbsp tamarind chutney",
    "2 tbsp green chutney",
    "½ cup sev",
    "1 tbsp chopped onion",
    "Chaat masala & red chili powder"
  ],
  "steps": [
    "Arrange puris on a plate.",
    "Top each with mashed potatoes, onion, and chutneys.",
    "Sprinkle chaat masala, chili powder, and sev.",
    "Serve immediately."
  ]
},
{
  "title": "Spicy Roasted Papad",
  "category": "Savory",
  "time": "3 mins",
  "image": "papad.jpg",
  "ingredients": [
    "2 papads (urad dal/rice)",
    "½ tsp red chili powder",
    "½ tsp chaat masala",
    "1 tsp oil"
  ],
  "steps": [
    "Roast papads directly on flame or microwave for 1 min.",
    "Break into pieces.",
    "Drizzle oil, sprinkle chili powder, and chaat masala.",
    "Toss and serve."
  ]
},
{
  "title": "Microwave Onion Pakodi",
  "category": "Savory",
  "time": "10 mins",
  "image": "onionpakodi.jpg",
  "ingredients": [
    "1 cup sliced onions",
    "½ cup besan (gram flour)",
    "1 tbsp rice flour",
    "½ tsp red chili powder",
    "½ tsp ajwain (carom seeds)",
    "Oil for greasing"
  ],
  "steps": [
    "Mix onions, besan, rice flour, chili powder, ajwain, and salt.",
    "Grease a microwave-safe plate.",
    "Spread mixture in small clusters.",
    "Microwave for 3-4 mins until crispy."
  ]
},
{
  "title": "Green Chutney Sandwich",
  "category": "Savory",
  "time": "7 mins",
  "image": "chutneysandwich.jpg",
  "ingredients": [
    "4 bread slices",
    "2 tbsp green chutney (coriander-mint)",
    "1 small cucumber (sliced)",
    "1 tsp chaat masala",
    "Butter for toasting"
  ],
  "steps": [
    "Spread chutney on bread slices.",
    "Layer cucumber slices, sprinkle chaat masala.",
    "Butter the outer sides and grill on a pan until golden."
  ]
},
{
  "title": "Bread Pakodi",
  "category": "Snack",
  "time": "8 mins",
  "image": "breadpakodi.jpg",
  "ingredients": [
    "4 bread slices (cut into triangles)",
    "½ cup besan (gram flour)",
    "¼ tsp turmeric",
    "½ tsp red chili powder",
    "1 tsp ajwain (carom seeds)",
    "Water (as needed)",
    "Oil for frying"
  ],
  "steps": [
    "Mix besan, spices, and water to make a thick batter.",
    "Dip bread slices in the batter.",
    "Fry in hot oil until golden (2 mins per side).",
    "Serve with chutney/ketchup."
  ]
},
{
  "title": "Microwave Dhokla",
  "category": "Sweet",
  "time": "10 mins",
  "image": "dhokla.jpg",
  "ingredients": [
    "1 cup besan (gram flour)",
    "½ cup curd",
    "½ tsp fruit salt (eno)",
    "1 tsp sugar",
    "½ tsp turmeric",
    "1 green chili (chopped)",
    "Water (as needed)"
  ],
  "steps": [
    "Mix besan, curd, sugar, turmeric, and water to make a batter.",
    "Add fruit salt and pour into a greased microwave-safe dish.",
    "Microwave for 3-4 mins.",
    "Cut into squares and temper with mustard seeds if desired."
  ]
},
{
  "title": "Aloo Tikki (No-Fry)",
  "category": "Snack",
  "time": "9 mins",
  "image": "alootikki.jpg",
  "ingredients": [
    "2 boiled potatoes (mashed)",
    "2 tbsp breadcrumbs",
    "½ tsp cumin powder",
    "½ tsp garam masala",
    "1 tbsp oil"
  ],
  "steps": [
    "Mix mashed potatoes, breadcrumbs, and spices.",
    "Shape into small patties.",
    "Shallow fry with oil until crispy (3 mins per side)."
  ]
},
{
  "title": "Tomato Onion Uttapam",
  "category": "Breakfast",
  "time": "10 mins",
  "image": "uttapam.jpg",
  "ingredients": [
    "1 cup readymade dosa batter",
    "1 small onion (chopped)",
    "1 small tomato (chopped)",
    "1 green chili (chopped)",
    "Oil for cooking"
  ],
  "steps": [
    "Heat a pan, pour batter into a thick circle.",
    "Sprinkle onion, tomato, and chili on top.",
    "Drizzle oil and cook for 2 mins per side."
  ]
},
{
  "title": "Mango Chia Pudding",
  "category": "Snack",
  "time": "5 mins (+ chilling)",
  "image": "mango.jpg",
  "ingredients": [
    "2 tbsp chia seeds",
    "½ cup mango puree",
    "½ cup milk (or almond milk)",
    "1 tsp honey (optional)"
  ],
  "steps": [
    "Mix all ingredients in a bowl.",
    "Refrigerate for 2 hours (or overnight).",
    "Top with fresh mango cubes."
  ]
},
{
  "title": "Paneer Tikka",
  "category": "Snack",
  "time": "10 mins",
  "image": "paneertikka.jpg",
  "ingredients": [
    "1 cup paneer cubes",
    "2 tbsp curd",
    "½ tsp tandoori masala",
    "½ tsp red chili powder",
    "1 tbsp oil"
  ],
  "steps": [
    "Marinate paneer in curd and spices for 5 mins.",
    "Skewer and grill on a pan for 2-3 mins per side.",
    "Drizzle with lemon juice."
  ]
},
{
  "title": "Sabudana Khichdi",
  "category": "Snack",
  "time": "10 mins",
  "image": "sabudanakichidi.jpg",
  "ingredients": [
    "1 cup soaked sabudana (Saggu Biyyam)",
    "1 tbsp ghee",
    "1 tsp cumin seeds",
    "1 green chili (chopped)",
    "½ cup roasted peanuts",
    "Salt & sugar to taste"
  ],
  "steps": [
    "Heat ghee, crackle cumin and chili.",
    "Add sabudana, peanuts, salt, and sugar.",
    "Cook on low heat for 5 mins, stirring gently."
  ]
},
{
  "title": "Microwave Rava Idli",
  "category": "Breakfast",
  "time": "10 mins",
  "image": "idli.jpg",
  "ingredients": [
    "1 cup semolina (rava)",
    "½ cup curd",
    "½ tsp eno fruit salt",
    "1 tsp mustard seeds",
    "5-6 curry leaves",
    "1 tbsp grated carrot"
  ],
  "steps": [
    "Mix rava, curd, and water to make a thick batter.",
    "Add eno and pour into greased microwave-safe bowls.",
    "Microwave for 3 mins. Temper with mustard seeds and curry leaves."
  ]
},
{
  "title": "Sprouts Moong Chilla",
  "category": "Breakfast",
  "time": "9 mins",
  "image": "moongchilla.jpg",
  "ingredients": [
    "1 cup sprouted moong",
    "1 green chili",
    "½ inch ginger",
    "Salt to taste",
    "1 tbsp oil"
  ],
  "steps": [
    "Grind sprouts, chili, ginger, and salt to a coarse batter.",
    "Spread on a hot greased pan, cook 2 mins per side."
  ]
},
{
  "title": "Vermicelli Upma",
  "category": "Breakfast",
  "time": "7 mins",
  "image": "upma.jpg",
  "ingredients": [
    "1 cup roasted vermicelli(sameya)",
    "1 tbsp oil",
    "½ tsp mustard seeds",
    "1 chopped onion",
    "1 chopped carrot",
    "½ tsp turmeric"
  ],
  "steps": [
    "Sauté mustard seeds, onion, and carrot in oil.",
    "Add vermicelli, turmeric, and 1.5 cups water. Cook 5 mins."
  ]
},
{
  "title": "Egg Bhurji",
  "category": "Breakfast",
  "time": "7 mins",
  "image": "eggbhurji.jpg",
  "ingredients": [
    "2 eggs",
    "1 tbsp oil",
    "½ tsp cumin seeds",
    "1 chopped onion",
    "½ tsp turmeric",
    "1 chopped green chili"
  ],
  "steps": [
    "Heat oil, sauté cumin, onion, and chili.",
    "Add beaten eggs, turmeric, and salt. Scramble for 2 mins."
  ]
},
{
  "title": "Rava Kesari",
  "category": "Sweet",
  "time": "10 mins",
  "image": "ravakesari.jpg",
  "ingredients": [
    "½ cup semolina (rava)",
    "1 cup water",
    "½ cup sugar",
    "2 tbsp ghee",
    "5-6 saffron strands",
    "2 cardamom pods"
  ],
  "steps": [
    "Roast rava in ghee until golden.",
    "Add water, sugar, saffron, and cardamom. Stir well.",
    "Cook until thick (5 mins). Garnish with nuts."
  ]
},
{
  "title": "Moong Dal Halwa",
  "category": "Sweet",
  "time": "10 mins",
  "image": "moongdal.jpg",
  "ingredients": [
    "½ cup soaked moong dal (ground)",
    "2 tbsp ghee",
    "3 tbsp sugar",
    "2 tbsp milk",
    "Cardamom powder"
  ],
  "steps": [
    "Microwave ghee and dal for 3 mins, stirring twice.",
    "Add sugar, milk, and cardamom. Microwave 2 more mins.",
    "Garnish with nuts."
  ]
},
{
  "title": "Mango Shrikhand",
  "category": "Sweet",
  "time": "5 mins",
  "image": "mangoshrikhand.jpg",
  "ingredients": [
    "1 cup hung curd",
    "½ cup mango pulp",
    "2 tbsp powdered sugar",
    "Cardamom powder"
  ],
  "steps": [
    "Whisk hung curd until smooth.",
    "Add mango pulp, sugar, and cardamom. Mix well.",
    "Chill before serving."
  ]
},
{
  "title": "Chocolate Peda",
  "category": "Sweet",
  "time": "7 mins",
  "image": "chocolatepeda.jpg",
  "ingredients": [
    "1 cup milk powder",
    "½ cup condensed milk",
    "2 tbsp cocoa powder"
  ],
  "steps": [
    "Mix all ingredients in a microwave-safe bowl.",
    "Microwave for 2 mins, stirring halfway.",
    "Shape into pedas while warm."
  ]
}

];
