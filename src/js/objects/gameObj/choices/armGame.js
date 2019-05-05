import H from '../../../utils/helpers';

export default class ArmGame extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        this.create();
    }

    create() {
        const boton_piedra = this.scene.add.image(250 , 550, "boton_piedra");
        boton_piedra.setScale(0.4);
        boton_piedra.setInteractive();
        boton_piedra.on('pointerdown', () => {
          this.playUser(0);
        });

        const boton_papel = this.scene.add.image(650 , 550, "boton_papel");
        boton_papel.setScale(0.4);
        boton_papel.setInteractive();
        boton_papel.on('pointerdown', () => {
          this.playUser(1);
        });
        const boton_tijera = this.scene.add.image(1100 , 550, "boton_tijera");
        boton_tijera.setScale(0.4);
        boton_tijera.setInteractive();
        boton_tijera.on('pointerdown', () => {
          this.playUser(2);
        });

        const back = this.scene.add.image(60 , 650, "back");
        back.setScale(0.2);
        back.setInteractive();
        back.on('pointerdown', () => {
            this.scene.scene.restart('GameScene');
        });
    }

    getRandom(min, max){
      var num = Math.floor(Math.random() * (max - min +1) + min);
      return num;
    }
  
    playUser(userChoise){
      var options = [0, 1, 2];
      var machineChoise;
      var stringOption = ['Piedra', 'Papel', 'Tijera'];
      userChoise = parseInt(userChoise);
      machineChoise = this.getRandom(0,2);
      console.log('USUARIO: '+stringOption[userChoise]);
      console.log('MAQUINA: '+stringOption[machineChoise]);
      if(userChoise == 0){//el usuario eligio piedra 
        if(options[machineChoise] == 1){//si la maquina eligio papel 
            console.log('LOST!');
        }else{
            if(options[machineChoise] == 2){
                console.log('WIN!');
            }else{
                if(options[machineChoise] == 0){
                    console.log('DRAW!');
                }
            }
        } 
      }
      if(userChoise == 1){//el usuario eligio papel 
        if(options[machineChoise] == 2){
            console.log('LOST!');
        }else{
            if(options[machineChoise] == 0){
                console.log('WIN!');
    
            }else{
                if(options[machineChoise] == 1){
                    console.log('DRAW!');
                }
            }
        }
      }
      
      if(userChoise == 2) {//el usuario eligio tijera 
          if(options[machineChoise] == 1){
              console.log('WIN!');
      
          }else{
              if(options[machineChoise] == 0){
                  console.log('LOST!');
              }else{
                  if(options[machineChoise] == 2) {
                      console.log('DRAW!');
                  }
              }
          }
      }
    }

    update() {
    }
}
