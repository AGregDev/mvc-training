import { describe, test, expect } from '@jest/globals';
import Starter from '../../app/models/starter.js';

describe('Starter Model', () => {
    const mockStarters = [
        { name: "Bruschetta", price: 80, rating: 4 },
        { name: "Caprese Salad", price: 90, rating: 5 },
        { name: "Garlic Bread", price: 60, rating: 3 },
        { name: "Mozzarella Sticks", price: 85, rating: 4 },
        { name: "Caesar Salad", price: 95, rating: 5 }
    ];

    describe('filterByPriceRange', () => {
        test('should filter starters in price range 70-90', () => {
            const result = Starter.filterByPriceRange(mockStarters, 70, 90);
            expect(result).toHaveLength(3);
            expect(result.every(s => s.price >= 70 && s.price <= 90)).toBe(true);
        });

        test('should return empty array when no starters in range', () => {
            const result = Starter.filterByPriceRange(mockStarters, 200, 300);
            expect(result).toHaveLength(0);
        });
    });

    describe('getCheapest', () => {
        test('should return the cheapest starter', () => {
            const result = Starter.getCheapest(mockStarters);
            expect(result.name).toBe("Garlic Bread");
            expect(result.price).toBe(60);
        });

        test('should return null for empty array', () => {
            const result = Starter.getCheapest([]);
            expect(result).toBeNull();
        });
    });

    describe('calculateStats', () => {
        test('should calculate stats correctly', () => {
            const result = Starter.calculateStats(mockStarters);
            expect(result.avgPrice).toBeCloseTo(82, 0);
            expect(result.totalCount).toBe(5);
            expect(result.cheapest.name).toBe("Garlic Bread");
        });

        test('should handle empty array', () => {
            const result = Starter.calculateStats([]);
            expect(result.avgPrice).toBe(0);
            expect(result.totalCount).toBe(0);
            expect(result.cheapest).toBeNull();
        });

        // TODO: Write a test for when there's only one starter in the array
        // Hint: That starter should be both the cheapest and the most expensive
    });
});
