import Dessert from "../models/dessert.js";
import DessertView from "../views/dessertView.js";

const DessertController = {
    list() {
        const mainContent = document.querySelector(`#main-content`);
        mainContent.innerHTML = `
            <div class="text-center py-5">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3 text-muted">Loading desserts...</p>
            </div>
        `;
        
        Dessert.getAll()
            .then((desserts) => {
                mainContent.innerHTML = DessertView.renderList(desserts);
            })
            .catch((error) => {
                console.error("Error in DessertController.list:", error);
                mainContent.innerHTML = DessertView.renderError("Failed to load desserts. Please try again later.");
            });
    },

    async getDessertsByType(type) {
        // TODO: Implement getDessertsByType
        return [];
    },

    async getSpecialDesserts() {
        // TODO: Implement getSpecialDesserts
        return [];
    },

    groupByType(desserts) {
        // TODO: Implement groupByType
        return {};
    }
};

export default DessertController;
