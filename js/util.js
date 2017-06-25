let totalCount = {};
totalCount[1] = 0;
totalCount[2] = 0;
export class Util{
      constructor(){

      }

      static sum(_n, _type){
            let count = 0;
            for (let i = 0; i < _n.length; i++) {
                  count++;
            }
            
            return count;
      }
}