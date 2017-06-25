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

// when the page is ready
window.addEventListener('load', ()=>{

      let main = Main.getInstance();


      // listen to the form
      document.getElementById('create').addEventListener('submit', (e)=> {
            e.preventDefault();
            // form fields
            let life = document.getElementById('life').value;
            let firePower = document.getElementById('firePower').value;
            let selectOption = document.getElementById('type');
            let createType = selectOption.options[selectOption.selectedIndex].value;


            console.log('which one?', createType);
            let create = Factory.createObj(createType, life, firePower);
      });

});








