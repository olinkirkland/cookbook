const recipeProto1 = {
  name: "Boiled Goose",
  img: "assets/images/goose.jpg",
  steps: [
    {
      title: "Step 1: Boil the goose!",
      description: "Put the goose in a pot of hot water for 30 minutes",
    },
    {
      title: "Step 2: Eat the goose!",
      description: "Put the goose in your mouth and eat it",
    },
  ],
  ingredients: [
    {
      name: "Goose",
      amount: "1",
    },
    {
      name: "pot",
      amount: "A big",
    },
    {
      name: "water",
      amount: "Some",
    },
  ],
};

const recipeProto2 = {
  name: "Olin's Favorite Feast",
  img: "assets/images/goose.jpg",
  steps: [
    {
      title: "Step 1: Cook the feast",
      description: "Give me all the food though, make it exactly the way I want!",
    },
    {
      title: "Step 2: Prepare the chicken",
      description: "Bok bok I am chicken.",
    },
  ],
  ingredients: [
    {
      name: "Goose",
      amount: "1",
    },
    {
      name: "pot",
      amount: "A big",
    },
    {
      name: "water",
      amount: "Some",
    },
  ],
};

const recipe1 = {
  name: "Scrambled Eggs",
  img: "assets/images/goose.jpg",
  steps: [
    {
      title: "Step 1: Crack some eggs!",
      description: "Crack the eggs into a bowl",
    },
    {
      title: "Step 2: Add milk!",
      description: "Add milk into the bowl",
    },
    {
      title: "Step 3: Scramble the mixure!",
      description: "Use the fork to scramble the egg/milk mixure",
    },
    {
      title: "Step 4: Turn the stove on!",
      description: "Turn the stovetop on",
    },
    {
      title: "Step 5: Cook the egg/milk mixure!",
      description: "Cook the egg/milk mixure in a pan on the stovetop",
    },
  ],
  ingredients: [
    {
      name: "Pan",
      amount: "1",
    },
    {
      name: "Fork",
      amount: "1",
    },
    {
      name: "Stovetop",
      amount: "1",
    },
    {
      name: "Bowl",
      amount: "1",
    },
    {
      name: "Eggs",
      amount: "2-3",
    },
    {
      name: "milk",
      amount: "1 Pinch",
    },
  ],
};

const recipe2 = {
  name: "Raw Dragonfruit",
  img: "assets/images/goose.jpg",
  steps: [
    {
      title: "Step 1: Open dragonfruit!",
      description: "Open the dragonfruit with a knife",
    },
    {
      title: "Step 2: Consume!",
      description: "Consume the dragonfruit",
    },
  ],
  ingredients: [
    {
      name: "Human",
      amount: "1",
    },
    {
      name: "Dragonfruit",
      amount: "1",
    },
    {
      name: "Knife",
      amount: "A",
    },
  ],
};

const recipe3 = {
  name: "Fresh Pasta",
  img: "assets/images/goose.jpg",
  steps: [
    {
      title: "Step 1: Make dough!",
      description: "Add flour, water & eggs",
    },
    {
      title: "Step 2: Roll out the dough!",
      description: "Roll the dough out with a rolling pin",
    },
    {
      title: "Step 2: Put dough in noodle machine!",
      description: "Put the dough in the noodle machine",
    },
  ],
  ingredients: [
    {
      name: "Noodle Machine",
      amount: "1",
    },
    {
      name: "water",
      amount: "1 cup",
    },
    {
      name: "flour",
      amount: "1 cup",
    },
    {
      name: "eggs",
      amount: "2",
    },
    {
      name: "Rolling pin",
      amount: "1",
    },
  ],
};

const recipes = { recipe1: recipe1, recipe2: recipe2, recipe3: recipe3 };

// Parse the query in the url
// www.google.com?foo
//    -> foo
// www.google.com?bar#
//    -> bar
const url = location.href;
const arr = url.match(/\?([a-z0-9,-]+)/);
let query = "no-query-found";
if (arr.length > 1) {
  query = arr[1];
}

populateRecipePage(query);

function populateRecipePage(recipeName) {
  if (!recipes[recipeName]) {
    console.log(`Recipe ${recipeName} not found!`);
    return;
  }

  console.log("Recipe found!");
  const recipe = recipes[recipeName];

  /**
   * Update Recipe elements
   */

  document.querySelector("title").innerHTML = recipe.name;
  document.getElementById("recipeHeadline").innerHTML = recipe.name;
  document.getElementById("recipeImg").src = recipe.img;

  for (let i = 0; i < recipe.steps.length; i++) {
    document.getElementById("recipeStepsOl").innerHTML =
      document.getElementById("recipeStepsOl").innerHTML +
      `<li><div class="recipeStep" id="recipeStep${i}"><h3>${recipe.steps[i].title}</h3>
        <p>${recipe.steps[i].description}</p></div></li>`;
  }
}
