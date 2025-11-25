import PastaController from "./app/controllers/pastaController.js";
import StarterController from "./app/controllers/starterController.js";
import PizzaController from "./app/controllers/pizzaController.js";
import DessertController from "./app/controllers/dessertController.js";

const handleRoute = () => {
    const hash = window.location.hash.slice(1) || 'home';
    const route = hash.toLowerCase();

    switch(route) {
        case "starters": 
            makeLinkActive(route);
            StarterController.list();
            break;
        case "pizzas": 
            makeLinkActive(route);
            PizzaController.list();
            break;
        case "pastas": 
            makeLinkActive(route);
            PastaController.list();
            break;
        case "desserts": 
            makeLinkActive(route);
            DessertController.list();
            break;
        case "home":
        default:
            makeLinkActive(null);
            showWelcome();
    }
};

window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);

const makeLinkActive = (activeLink) => {
    const routes = ["starters", "pizzas", "pastas", "desserts"];
    routes.forEach((route) => {
        const link = document.querySelector(`#${route}-link`);
        if (!link) return;
        
        if (route === activeLink) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
};

const showWelcome = () => {
    const mainContent = document.querySelector(`#main-content`);
    mainContent.innerHTML = `
        <div class="text-center py-5">
            <h1 class="display-1">🍽️</h1>
            <h2 class="display-4 mb-4">Welcome to MVC Delights</h2>
            <p class="lead mb-4">Your journey into MVC architecture and Test-Driven Development</p>
            <div class="row g-4 mt-4">
                <div class="col-md-3">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <h3>🥗</h3>
                            <h5 class="card-title">Starters</h5>
                            <p class="card-text">Delicious appetizers to begin your meal</p>
                            <a href="#starters" class="btn btn-primary">View Menu</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <h3>🍕</h3>
                            <h5 class="card-title">Pizzas</h5>
                            <p class="card-text">Authentic Italian pizzas</p>
                            <a href="#pizzas" class="btn btn-primary">View Menu</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <h3>🍝</h3>
                            <h5 class="card-title">Pastas</h5>
                            <p class="card-text">Fresh pasta dishes</p>
                            <a href="#pastas" class="btn btn-primary">View Menu</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card h-100">
                        <div class="card-body text-center">
                            <h3>🍰</h3>
                            <h5 class="card-title">Desserts</h5>
                            <p class="card-text">Sweet endings to your meal</p>
                            <a href="#desserts" class="btn btn-primary">View Menu</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};
