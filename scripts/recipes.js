const apiKey = "a1dd3e6aa6cf4722b1021a0ad7f05d7e"; //spoonacular API

const USDA_API_KEY = 'UY80IrfAOXWpHRft40wkJPDmRd6Sw7Q0a4QLLAGx'; //USDA Api

const usdaCache = {};


//gets the recipe from spoonacular
async function searchRecipes() {
    const searchQuery = document.getElementById("query").value;
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}`);
        const data = await response.json();
        const recipeList = document.getElementById("results");
        recipeList.innerHTML = ""; 

        if(data.results.length === 0){
            recipeList.innerHTML = "No recipes found.";
        }else{
            data.results.forEach(recipe => {
                const recipeItem = document.createElement("div");
                recipeItem.className = "recipe-item";
                const recipeTitle = document.createElement("h3");
                recipeTitle.textContent = recipe.title;
                recipeImage = document.createElement("img");
                recipeImage.src = recipe.image;
                recipe.alt = recipe.title;
                const recipeLink = document.createElement("a");
                recipeLink.href = "#";
                recipeLink.textContent = "View Recipe";
                recipeLink.onclick = async function(){
                    await showRecipeDetails(recipe.id);
                };
                recipeItem.appendChild(recipeImage);
                recipeItem.appendChild(recipeTitle);
                recipeItem.appendChild(recipeLink);
                recipeList.appendChild(recipeItem);
                
            });
        }

    } catch(error){
        console.error("Error fetching Recipes:", error);
    }
};



// Fetch USDA food data with caching
async function fetchFoodDataFromUSDA(foodName) {
  if (usdaCache[foodName]) {
    return usdaCache[foodName];
  }

  try {
    const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${USDA_API_KEY}&query=${encodeURIComponent(foodName)}&pageSize=1`);
    const data = await response.json();

    if (data.foods && data.foods.length > 0) {
      const foodId = data.foods[0].fdcId;
      const detailResponse = await fetch(`https://api.nal.usda.gov/fdc/v1/food/${foodId}?api_key=${USDA_API_KEY}`);
      const foodDetails = await detailResponse.json();
      usdaCache[foodName] = foodDetails; // Store in cache
      return foodDetails;
    } else {
      usdaCache[foodName] = null;
      return null;
    }
  } catch (error) {
    console.error("USDA fetch error:", error);
    return null;
  }
}


//shows recipe and calories 
async function showRecipeDetails(recipeId) {
    const recipeDetailsDiv = document.getElementById("recipe-details");
    const recipeContentDiv = document.getElementById("recipe-content");
    
    try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`);
        const recipeData = await response.json();

       
        const ingredientWithNutrition = await Promise.all(recipeData.extendedIngredients.map(async (ingredient) => {
            const foodData = await fetchFoodDataFromUSDA(ingredient.original);
            let nutritionInfo = '';
            if (foodData && foodData.foodNutrients) {
                
                const calories = foodData.foodNutrients.find(n => n.nutrientName === 'Energy');
                if (calories) {
                    nutritionInfo = `<p>Calories: ${calories.value} kcal</p>`;
                }
            }
            return `
                <li>
                    ${ingredient.original}
                    ${nutritionInfo}
                </li>
            `;
        }));

        
        recipeContentDiv.innerHTML = `
            <h2 class="head-font">${recipeData.title}</h2>
            <img src="${recipeData.image}" alt="${recipeData.title}">
            <p class="body-font"><strong>Ingredients:</strong></p>
            <ul>${ingredientWithNutrition.join('')}</ul>
            <p class="body-font"><strong>Instructions:</strong> ${recipeData.instructions}</p>
        `;
        recipeDetailsDiv.style.display = "flex";
    } catch (error) {
        console.error("Error fetching recipe details:", error);
    }
}

function closeRecipeDetails(){
    const recipeDetailsDiv = document.getElementById("recipe-details");
    recipeDetailsDiv.style.display = "none";
};