import H from '../../../utils/helpers';

export default class ArmGame extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        this.create();
    }

    create() {
        
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
      this.scene.monster.monkeyChoise(machineChoise);
      this.scene.player.playerChoise(userChoise);
      this.scene.player.playerMove();
      console.log('USUARIO: '+stringOption[userChoise]);
      console.log('MAQUINA: '+stringOption[machineChoise]);
      if(userChoise == 0){
        if(options[machineChoise] == 1){
            this.scene.text.hide();
            this.scene.text.setText('LOST', '140px');
            this.scene.text.show();
        }else{
            if(options[machineChoise] == 2){
                this.scene.text.hide();
                this.scene.text.setText('WIN', '140px');
                this.scene.text.show();
            }else{
                if(options[machineChoise] == 0){
                    this.scene.text.hide();
                    this.scene.text.setText('DRAW', '140px');
                    this.scene.text.show();
                }
            }
        } 
      }
      if(userChoise == 1){
        if(options[machineChoise] == 2){
            this.scene.text.hide();
            this.scene.text.setText('LOST', '140px');
            this.scene.text.show();
        }else{
            if(options[machineChoise] == 0){
                this.scene.text.hide();
                this.scene.text.setText('WIN', '140px');
                this.scene.text.show();
            }else{
                if(options[machineChoise] == 1){
                    this.scene.text.hide();
                    this.scene.text.setText('DRAW', '140px');
                    this.scene.text.show();
                }
            }
        }
      }
      
      if(userChoise == 2) {
          if(options[machineChoise] == 1){
               this.scene.text.hide();
               this.scene.text.setText('WIN', '140px');
               this.scene.text.show();
      
          }else{
              if(options[machineChoise] == 0){
                this.scene.text.hide();
                this.scene.text.setText('LOST', '140px');
                this.scene.text.show();
              }else{
                  if(options[machineChoise] == 2) {
                    this.scene.text.hide();
                    this.scene.text.setText('DRAW', '140px');
                    this.scene.text.show();
                  }
              }
          }
      }
    }

    update() {
    }
}
