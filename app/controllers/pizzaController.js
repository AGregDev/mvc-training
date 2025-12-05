import Pizza from "../models/pizza.js";
import PizzaView from "../views/pizzaView.js";

const PizzaController = {
    list() {
        const mainContent = document.querySelector(`#main-content`);
        mainContent.innerHTML = `
            <div class="text-center py-5">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3 text-muted">Loading pizzas...</p>
            </div>
        `;
        
        Pizza.getAll()
            .then((pizzas) => {
                const stats = Pizza.calculateStats(pizzas);
                mainContent.innerHTML = PizzaView.renderList(pizzas, stats);
            })
            .catch((error) => {
                console.error("Error in PizzaController.list:", error);
                mainContent.innerHTML = PizzaView.renderError("Failed to load pizzas. Please try again later.");
            });
    }
};

export default PizzaController;
