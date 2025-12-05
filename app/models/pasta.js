const Pasta = {
    getAll() {
        return new Promise((resolve, reject) => {
            fetch("../../db/pastas.json")
                .then((response) => {
                    if (!response.ok) {
                        reject(new Error("Failed to fetch pastas"));
                        return;
                    }
                    return response.json();
                })
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    },

    getMostExpensive(pastas) {
        // TODO: Implement getMostExpensive
        // This is used in the view to show the premium pasta card
        // Should return the pasta with the highest price
        // Return null if array is empty
        return null;
    },

    calculateStats(pastas) {
        // TODO: Implement calculateStats
        // This is used in the view to show statistics cards
        // Should return { avgPrice: number, totalCount: number, mostExpensive: object }
        // The view needs this to display the info cards at the top
        return {
            avgPrice: 0,
            totalCount: 0,
            mostExpensive: null
        };
    }
};

export default Pasta;
