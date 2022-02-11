const recipe1 = {
  name: "Scrambled Eggs",
  img: "assets/images/scrambled-eggs.jpg",
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
  img: "assets/images/dragonfruit.jpg",
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
  img: "assets/images/pasta.jpg",
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
if (arr && arr.length > 1) {
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

  document.querySelectorAll(".recipe-img").forEach((el) => {
    el.src = recipe.img;
  });

  if (recipe.steps) {
    recipe.steps.forEach((step) => {
      let stepEl = document.createElement("li");
      stepEl.classList.add("list-group-item");
      let stepTitleEl = document.createElement("h3");
      let stepDescriptionEl = document.createElement("p");

      stepTitleEl.textContent = step.title;
      stepDescriptionEl.textContent = step.description;

      stepEl.appendChild(stepTitleEl);
      stepEl.appendChild(stepDescriptionEl);

      document.getElementById("recipeSteps").appendChild(stepEl);
    });
  }

  if (recipe.ingredients) {
    recipe.ingredients.forEach((ingredient) => {
      let ingredientEl = document.createElement("span");
      ingredientEl.classList.add("mx-2");
      ingredientEl.classList.add("badge");
      ingredientEl.classList.add("badge-info");
      let ingredientAmountEl = document.createElement("span");
      ingredientAmountEl.classList.add("text-muted");
      ingredientAmountEl.classList.add("me-1");
      let ingredientNameEl = document.createElement("span");

      ingredientAmountEl.textContent = ingredient.amount + ' ' + ingredient.name;
      // ingredientNameEl.textContent = ingredient.name;

      ingredientEl.appendChild(ingredientAmountEl);
      ingredientEl.appendChild(ingredientNameEl);

      document.getElementById("recipeIngredients").appendChild(ingredientEl);
    });
  }

  // document.getElementById("recipeSteps").a =
  //   document.getElementById("recipeStepsOl").innerHTML +
  //   `<li><div class="recipeStep" id="recipeStep${i}"><h3>${recipe.steps[i].title}</h3>
  //     <p>${recipe.steps[i].description}</p></div></li>`;
  // }
}
