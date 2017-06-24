import {Factory} from './factory';

class Main{
      constructor(){
            this.factory = Factory.setClasses();
      }
      // Singleton
	static getInstance(){
            if(!Main._instance){
                  Main._instance = new Main();

                  return Main._instance;
            }
            else{
                  throw 'Main was already created';
            }	
	}
      
}


// document.addEventListener
let main = Main.getInstance();
let test100 = Factory.createObj('Soldier');