import {Soldier, Tank} from './items';

// Factory to instanciate the class dynamically
export class Factory{
      constructor(){
      }
      
      static createObj(_obj){
            return new Factory.classes[_obj]();
      }

      static setClasses(){
             Factory.classes = {
                  Soldier,
                  Tank
            };
      }
}
