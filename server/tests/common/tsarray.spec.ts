///<reference path="../../node_modules/@types/jasmine/index.d.ts" />
require('../../src/common/tsarray');

describe('array hasDuplicates', () => {
    var items: Array<number>;

    items = [1];
    
    it('should return false when array length is less or equal to one', () => {
        expect(items.hasDuplicates()).toBe(false);

        items = [];
        expect(items.hasDuplicates()).toBe(false);            
    });        

    it('should return true when array has duplicate entries', () => {
        items = [1, 1, 2];
        expect(items.hasDuplicates()).toBe(true);            
    });

    it('should return false when array has no duplicate entries', () => {
        items = [1, 3, 2];
        expect(items.hasDuplicates()).toBe(false);            
    });    
});