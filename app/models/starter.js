const Starter = {
    getAll() {
        return new Promise((resolve, reject) => {
            fetch("../../db/starters.json")
                .then((response) => {
                    if (response.status !== 200) {
                        reject(new Error("Failed to fetch starters"));
                        return;
                    }
                    return response.json();
                })
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    },

    filterByPriceRange(starters, minPrice, maxPrice) {
        return starters.filter(
            starter => starter.price >= minPrice && starter.price <= maxPrice
        );
    },

    getCheapest(starters) {
        if (!starters || starters.length === 0) return null;
        return starters.reduce((min, starter) => 
            starter.price < min.price ? starter : min
        );
    },

    calculateAveragePrice(starters) {
        if (!starters || starters.length === 0) return 0;
        return starters.reduce((sum, s) => sum + s.price, 0) / starters.length;
    },

    calculateStats(starters) {
        if (!starters || starters.length === 0) {
            return { avgPrice: 0, totalCount: 0, cheapest: null };
        }
        
        const avgPrice = this.calculateAveragePrice(starters);
        const cheapest = this.getCheapest(starters);
        
        return {
            avgPrice,
            totalCount: starters.length,
            cheapest
        };
    }
};

export default Starter;
