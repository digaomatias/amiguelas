/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
import FriendsDraft from '../../src/business_logic/friends-draft';

describe('friends draft', () => {
    let friendsDraft = new FriendsDraft();
    it('should not accept duplicate ids', () => {
        let ids: number[] = [1, 1, 2, 3];

        expect(function () { friendsDraft.runDraft(ids); }).toThrowError('Duplicate items was provided');
    });

    it('should not accept less than three items when run', () => {
        expect(true).toBe(false);
    });

    it('should return bi-dimensional array of length n for n parameter items, ', () => {
        expect(true).toBe(false);
    });

    it('should return bi-dimensional array with all friends appearing only once in position 0 and 1', () => {
        expect(true).toBe(false);
    });

    it('should return bi-dimensional array with all array positions fullfiled by two friends (friend 1 got friend 2)', () => {
        expect(true).toBe(false);
    });

});
