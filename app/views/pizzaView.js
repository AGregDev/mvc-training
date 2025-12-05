const PizzaView = {
    renderList(pizzas, stats) {
        
        let html = `
            <div class="header-section mb-4">
                <h2 class="display-4">🍕 Our Pizzas</h2>
                <p class="lead">Authentic Italian pizzas made with love</p>
            </div>
            <div class="row mb-4">
                <div class="col-md-4">
                    <div class="card text-center">
                        <div class="card-body">
                            <h3 class="text-primary">${pizzas.length}</h3>
                            <p class="text-muted mb-0">Total Pizzas</p>
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
                            <h3 class="text-warning">${stats.topRated.name}</h3>
                            <p class="text-muted mb-0">Top Rated (${stats.topRated.rating} ⭐)</p>
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
        
        pizzas.forEach((pizza, index) => {
            html += this.renderRow(pizza, index + 1);
        });
        
        html += `
                </tbody>
            </table>
        `;
        
        return html;
    },

    renderRow(pizza, index) {
        return `
            <tr>
                <th scope="row">${index}</th>
                <td>${pizza.name}</td>
                <td>$${(pizza.price / 100).toFixed(2)}</td>
                <td>${this.renderStars(pizza.rating)}</td>
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

    renderError(message) {
        return `
            <div class="alert alert-danger" role="alert">
                <h4 class="alert-heading">Oops!</h4>
                <p>${message}</p>
            </div>
        `;
    }
};

export default PizzaView;
