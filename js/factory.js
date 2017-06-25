import {Soldier, Tank, Jet} from './items';
import {Util} from './util';
let tempArray = [];
// Factory to instanciate the class dynamically
export class Factory{
      constructor(){
      }
      
      static createObj(_type, _life, _firePower){
            try {
                  let instance = new Factory.classes[_type](_type, _life, _firePower);
                  tempArray.push(instance); // push items for the array
            
                  let print = Inventory.display(instance);
                  let count = Util.sum(tempArray, _type); // send to the util class
                  let total = Inventory.displaySum(count); // display the total
                  return instance;
            } catch (error) {
                  throw 'this is not a valid class';
            }
            
      }

      static setClasses(){
            //clas that are avaliable
            Factory.classes = {
                 Soldier,
                 Tank,
                 Jet
            }; 
      }
}

export class Inventory{
      constructor(){

      }
      // print inventory
      static display(_template){
            let template = `
                  <ul>
                        <li><span>Life: </span>${_template.life}</li>
                        <li><span>Power: </span>${_template.power}</li>
                        <li><span> Type: </span>${_template.type}</li>
                  </ul>
                  <hr>
            `
            document.getElementById('playerList').insertAdjacentHTML('afterbegin', template);
            Inventory.displaySum();
      }
      // display the total of items
      static displaySum(_count){
            console.log(_count);
            document.getElementById('dResult').innerHTML = '';
            let template = `
                  <li><span>Total Items: ${_count}</span></li>
                  <hr>
            `
            document.getElementById('dResult').insertAdjacentHTML('afterbegin', template);
      }
}