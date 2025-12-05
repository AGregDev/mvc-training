import Starter from "../models/starter.js";
import StarterView from "../views/starterView.js";

const StarterController = {
    list() {
        const mainContent = document.querySelector(`#main-content`);
        mainContent.innerHTML = `
            <div class="text-center py-5">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3 text-muted">Loading starters...</p>
            </div>
        `;
        
        Starter.getAll()
            .then((starters) => {
                mainContent.innerHTML = StarterView.renderList(starters);
            })
            .catch((error) => {
                console.error("Error in StarterController.list:", error);
                mainContent.innerHTML = StarterView.renderError("Failed to load starters. Please try again later.");
            });
    }
};

export default StarterController;
