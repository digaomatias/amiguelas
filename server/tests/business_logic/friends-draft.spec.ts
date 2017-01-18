/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
import FriendsDraft from '../../src/business_logic/friends-draft';

describe('friends draft', () => {
    let friendsDraft = new FriendsDraft();
    it('should not accept duplicate ids', () => {
        let ids: number[] = [1, 1, 2, 3];

        expect(function () { friendsDraft.runDraft(ids); }).toThrow('Duplicate items was provided');
    });

    it('should not accept less than three items when run', () => {
        let ids: number[] = [1, 2];
        
        expect(function () { friendsDraft.runDraft(ids); }).toThrow('At least 3 friends are needed for draft');
    });

    it('should return bi-dimensional [n][2] array for an array of length n, ', () => {
        let ids: number[] = [1, 2, 3, 4];
        let result: number[][] = friendsDraft.runDraft(ids);        
        expect(result.length).toBe(4);

        for(let i=0; i < result.length; i++) {
            expect(result[i].length).toBe(2);
        }
    });

    it('should return bi-dimensional array with all friends appearing only once in position 0 and 1', () => {
        let ids: number[] = [1, 2, 3, 4];
        let result: number[][] = friendsDraft.runDraft(ids);        
        
        let pos1: number = result[0][0];
        let pos2: number = result[0][1];
        for(let i=1; i < result.length; i++) {
            expect(result[i][0]).not.toBe(pos1);
            expect(result[i][1]).not.toBe(pos2);
        }
    });

    it('should return bi-dimensional array with all array positions fullfiled by two friends (friend 1 got friend 2)', () => {
        let ids: number[] = [1, 2, 3, 4];
        let result: number[][] = friendsDraft.runDraft(ids);        
        
        for(let i=1; i < result.length; i++) {
            expect(ids.indexOf(result[i][0])).toBeGreaterThanOrEqual(0);
            expect(ids.indexOf(result[i][1])).toBeGreaterThanOrEqual(0);
        }
    });

    it('should not repeat results all the time', () => {
        //Chances of repeating are very very low...
        let ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        
        let result1 = friendsDraft.runDraft(ids);
        let result2 = friendsDraft.runDraft(ids);

        let isRepeating: boolean = true;
        for(let i = 0; i < result1.length; i++) {
            isRepeating = isRepeating && result1[i][0] === result2[i][0] && result1[i][1] === result2[i][1]
        }

        expect(isRepeating).toBeFalsy();
    })
});
