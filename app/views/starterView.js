const StarterView = {
    renderList(starters) {
        const stats = this.calculateStats(starters);
        
        let html = `
            <div class="header-section mb-4">
                <h2 class="display-4">🥗 Our Starters</h2>
                <p class="lead">Delicious appetizers to begin your meal</p>
            </div>
            <div class="row mb-4">
                <div class="col-md-4">
                    <div class="card text-center">
                        <div class="card-body">
                            <h3 class="text-primary">${starters.length}</h3>
                            <p class="text-muted mb-0">Total Starters</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-center">
                        <div class="card-body">
                            <h3 class="text-success">$${(stats.avgPrice / 100).toFixed(2)}</h3>
                            <p class="text-muted mb-0">Average Price</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-center">
                        <div class="card-body">
                            <h3 class="text-info">${stats.cheapest.name}</h3>
                            <p class="text-muted mb-0">Best Value ($${(stats.cheapest.price / 100).toFixed(2)})</p>
                        </div>
                    </div>
                </div>
            </div>
            <table class="table table-hover table-striped">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        starters.forEach((starter, index) => {
            html += this.renderRow(starter, index + 1);
        });
        
        html += `
                </tbody>
            </table>
        `;
        
        return html;
    },

    renderRow(starter, index) {
        return `
            <tr>
                <th scope="row">${index}</th>
                <td>${starter.name}</td>
                <td>$${(starter.price / 100).toFixed(2)}</td>
                <td>${this.renderStars(starter.rating)}</td>
            </tr>
        `;
    },

    renderStars(rating) {
        let stars = '';
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars += '<i class="bi bi-star-fill text-warning"></i>';
            } else {
                stars += '<i class="bi bi-star text-warning"></i>';
            }
        }
        return stars;
    },

    calculateStats(starters) {
        const avgPrice = starters.reduce((sum, s) => sum + s.price, 0) / starters.length;
        const cheapest = starters.reduce((min, s) => s.price < min.price ? s : min);
        return { avgPrice, cheapest };
    },

    renderError(message) {
        return `
            <div class="alert alert-danger" role="alert">
                <h4 class="alert-heading">Error Loading Starters</h4>
                <p>${message}</p>
            </div>
        `;
    }
};

export default StarterView;
