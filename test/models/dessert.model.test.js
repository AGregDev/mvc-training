import { describe, test, expect } from '@jest/globals';
import Dessert from '../../app/models/dessert.js';

describe('Dessert Model', () => {
    const mockDesserts = [
        { name: "Tiramisu", price: 85, rating: 5, type: "cake" },
        { name: "Chocolate Lava", price: 95, rating: 4.5, type: "cake" },
        { name: "Gelato", price: 65, rating: 4, type: "ice-cream" },
        { name: "Panna Cotta", price: 75, rating: 4.8, type: "pudding" }
    ];

    describe('filterByType', () => {
        test('should filter desserts by type "cake"', () => {
            const result = Dessert.filterByType(mockDesserts, "cake");
            expect(result).toHaveLength(2);
            expect(result.every(d => d.type === "cake")).toBe(true);
        });

        test('should return empty array for non-existent type', () => {
            const result = Dessert.filterByType(mockDesserts, "cookie");
            expect(result).toHaveLength(0);
        });
    });

    describe('groupByType', () => {
        test('should group desserts by type', () => {
            const result = Dessert.groupByType(mockDesserts);
            expect(result).toHaveProperty('cake');
            expect(result).toHaveProperty('ice-cream');
            expect(result).toHaveProperty('pudding');
            expect(result.cake).toHaveLength(2);
            expect(result['ice-cream']).toHaveLength(1);
        });

        test('should return empty object for empty array', () => {
            const result = Dessert.groupByType([]);
            expect(result).toEqual({});
        });

        // TODO: Write a test to verify all desserts are included in the grouped result
        // Hint: Sum the lengths of all groups and compare to the original array length
    });
});
