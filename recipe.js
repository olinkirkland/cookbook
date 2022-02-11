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
  name: "Olin's Favorite Feast",
  img: "assets/images/goose.jpg",
  steps: [
    {
      title: "Step 1: Cook the feast",
      description:
        "Give me all the food though, make it exactly the way I want!",
    },
    {
      title: "Step 2: Prepare the chicken",
      description: "Bok bok I am chicken.",
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
  document.getElementById("recipeImg").src = recipe.img;

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

  // document.getElementById("recipeSteps").a =
  //   document.getElementById("recipeStepsOl").innerHTML +
  //   `<li><div class="recipeStep" id="recipeStep${i}"><h3>${recipe.steps[i].title}</h3>
  //     <p>${recipe.steps[i].description}</p></div></li>`;
  // }
}
