import { describe, test, expect } from '@jest/globals';
import Pasta from '../../app/models/pasta.js';

describe('Pasta Model', () => {
    const mockPastas = [
        { name: "Carbonara", price: 180, rating: 5 },
        { name: "Bolognese", price: 160, rating: 4 },
        { name: "Aglio e Olio", price: 140, rating: 4 },
        { name: "Truffle Pasta", price: 250, rating: 5 }
    ];

    describe('getMostExpensive', () => {
        test('should return the most expensive pasta', () => {
            const result = Pasta.getMostExpensive(mockPastas);
            expect(result).toBeDefined();
            expect(result.name).toBe("Truffle Pasta");
            expect(result.price).toBe(250);
        });

        test('should return null for empty array', () => {
            const result = Pasta.getMostExpensive([]);
            expect(result).toBeNull();
        });
    });

    describe('calculateStats', () => {
        test('should calculate stats correctly', () => {
            const result = Pasta.calculateStats(mockPastas);
            expect(result.avgPrice).toBeCloseTo(182.5, 1);
            expect(result.totalCount).toBe(4);
            expect(result.mostExpensive.name).toBe("Truffle Pasta");
        });

        test('should handle empty array', () => {
            const result = Pasta.calculateStats([]);
            expect(result.avgPrice).toBe(0);
            expect(result.totalCount).toBe(0);
            expect(result.mostExpensive).toBeNull();
        });

        // TODO: Write a test to verify that calculateStats uses your getMostExpensive method
        // Hint: The mostExpensive in stats should be the same as calling getMostExpensive directly
    });
});
