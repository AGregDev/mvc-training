const PastaView = {
    renderList(pastas) {
        // TODO: The stats cards at the top are broken!
        // Fix calculateStats() in the model to make them work
        const stats = { avgPrice: 0, totalCount: pastas.length, mostExpensive: null };
        
        let html = `
            <div class="header-section mb-4">
                <h2 class="display-4">🍝 Our Pastas</h2>
                <p class="lead">Fresh pasta dishes from traditional recipes</p>
            </div>
            <div class="alert alert-warning mb-4">
                <strong>⚠️ TODO:</strong> Complete <code>calculateStats()</code> in <code>pasta.js</code> to show statistics cards
            </div>
            <div class="row mb-4">
                <div class="col-md-4">
                    <div class="card text-center">
                        <div class="card-body">
                            <h3 class="text-primary">${stats.totalCount}</h3>
                            <p class="text-muted mb-0">Total Pastas</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-center ${stats.avgPrice > 0 ? '' : 'bg-light'}">
                        <div class="card-body">
                            <h3 class="${stats.avgPrice > 0 ? 'text-success' : 'text-muted'}">
                                ${stats.avgPrice > 0 ? '$' + (stats.avgPrice / 100).toFixed(2) : '???'}
                            </h3>
                            <p class="text-muted mb-0">Average Price</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card text-center ${stats.mostExpensive ? '' : 'bg-light'}">
                        <div class="card-body">
                            <h3 class="${stats.mostExpensive ? 'text-warning' : 'text-muted'}">
                                ${stats.mostExpensive ? stats.mostExpensive.name : '???'}
                            </h3>
                            <p class="text-muted mb-0">Premium Pasta</p>
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
        
        pastas.forEach((pasta, index) => {
            html += this.renderRow(pasta, index + 1);
        });
        
        html += `
                </tbody>
            </table>
        `;
        
        return html;
    },

    renderRow(pasta, index) {
        return `
            <tr>
                <th scope="row">${index}</th>
                <td>${pasta.name}</td>
                <td>$${(pasta.price / 100).toFixed(2)}</td>
                <td>${this.renderStars(pasta.rating)}</td>
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
                <h4 class="alert-heading">Error Loading Pastas</h4>
                <p>${message}</p>
            </div>
        `;
    }
};

export default PastaView;
