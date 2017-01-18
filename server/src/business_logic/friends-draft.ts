require('../common/tsarray');

export default class FriendsDraft {
    public runDraft(friendsId: number[]): number[][] {
        this.guard(friendsId);

        let draftedFriends: number[][] = new Array().matrix(friendsId.length, 2, -1);

        //Secrets gets friends (position 0 and 1 respectively)
        let secrets: number[] = friendsId.map(v => v);
        let friends: number[] = friendsId.map(v => v);
        
        for(let i = 0; i < friendsId.length; i++) {
            let secret = this.random(secrets.length);
            secret = secrets.splice(secrets.indexOf(secret), 1)[0];

            draftedFriends[i][0] = secret;

            let friend = this.random(friends.length);
            friend = friends.splice(friends.indexOf(friend), 1)[0];

            draftedFriends[i][1] = friend;
        }

        return draftedFriends;
    }    

    private guard(friendsId: number[]) {
        if(friendsId.hasDuplicates()) {
            throw "Duplicate items was provided";
        }

        if(friendsId.length < 3) {
            throw "At least 3 friends are needed for draft";
        }
    }

    private random(max: number): number {
        return Math.floor((Math.random() * max));
    }
}

