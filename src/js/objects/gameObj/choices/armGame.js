import H from '../../../utils/helpers';

export default class ArmGame extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;
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
    //   this.scene.player.playerMove();
      console.log('USUARIO: '+stringOption[userChoise]);
      console.log('MAQUINA: '+stringOption[machineChoise]);
      if(userChoise == 0){
        if(options[machineChoise] == 1){
            this.scene.text.hide();
            this.scene.text.setText('LOST', '140px');
            this.scene.text.show();
            setTimeout(() => {
                this.scene.choices.showPortraits();
                this.resetGame();
            }, 1200);
        }else{
            if(options[machineChoise] == 2){
                this.scene.text.hide();
                this.scene.text.setText('WIN', '140px');
                this.scene.text.show();
                setTimeout(() => {
                    this.scene.choices.defeatedBoss('hand');
                    this.scene.choices.showParts();
                    this.resetGame();
                }, 1200);
            }else{
                if(options[machineChoise] == 0){
                    this.scene.text.hide();
                    this.scene.text.setText('DRAW', '140px');
                    this.scene.text.show();
                    setTimeout(() => {
                        this.scene.choices.showPortraits();
                        this.resetGame();
                    }, 1200);
                }
            }
        } 
      }
      if(userChoise == 1){
        if(options[machineChoise] == 2){
            this.scene.text.hide();
            this.scene.text.setText('LOST', '140px');
            this.scene.text.show();
            setTimeout(() => {
                this.scene.choices.showPortraits();
                this.resetGame();
            }, 1200);
        }else{
            if(options[machineChoise] == 0){
                this.scene.text.hide();
                this.scene.text.setText('WIN', '140px');
                this.scene.text.show();
                setTimeout(() => {
                    this.scene.choices.defeatedBoss('hand');
                    this.scene.choices.showParts();
                    this.resetGame();
                }, 1200);
            }else{
                if(options[machineChoise] == 1){
                    this.scene.text.hide();
                    this.scene.text.setText('DRAW', '140px');
                    this.scene.text.show();
                    setTimeout(() => {
                        this.scene.choices.showPortraits();
                        this.resetGame();
                    }, 1200);
                }
            }
        }
      }
      
      if(userChoise == 2) {
          if(options[machineChoise] == 1){
               this.scene.text.hide();
               this.scene.text.setText('WIN', '140px');
               this.scene.text.show();
               setTimeout(() => {
                this.scene.choices.defeatedBoss('hand');
                this.scene.choices.showParts();
                this.resetGame();
               }, 1200);
          }else{
              if(options[machineChoise] == 0){
                this.scene.text.hide();
                this.scene.text.setText('LOST', '140px');
                this.scene.text.show();
                setTimeout(() => {
                    this.scene.choices.showPortraits();
                    this.resetGame();
                }, 1200);
              }else{
                  if(options[machineChoise] == 2) {
                    this.scene.text.hide();
                    this.scene.text.setText('DRAW', '140px');
                    this.scene.text.show();
                    setTimeout(() => {
                        this.scene.choices.showPortraits();
                        this.resetGame();
                    }, 1200);
                  }
              }
          }
      }
      this.scene.timer.abort();
    }

    resetGame(){
        this.scene.monster.monkey.visible = false;
        this.scene.monster.monkey_hand.visible = false;
        this.scene.monster.monkey_papel.visible = false;
        this.scene.monster.monkey_tijera.visible = false;
        this.scene.player.papel.visible = false;
        this.scene.player.tijeras.visible = false;
    }

    update() {
    }
}
