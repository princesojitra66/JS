 let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

  const recipeForm = document.getElementById("recipeForm");
  const recipeList = document.getElementById("recipeList");
  const recipeIdField = document.getElementById("recipeId");
  const searchTitle = document.getElementById("searchTitle");
  const searchIngredients = document.getElementById("searchIngredients");
  const filterCuisine = document.getElementById("filterCuisine");

  function saveToLocalStorage() {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }

  recipeForm.addEventListener("submit", e => {
    e.preventDefault();

    const id = recipeIdField.value;
    const title = document.getElementById("title").value.trim();
    const ingredients = document.getElementById("ingredients").value.trim();
    const instructions = document.getElementById("instructions").value.trim();
    const cuisine = document.getElementById("cuisine").value;
    const tagsInput = document.getElementById("tags").value.trim();

    const recipe = {
      id: id || Date.now().toString(),
      title,
      ingredients,
      instructions,
      cuisine,
      tags: tagsInput ? tagsInput.split(',').map(t => t.trim()).filter(t => t) : []
    };

    if (id) {
      recipes = recipes.map(r => r.id === id ? recipe : r);
    } else {
      recipes.push(recipe);
    }

    saveToLocalStorage();
    recipeForm.reset();
    recipeIdField.value = "";
    renderRecipes();
  });

  function renderRecipes() {
    const titleFilter = searchTitle.value.toLowerCase();
    const ingredientsFilter = searchIngredients.value.toLowerCase();
    const cuisineFilter = filterCuisine.value;

    const filtered = recipes.filter(r => {
      const titleMatch = r.title.toLowerCase().includes(titleFilter);
      const ingredientsMatch = r.ingredients.toLowerCase().includes(ingredientsFilter);
      const cuisineMatch = cuisineFilter ? r.cuisine === cuisineFilter : true;
      return titleMatch && ingredientsMatch && cuisineMatch;
    });

    recipeList.innerHTML = filtered.length === 0
      ? '<p style="color:#777; font-style:italic; user-select:none;">No recipes found.</p>'
      : filtered.map(recipe => `
        <div class="recipe-card" data-id="${recipe.id}">
          <h3>${recipe.title}</h3>
          <p><strong>Cuisine:</strong> ${recipe.cuisine || "N/A"}</p>
          <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
          <p><strong>Instructions:</strong> ${recipe.instructions || "No instructions provided."}</p>
          <p class="tags"><strong>Tags:</strong> ${recipe.tags.length ? recipe.tags.join(', ') : "None"}</p>
          <div class="actions">
            <button class="edit-btn" onclick="editRecipe('${recipe.id}')">Edit</button>
            <button class="delete-btn" onclick="deleteRecipe('${recipe.id}')">Delete</button>
          </div>
        </div>
      `).join('');
  }

  function editRecipe(id) {
    const r = recipes.find(r => r.id === id);
    if (!r) return;
    recipeIdField.value = r.id;
    document.getElementById("title").value = r.title;
    document.getElementById("ingredients").value = r.ingredients;
    document.getElementById("instructions").value = r.instructions;
    document.getElementById("cuisine").value = r.cuisine;
    document.getElementById("tags").value = r.tags.join(', ');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function deleteRecipe(id) {
  
    recipes = recipes.filter(r => r.id !== id);
    saveToLocalStorage();
    renderRecipes();
  }

  searchTitle.addEventListener("input", renderRecipes);
  searchIngredients.addEventListener("input", renderRecipes);
  filterCuisine.addEventListener("change", renderRecipes);


  renderRecipes();
