import { max_number } from './index.js';

describe('max number', () => {
    it('returns 0', () => {
        expect(max_number([])).toEqual(0);
    });
    
    it('return max number', () => {
        expect(max_number([1, 2, 3])).toEqual(3);
    });

});