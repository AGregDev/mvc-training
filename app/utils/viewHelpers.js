/**
 * View Helpers - Shared utilities for all views
 * 
 * TODO (ADVANCED CHALLENGE): 
 * This file is a placeholder for the refactoring challenge.
 * 
 * Your task:
 * 1. Move renderStars() logic here (currently duplicated in every view)
 * 2. Add a formatPrice(cents) helper
 * 3. Export these functions
 * 4. Update all views to use these helpers
 * 5. Write tests in test/utils/viewHelpers.test.js
 * 
 * Example usage after refactoring:
 * 
 * import { renderStars, formatPrice } from '../utils/viewHelpers.js';
 * 
 * const html = `
 *   <td>${formatPrice(pizza.price)}</td>
 *   <td>${renderStars(pizza.rating)}</td>
 * `;
 */

// TODO: Implement renderStars(rating)
// TODO: Implement formatPrice(cents)

export const renderStars = (rating) => {
    // Your implementation here
    return '';
};

export const formatPrice = (cents) => {
    // Your implementation here
    return '$0.00';
};

