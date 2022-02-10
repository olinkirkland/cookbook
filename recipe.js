const recipe1 = {
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
};

const recipe2 = {
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
};

const recipe3 = {
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
};

const recipes = { recipe1: recipe1, recipe2: recipe2, recipe3: recipe3 };

// Check the url
const url = location.href;
const arr = url.match(/\?([a-z,-]+)/);
if (arr.length > 1) {
  populateRecipePage(arr[1]);
}

function populateRecipePage(recipeName) {
  if (recipes[recipeName]) {
    console.log("Recipe found!");
    const recipe = recipes[recipeName];

    /**
     * Update Recipe elements
     */

    const recipeNameEl = document.getElementById("recipeName");
    recipeNameEl.textContent = recipe.name;

    // Todo: Apply recipe to view
  } else {
    console.log(`Recipe ${recipeName} not found!`);
  }
}
