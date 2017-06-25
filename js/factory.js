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
                  tempArray.push(instance);
            
                  let print = Inventory.display(instance);
                  let count = Util.sum(tempArray, _type);
                  let total = Inventory.displaySum(count);
                  return instance;
            } catch (error) {
                  throw 'this is not a valid class';
            }
            
      }

      static setClasses(){
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

      list(_player){

      }

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

      static displaySum(_count){
            document.getElementById('dResult').innerHTML = '';
            let template = `
                  <li><span>Total Soldiers: ${_count}</span></li>
                  <li><span>Total Tanks:</span> ${_count}</li>
                  <li><span>Total Jets:</span> ${_count}</li>
                  <hr>
            `
            document.getElementById('dResult').insertAdjacentHTML('afterbegin', template);
      }
}