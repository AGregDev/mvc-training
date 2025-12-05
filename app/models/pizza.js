const Pizza = {
    getAll() {
        return new Promise((resolve, reject) => {
            fetch("../../db/pizzas.json")
                .then((response) => {
                    if (response.status !== 200) {
                        reject(new Error("Failed to fetch pizzas"));
                        return;
                    }
                    return response.json();
                })
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    },

    filterByRating(pizzas, minRating) {
        return pizzas.filter(pizza => pizza.rating >= minRating);
    },

    calculateAveragePrice(pizzas) {
        if (!pizzas || pizzas.length === 0) return 0;
        const total = pizzas.reduce((sum, pizza) => sum + pizza.price, 0);
        return total / pizzas.length;
    },

    getHighestRated(pizzas) {
        if (!pizzas || pizzas.length === 0) return null;
        return pizzas.reduce((max, pizza) => 
            pizza.rating > max.rating ? pizza : max
        );
    },

    calculateStats(pizzas) {
        if (!pizzas || pizzas.length === 0) {
            return { avgPrice: 0, topRated: null };
        }
        
        const avgPrice = this.calculateAveragePrice(pizzas);
        const topRated = this.getHighestRated(pizzas);
        
        return { avgPrice, topRated };
    }
};

export default Pizza;
