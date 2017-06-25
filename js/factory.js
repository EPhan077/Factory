import {Soldier, Tank} from './items';

// Factory to instanciate the class dynamically
export class Factory{
      constructor(){
      }
      
      static createObj(_obj){
            try {
                  let instance = new Factory.classes[_obj]();
                  console.log('instance: ', instance);
                  
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




class Inventory{
      constructor(){
      }

      list(_player){

      }

      display(){
            
      }
}