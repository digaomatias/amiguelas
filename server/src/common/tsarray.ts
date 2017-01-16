/// <reference path="./tsarray.d.ts" />

(function () {    
    if (!Array.prototype.hasDuplicates) {
        Array.prototype.hasDuplicates = function () {
            let self = (<Array<any>>this);
            if(self.length <= 1)
                return false; 
            
            for(let i = 0; i < self.length; i++) {
                let equalItems = self.filter(item => item === self[i]);
                if(equalItems.length > 1)
                    return true;
            }

            return false;
        }
    }
})();