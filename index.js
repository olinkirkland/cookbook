const recipe1 = {
  name: "Boiled Goose",
  img: "assets/images/goose.jpg",
  steps: [
    {
      title: "Boil the goose!",
      description: "Put the goose in a pot of hot water for 30 minutes",
    },
    {
      title: "Eat the goose!",
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

writeRecipeContent(recipe1)

function populateRecipePage(recipeName) {
  if (recipes[recipeName]) {
    console.log("Recipe found!");
    let recipe = recipes[recipeName];

    // Todo: Apply recipe to view

    writeRecipeContent(recipe);

  } else {
    console.log(`Recipe ${recipeName} not found!`);
  }
}

function writeRecipeContent(recipe){ //Fill HTML with content

  let counter = recipe.steps.length;
  document.querySelector("title").innerHTML = recipe.name
  document.getElementById("recipeHeadline").innerHTML = recipe.name;
  document.getElementById("recipeImg").src = recipe.img;

  for(let i = 0; i < counter; i++){
    document.getElementById("recipeStepsOl").innerHTML = 
    document.getElementById("recipeStepsOl").innerHTML + 
    `<li><div class="recipeStep" id="recipeStep${i}"><h3>${recipe.steps[i].title}</h3>
    <p>${recipe.steps[i].description}</p></div></li>`;
  }

}