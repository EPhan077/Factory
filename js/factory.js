import {Soldier, Tank} from './items';

// Factory to instanciate the class dynamically
export class Factory{
      constructor(){
      }
      
      static createObj(_type, _life, _firePower){
            try {
                  let instance = new Factory.classes[_type](_type, _life, _firePower);
                  let print = Inventory.display(instance);
                  // console.log(instance);
                  
                  return instance;
            } catch (error) {
                  throw 'this is not a valid class';
            }
            
      }

      static setClasses(){
            Factory.classes = {
                 Soldier,
                 Tank
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
      }

      static displaySum(_template){
            let template = `
                  <ul>
                        <li><span>Life: </span>${_template.life}</li>
                        <li><span>Power: </span>${_template.power}</li>
                        <li><span> Type: </span>${_template.type}</li>
                  </ul>
                  <hr>
            `
            document.getElementById('playerList').insertAdjacentHTML('afterbegin', template);
      }
}