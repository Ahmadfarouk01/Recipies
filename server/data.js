// Sample data
const recipes = [
  {
    id: 1,
    img: "https://i.pinimg.com/564x/1f/9c/30/1f9c30904eb481826c6ad09238b7903e.jpg",
    title: "Fried Rice",
    ingrident: "Rice, Broth, Vegetables, Protein, Flavoring and Spices",
    procedure:
      "Rinse and drain the rice, Toast the rice in a pan until nutty Place the rice in a pan with water and broth over high heat and bring the liquid to a boil Reduce the heat to the lowest possible setting and cover the pot tightly with the lid—Cook for 15 minutes Leave to cool Fry the rice together with the vegetables and protein and Serve hot",
  },
  {
    id: 2,
    title: "Lamb Fried Rice",
    img: " https://i.pinimg.com/564x/04/36/eb/0436eb3bc8070297ed6345777e44e29e.jpg",
    ingrident:
      "400g lamb neck, cut into small cubes, 4 garlic cloves, grated, 1 tbsp finely grated ginger, 1 tbsp sunflower oil,1 large onion, chopped,1 tbsp cumin seeds, 1 tbsp nigella seeds,1 tbsp Madras spice paste,200g basmati rice, rinsed well, 8 curry leaves,400ml good-quality lamb or chicken stock, 100g paneer, chopped, 200g spinach, cooked and water squeezed out",
    procedure:
      "STEP 1:Toss the lamb in a bowl with the garlic, ginger and a large pinch of salt. Marinate in the fridge overnight or for at least a couple of hours. STEP 2: Heat the oil in a casserole. Fry the lamb for 5-10 mins until starting to brown. Add the onion, cumin seeds and nigella seeds, and cook for 5 mins until starting to soften. Stir in the curry paste, then cook for 1 min more. Scatter in the rice and curry leaves, then pour over the stock and bring to the boil. Meanwhile, heat oven to 180C/160C fan/gas 4., STEP 3: Stir in the paneer, spinach and some seasoning. Cover the dish with a tight lid of foil, then put the lid on to ensure it’s well sealed. Cook in the oven for 20 mins, then leave to stand, covered, for 10 mins. Bring the dish to the table, remove the lid and foil, scatter with the coriander and chillies and serve with yogurt on the side.",
  },
  {
    id: 3,
    title: "egg-fried rice",
    img: " https://i.pinimg.com/564x/47/38/5e/47385e5bd09410ead642026572a8f9df.jpg",
    ingrident:
      "250g long grain rice 3 tbsp vegetable oil 1 onion, finely chopped 4 eggs, beaten 2 spring onions, sliced, to serve",
    procedure:
      "STEP 1 Cook the rice following pack instructions, then drain, spread it out to steam-dry and set aside.  STEP 2 Heat 2 tbsp of the oil in a large wok over a high heat, then add the onion and fry until lightly browned, around 5 mins. Add the rice, stir and toast for about 3 mins, then move to the side of the pan.  STEP 3 Add the remaining oil, then tip in the egg mixture. Leave to cook a little, then mix in with the rice – stir vigorously to coat the grains or, if you prefer the egg chunkier, allow to set for a little longer before breaking up and stirring through. Tip into a serving bowl and scatter over the spring onion to serve. You can also add sesame oil, ground white pepper and a splash of soy sauce to season.",
  },

  {
    id: 4,
    title: "Jollof Rice",
    img: "https://i.pinimg.com/236x/59/13/a8/5913a82ff073ea70bf146731ebe047ab.jpg",
    ingrident:
      "8 skinless, boneless chicken thighs, cut into large pieces, 3 tbsp vegetable or sunflower oil, 1 large onion, halved and sliced, 3 tbsp tomato purée, 1 chicken stock cube, 400g basmati rice, 1 red pepper, deseeded and thickly sliced, 1 yellow pepper, deseeded and thickly sliced, 100g okra, halved, bunch coriander, roughly chopped, to serve",
    procedure:
      "STEP 1 Season the chicken with salt and pepper. Heat 2 tbsp of the oil in a large deep frying pan over a high heat then add the meat and fry for about 5 mins till golden all over. Lift out of the pan onto a plate. STEP 2 Add the rest of the oil to the pan and fry the onions until soft but not golden, about 5 mins. While the onions cook, make the ginger and chilli base. Put the garlic, tomatoes, ginger and chilli into a food processor or blender and whizz till smooth. STEP 3 Add the tomato purée to the onions, fry for another 2 mins then add the ginger and chilli mix. Crumble in the stock cube, stir then pour in 600ml boiling water. Add the chicken, bring to the boil then simmer for 15 mins. STEP 4 Put the rice into a large bowl, cover with cold water and use your hands to wash the grains. Tip the water out then repeat twice until the water runs clear. Add the rice to the pan, turn the heat down to a simmer then cover with foil and a lid (so no steam can escape) and cook for 20 mins. STEP 5 Take the lid off (the rice won’t be cooked yet) then scatter the peppers and okra over the rice. Re-cover and cook for 10 mins until the veg is softened and the rice tender. Just before serving, mix the veg through and scatter over coriander.",
  },
  {
    id: 5,
    title: "Cheesy Taco Pasta",
    img: "https://i.pinimg.com/564x/59/a1/52/59a1529842d9e7837ae909e4c3aa7436.jpg",
    ingrident:
      "• 1 lb Ground beef• 4 cloves Garlic• 1/2 tsp Oregano, dried• 1 Parsley• 1 Yellow onion• 1 cup Salsa, jarred• 1 tbsp Worcestershire sauce• 1/2 lb Shells pasta, large• 1 Pepper• 1 tsp Red pepper flakes• 1 Salt• 2 tbsp Taco seasoning• 1 tbsp Canola oil• 1 Tortilla chips• 1 1/2 cups Cheddar cheese• 1 Cheese• 1 Sour cream• 3/4 cup Water",
    procedure:
      "Cook the shelled pasta according to the directions on the box and drain., Add the ground beef to the pan and brown well., Drain the fat., Add the taco seasoning and ¾ cup of water, stir and cook until water is gone., Add the pasta back into the pot with the salsa and cheese., Stir to combine., Serve immediately, preferably with crunchy tortilla chips (optional) on top.",
  },
  {
    id: 6,
    title: "Penne Arrabiata",
    img: "https://i.pinimg.com/564x/a6/91/ed/a691ed8759b8f2250a2ca6ecd567b049.jpg",
    ingrident:
      "• 1/4 cup Basil, fresh leaves• 1 Head Garlic cloves, whole• 1 tsp Red pepper flakes/ chili flakes• 2 (28-ounce) cans San marzano tomatoes, whole• 1 lb Penne, dry• 1 tsp Black pepper, freshly ground• 2 tsp Fennel seeds, whole• 3/4 tbsp Salt• 1/4 cup Olive oil, good extra virgin• 1 Parmesan cheese",
    procedure:
      "1. Cook pasta: penne or other desired pasta. Drain and set aside. 2. Make the arrabbiata sauce.  Add oil, garlic, and crushed red pepper to a skillet over medium heat and cook for 30 seconds.  Add the whole tomatoes, tomato paste, and simmer for 10 minutes before removing from heat and adding the fresh basil. Two process photos for making the tomato sauce for penne arrabiatta. 3. Add pasta and parmesan. Toss and enjoy.",
  },
  {
    id: 7,
    title: "Cheesy Vegetarian Pasta",
    img: "https://i.pinimg.com/564x/7a/f1/ee/7af1ee417f3ebd7d0298bcfd724adac1.jpg",
    ingrident:
      "• 1 cup Cherry tomatoes • 3 Garlic cloves • 8 oz Mushrooms • 1/2 Red onion • 1/4 cup Tomato paste • 1/4 cup Green olives • 8 oz Rotini pasta, dry • 1 tsp Black pepper • 1 tbsp Italian seasoning, dried • 2 tsp Salt • 2 tbsp Olive oil • 1 tbsp Butter, unsalted • 1 cup Mozzarella cheese • 2 cups Water",
    procedure:
      "In a large deep-sided skillet, over medium heat, melt the butter and olive oil.Add the red onion and cook for 2 to 3 minutes, stirring occasionally.Next, add in the mushrooms and cook for 5 minutes, until softened and browned, stirring regularly.Mushrooms and onions cooking in skillet Add the tomatoes and cook for 1 to 2 minutes, then stir in the garlic.Tomatoes on top of cooked mushrooms in skillet In a medium bowl, whisk together the water and tomato sauce until combined.Whisk in cup with tomato sauce on marble table Add the dry pasta into the skillet or stockpot with the vegetables.Raw pasta on top of tomatoes and mushrooms in skillet Pour the tomato mixture into the pot along with the salt, black pepper, and dried Italian herbs.Tomato sauce over raw pasta with herbs in skillet Bring to a boil, then reduce the heat to low and cover. Cook for 10 minutes or until the liquid has evaporated.Stir in the cheese and olives.Shredded cheese on top of cooked tomato pasta Remove from heat and serve immediately.",
  },
  {
    id: 8,
    title: "Mac and Cheese",
    img: "https://i.pinimg.com/564x/81/c5/e7/81c5e713d851de6e5016d991886d0630.jpg",
    ingrident:
      "• 1 Basil or parsley, fresh• 2 Eggs, large• 1 lb Short-cut pasta• 2 tsp Cajun seasoning• 2 tbsp Butter, salted• 3 cups Cheddar cheese• 3 cups Colby jack cheese• 1/4 cup Sour cream or plain greek yogurt• 2 1/4 cups Whole milk",
    procedure:
      "Preheat the oven. Preheat to 325 degrees and lightly grease a square baking dish., Cook the macaroni. Slightly undercook your noodles (about 1 minute under al-dente). Drain and set aside., Make the roux.  Melt the butter in a medium saucepan over medium heat. Blend in the flour, salt, and pepper. Cook for 2 minutes., Add milk and cheese.  Stir in milk and half and half, slowly, stirring constantly. Remove from heat. Add 1 cup shredded cheese to the sauce and stir just until melted. Add the cooked macaroni noodles and toss to coat them in the sauce., Pour into baking dish.  Pour half or the pasta mixture into the prepared baking dish. Sprinkle ½ cup cheese over the top. Pour remaining pasta over it and sprinkle with remaining cheese.",
  },
  {
    id: 9,
    title: "Chicken Ramen",
    img: "https://i.pinimg.com/564x/4d/a3/83/4da383ba256bb5189a2dba1a9f1bf58d.jpg",
    ingrident: "Noodles.Soy sauce - White pepper Ginger and garlic.",
    procedure:
      "Fry minced garlic and ginger in butter with a little sesame oil. Then add in chicken stock. Next in goes soy sauce, chilli sauce, rice wine, white pepper, a little brown sugar and shredded cooked chicken. That's all boiled together for a few minutes. Then we add in the noodles and cook for 3 minutes more. That's it! We're ready to plate up. Use tongs to transfer the noodles to bowls, then ladle over the stock and add that chicken. Now you can top with whatever toppings you like. I like a soft boiled egg (see tips on this below), spring onions (scallions), strips of carrots and a few sesame seeds. I also like to drizzle with a little chilli oil, chilli paste or chilli sauce.",
  },
  {
    id: 10,
    title: "Saucy Ramen Noodles",
    img: "https://i.pinimg.com/564x/66/69/aa/6669aa09bc7baabaf050f80c86416806.jpg",
    ingrident:
      "• 2 cloves Garlic• 1 Scallions• 10 oz Tofu, extra firm• 1/2 tbsp Chili garlic sauce• 5 tbsp Soy sauce• 1 1/2 tsp Soy sauce, dark• 2 tbsp Corn starch• 1/4 tsp Pepper, ground• 1 Sesame seeds• 1 tbsp Sugar• 2 tbsp Rice vinegar• 1 tbsp Sesame oil• 2 servings Ramen noodle cakes, dry instant• 1 cup Water",
    procedure:
      "Since we’ll be cooking down the noodles in the sauce later on, I like to slightly undercook my noodles., You can cook your noodles around 2 minutes less than the package instructions or until they still have a good bite., You can opt to run them through water after cooking to help stop the cooking but I like to add them directly to the sauce from cooking since this way the noodles can better absorb the flavours., If you’d like to add the noodles directly to the sauce, I suggest preparing everything beforehand and make sure the sauce is ready in the pan before you cook the noodles.",
  },
  {
    id: 11,
    title: "Ramen Noodles Stir Fry",
    img: "https://i.pinimg.com/564x/5e/9a/98/5e9a986983a8fb2488c4ed3436c5358b.jpg",
    ingrident:
      "1 tbsp. vegetable oil, 1 large onion, chopped, 1 red bell pepper, chopped, ½ head broccoli, cut into florets, 1 lb. ground beef, 6 oz ramen noodles, (2 packets with seasoning packets discarded), Salt and pepper, to taste, Sauce, ¼ c. soy sauce, 1 tbsp. brown sugar, 1 tbsp. apple cider vinegar, 2 tsp. sriracha, 1 clove garlic, minced, 1 scallion, (chopped)",
    procedure:
      "First things first, you will need 2 packages of noodles to make the ramen noodle recipe. I used two 3 ounce packages in total.You will start by boiling the noodles. Only 2 minutes!While they are cooking, we will make the stir fry!Simply heat your vegetable oil in a medium skillet and sauté onion, garlic, bell pepper and broccoli. Only enough to make them soft. I did it very quickly, about two minutes.Then, I removed the vegetables from the pan and added my ground beef.Once you cooked the beef, drain all its liquid and add back the vegetables.Now, prepare the sauce by adding soy sauce, brown sugar, apple cider vinegar and garlic.Finally, drain cooked ramen noodles and toss them in the beef with sauce!Top the noodles stir fry with chopped green onions or sesame seeds!",
  },
  {
    id: 12,
    title: "Scallion Ramen with Shrimp",
    img: "https://i.pinimg.com/564x/3d/5b/7a/3d5b7a95a61dd4abbc2c2ead9f59162d.jpg",
    ingrident:
      "• 12 Shrimp, fresh or frozen• 2 tbsp Ginger, fresh• 1 Lime• 4 Scallions (2 cups)• 3 tbsp Soy sauce, light• 125 g Egg noodles or ramen noodles, dried• 1/4 tsp Cayenne pepper• 1 tbsp Raw cane sugar• 1 tbsp Sesame seeds• 60 ml Canola oil• 1 tsp Rice vinegar or white wine vinegar• 3 tbsp Sesame oil",
    procedure:
      "In a bowl, combine the ginger scallion sauce ingredients. Pan-fry the shrimp. Cook the noodles according to the instructions on the package. Combine everything and dig in.",
  },
];

module.exports = facescrub;
