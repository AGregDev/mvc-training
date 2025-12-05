const DessertView = {
    renderList(desserts) {
        // TODO: Implement groupByType() in dessert.js to make this work
        const grouped = {}; // Should be: Dessert.groupByType(desserts)
        
        let html = `
            <div class="header-section mb-4">
                <h2 class="display-4">🍰 Our Desserts</h2>
                <p class="lead">Sweet endings to your meal</p>
            </div>
            <div class="alert alert-info">
                <h4 class="alert-heading">🚧 Implementation Required</h4>
                <p><strong>TODO:</strong> Complete <code>groupByType()</code> in <code>dessert.js</code> to display desserts by category</p>
                <hr>
                <p class="mb-0">The view needs grouped data like: <code>{ "cake": [...], "ice-cream": [...] }</code></p>
            </div>
        `;
        
        // If groupByType is not implemented, show basic table
        if (Object.keys(grouped).length === 0) {
            html += `
                <div class="text-center py-5">
                    <i class="bi bi-code-slash" style="font-size: 4rem; color: #6c757d;"></i>
                    <p class="text-muted mt-3">Implement groupByType() to see categorized desserts!</p>
                </div>
            `;
        } else {
            // Show desserts grouped by type
            Object.keys(grouped).forEach(type => {
                html += `
                    <h3 class="mt-4 mb-3 text-capitalize">${type}</h3>
                    <div class="row mb-4">
                `;
                grouped[type].forEach(dessert => {
                    html += `
                        <div class="col-md-4 mb-3">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h5 class="card-title">${dessert.name}</h5>
                                    <p class="card-text">
                                        <span class="badge bg-secondary">${dessert.type}</span>
                                    </p>
                                    <p class="card-text">
                                        <strong>$${(dessert.price / 100).toFixed(2)}</strong>
                                        <span class="float-end">${this.renderStars(dessert.rating)}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    `;
                });
                html += `</div>`;
            });
        }
        
        return html;
    },

    renderStars(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars += '<i class="bi bi-star-fill text-warning"></i>';
            } else {
                stars += '<i class="bi bi-star text-warning"></i>';
            }
        }
        return stars;
    },

    renderError(message) {
        return `
            <div class="alert alert-danger" role="alert">
                <h4 class="alert-heading">Error Loading Desserts</h4>
                <p>${message}</p>
            </div>
        `;
    }
};

export default DessertView;
