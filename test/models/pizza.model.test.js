import { describe, test, expect } from '@jest/globals';
import Pizza from '../../app/models/pizza.js';

describe('Pizza Model', () => {
    const mockPizzas = [
        { name: "Margherita", price: 150, rating: 4 },
        { name: "Pepperoni", price: 200, rating: 5 },
        { name: "Veggie Supreme", price: 180, rating: 3 },
        { name: "Hawaiian", price: 190, rating: 4 }
    ];

    describe('filterByRating', () => {
        test('should filter pizzas with rating >= 4', () => {
            const result = Pizza.filterByRating(mockPizzas, 4);
            expect(result).toHaveLength(3);
            expect(result.every(p => p.rating >= 4)).toBe(true);
        });

        test('should return empty array when no pizzas match', () => {
            const result = Pizza.filterByRating(mockPizzas, 6);
            expect(result).toHaveLength(0);
        });
    });

    describe('calculateAveragePrice', () => {
        test('should calculate average price correctly', () => {
            const result = Pizza.calculateAveragePrice(mockPizzas);
            expect(result).toBe(180);
        });

        test('should return 0 for empty array', () => {
            const result = Pizza.calculateAveragePrice([]);
            expect(result).toBe(0);
        });
    });

    describe('getHighestRated', () => {
        test('should return the highest rated pizza', () => {
            const result = Pizza.getHighestRated(mockPizzas);
            expect(result.name).toBe("Pepperoni");
            expect(result.rating).toBe(5);
        });

        test('should return null for empty array', () => {
            const result = Pizza.getHighestRated([]);
            expect(result).toBeNull();
        });

        // TODO: Write a test for when multiple pizzas have the same highest rating
        // Hint: Should return the first one found
    });
});
