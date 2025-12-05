import Pasta from "../models/pasta.js";
import PastaView from "../views/pastaView.js";

const PastaController = {
    list() {
        const mainContent = document.querySelector(`#main-content`);
        mainContent.innerHTML = `
            <div class="text-center py-5">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3 text-muted">Loading pastas...</p>
            </div>
        `;
        
        Pasta.getAll()
            .then((pastas) => {
                mainContent.innerHTML = PastaView.renderList(pastas);
            })
            .catch((error) => {
                console.error("Error in PastaController.list:", error);
                mainContent.innerHTML = PastaView.renderError("Failed to load pastas. Please try again later.");
            });
    },

    listSortedByPrice(order = 'asc') {
        // TODO: Implement listSortedByPrice
    },

    async getSortedPastas(order = 'asc') {
        const pastas = await Pasta.getAll();
        return Pasta.sortByPrice(pastas, order);
    },

    async getMostExpensivePasta() {
        // TODO: Implement getMostExpensivePasta
        return null;
    },

    calculatePriceRange(pastas) {
        if (!pastas || pastas.length === 0) {
            return { min: 0, max: 0 };
        }
        const prices = pastas.map(p => p.price);
        return {
            min: Math.min(...prices),
            max: Math.max(...prices)
        };
    }
};

export default PastaController;
