const Dessert = {
    getAll() {
        return new Promise((resolve, reject) => {
            fetch("../../db/desserts.json")
                .then((response) => {
                    if (response.status !== 200) {
                        reject(new Error("Failed to fetch desserts"));
                        return;
                    }
                    return response.json();
                })
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    },

    filterByType(desserts, type) {
        // TODO: Implement filterByType
        // This is used in the view to group desserts by type (cake, ice-cream, etc.)
        // Should return array of desserts matching the type
        return [];
    },

    groupByType(desserts) {
        // TODO: Implement groupByType
        // This is used in the view to display desserts in sections by type
        // Should return object like: { "cake": [...], "ice-cream": [...], "pudding": [...] }
        return {};
    }
};

export default Dessert;
