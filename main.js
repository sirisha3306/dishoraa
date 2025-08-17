document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const recipeContainer = document.getElementById("recipes");
  const filterButtons = document.querySelectorAll("#filters button");
  const filtersSection = document.getElementById("filters");
  const homeSection = document.getElementById("home-section");
  const categoryLink = document.getElementById("category-link");
  const homeLink = document.getElementById("home-link");

  // Initialize page state
  function initPage() {
     const allSections = document.querySelectorAll('.content-section');
  allSections.forEach(sec => sec.style.display = 'none');

  if (homeSection) homeSection.style.display = "flex";
  }
  initPage();

  // Display recipes based on category
  function displayRecipes(category) {
    if (!recipeContainer) return;
    
    recipeContainer.innerHTML = "";
    let filtered = (category === "Recent"|| category=="All")
      ? recipes
      : recipes.filter(r => r.category === category);

    filtered.forEach(recipe => {
      let card = document.createElement("div");
      card.className = "recipe-card";
      card.innerHTML = `
        <img src="images/${recipe.image}" alt="${recipe.title}" class="recipe-image">
        <h3>${recipe.title}</h3>
        <p><strong>Time:</strong> ${recipe.time}</p>
        <p><strong>Type:</strong> ${recipe.category}</p>
        <button class="try-btn">Try it</button>
      `;
      recipeContainer.appendChild(card);
    });
    
    // Update page state
    if (homeSection) homeSection.style.display = "none";
document.getElementById('filters-wrapper').style.display = "flex";
    if (recipeContainer) recipeContainer.style.display = "flex";
  }

  // Recipe card click handler
  recipeContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("try-btn")) {
      const existingModal = document.querySelector('.recipe-modal');
      if (existingModal) existingModal.remove();

      const card = e.target.closest(".recipe-card");
      const title = card.querySelector("h3").textContent;
      const recipe = recipes.find(r => r.title === title);

      const modal = document.createElement("div");
      modal.className = "recipe-modal";
      modal.innerHTML = `
        <div class="modal-content split-layout">
          <div class="left-pane">
            <img src="images/${recipe.image}" alt="${recipe.title}">
          </div>
          <div class="right-pane">
            <h2>🧑‍🍳 ${recipe.title}</h2>
            <div class="recipe-tabs">
              <button class="tab-btn active" data-tab="ingredients">Ingredients</button>
              <button class="tab-btn" data-tab="steps">Steps</button>
            </div>
              <div class="tab-content">
              <div class="tab-scrollbox">
                <div class="tab-pane active" id="ingredients">
                  <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
                </div>
                <div class="tab-pane" id="steps">
                <div class="tab-scrollbox">
                  <ol>${recipe.steps.map(s => `<li>${s}</li>`).join("")}</ol>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button class="close-modal">Close</button>
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      // Tab functionality
      modal.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          modal.querySelectorAll('.tab-btn, .tab-pane').forEach(el => el.classList.remove('active'));
          btn.classList.add('active');
          modal.querySelector(`#${btn.dataset.tab}`).classList.add('active');
        });
      });

      // Close modal
      modal.querySelector(".close-modal").addEventListener("click", () => {
        modal.remove();
      });
    }
  });
document.getElementById("search-input").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const allCards = document.querySelectorAll(".recipe-card");
  let anyVisible = false;

  allCards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    if (title.includes(query)) {
      card.style.display = "";
      anyVisible = true;
    } else {
      card.style.display = "none";
    }
  });

  let noResultMsg = document.getElementById("no-result-msg");
  if (!noResultMsg) {
    noResultMsg = document.createElement("div");
    noResultMsg.id = "no-result-msg";
    noResultMsg.textContent = "Oops! We couldn’t find that dish… maybe invent it? 🧑‍🍳";
    recipeContainer.appendChild(noResultMsg);
  }

  // Show or hide the message
  noResultMsg.style.display = anyVisible ? "none" : "block";
});



  // Category filter buttons
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.category;
      displayRecipes(cat);
      filterButtons.forEach(b => b.classList.remove("active"));

    // Highlight selected button
    btn.classList.add("active");
    });
  });

  // Category link in navigation
  if (categoryLink) {
    categoryLink.addEventListener("click", (e) => {
      e.preventDefault();
      displayRecipes("All");
    });
  }

  // Home link in navigation
  if (homeLink) {
    homeLink.addEventListener("click", (e) => {
      e.preventDefault();
      initPage();
    });
  }

  // Daily quote
  const quotes = [
    "A pinch of patience can spice up any dish.",  
    "The kitchen is where creativity meets appetite.", 
     "Cooking is love made visible.",
    "A recipe has no soul. You must bring soul to the recipe.",
    "Good food equals good mood.", 
    "Stirring up happiness, one meal at a time.",  
    "Bake the world a better place.",  
    "Hungry? Good. Let’s cook.",  
    "A well-seasoned pan is a chef’s best friend.",  
     "Life is short. Eat first, worry later.",
    "Doubt is bitter. Dessert is sweet.",  
    "Simmer down and let the flavors dance.",  
    "No bad days, just bad recipes.",  
    "A little butter makes everything better.",  
    "Taste the rainbow (of spices).",  
    "When in doubt, add garlic.",  
    "Cooking is science with delicious results.",  
    "The secret ingredient is always hunger.",  
    "Turn up the heat, not the stress.",  
    "Good food, good mood, no attitude.",  
    "Whisk, taste, repeat.",  
    "A messy kitchen means a happy chef.",  
    "Spice it up or keep it mild – your kitchen, your rules.",  
    "Eat well, cook often, smile always."  
];

  const dayIndex = new Date().getDate() % quotes.length;
  const quoteElement = document.getElementById("daily-quote");
  if (quoteElement) {
    quoteElement.textContent = quotes[dayIndex];
  }
});
// Facts & Hacks functionality
let currentFHType = "facts";
function loadFactsHacks(type) {
  const container = document.getElementById("facts-hacks-content");
  container.innerHTML = "";

  const data = (type === "facts") ? factsData : hacksData;

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "fh-card";
    card.innerHTML = `
      <img class="fh-card-image" src="${item.image}" alt="Fact/Hack Image">
      <p class="fh-card-text">${item.text}</p>
    `;
    container.appendChild(card);
  });
}

// Initialize when facts/hacks section is shown
document.addEventListener("DOMContentLoaded", () => {
  // Add toggle switch listener
  document.getElementById("fh-toggle")?.addEventListener("change", (e) => {
    const isHacks = e.target.checked;
    currentFHType = isHacks ? "hacks" : "facts";

    document.getElementById("fh-label-left")?.classList.toggle("active", !isHacks);
    document.getElementById("fh-label-right")?.classList.toggle("active", isHacks);

    loadFactsHacks(currentFHType);
  });

  // Load initial facts
  loadFactsHacks("facts");
});
// highlight active nav link
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // remove 'active' from all
    navLinks.forEach(l => l.classList.remove("active"));
    // add 'active' to the clicked one
    link.classList.add("active");
  });
});
