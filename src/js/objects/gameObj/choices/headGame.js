import H from '../../../utils/helpers';

export default class HeadGame extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;
        this.questions = [
            '¿Que ser que camina sobre la tierra lo hace \n  primero a cuatro patas, después a dos y luego,\n cuando se vuelve débil utiliza tres patas?', 
            'Ponerme de lado y seré todo, \n cortarme a la mitad y seré nada \n ¿Que soy?', 
            '¿Qué sigue en esta secuencia de números:\n 1, 11, 21, 1211, 111221, 312211, ...?',
            '¿Qué es aquello que te pertenece, pero \n el resto de personas lo usan más que tu?',
            '¿Cual es el oceano más tranquilo?'
        ];
        this.create();
    }


    create() {
        var machineChoise;
        var options;

        machineChoise = this.getRandom(0,4);
        options = this.getAnswer(machineChoise);
        const playBtn0 = H.makeText(this.scene, 600, 250, this.questions[machineChoise], '30px');


        const playBtn1 = H.makeText(this.scene, 200, 550, options[0], '40px');
        playBtn1.setInteractive();
        playBtn1.on('pointerdown', () => {
          this.playUser(options[0], machineChoise);
        });

        const playBtn2 = H.makeText(this.scene, 600, 550, options[1], '40px');
        playBtn2.setInteractive();
        playBtn2.on('pointerdown', () => {
          this.playUser(options[1], machineChoise);
        });

        const playBtn3 = H.makeText(this.scene, 1000, 550, options[2], '40px');
        playBtn3.setInteractive();
        playBtn3.on('pointerdown', () => {
          this.playUser(options[2], machineChoise);
        });

        const back = this.scene.add.image(60 , 650, "back");
        back.setScale(0.2);
        back.setInteractive();
        back.on('pointerdown', () => {
            this.scene.scene.restart('GameScene');
        });
    }

    getAnswer(question){
        var options;
        if (question == 0){options= ['Canguro', 'Humano', 'Perro'];}
        if (question == 1){options= ['El número 8', 'Media Naranja', 'Un helado'];}
        if (question == 2){options= ['3323322', '13112211', '1'];}
        if (question == 3){options= ['El aire', 'La sanidad', 'Tu nombre'];}
        if (question == 4){options= ['El atlántico', 'El indico', 'El pacífico'];}
        return options;
    }
    getRandom(min, max){
      var num = Math.floor(Math.random() * (max - min +1) + min);
      return num;
    }
  
    playUser(option, question){
      console.log('USUARIO: '+option);
      console.log('MAQUINA: '+this.questions[question]);
      if(question == 0){//la pregunta
        if(option == "Humano"){//la repuesta eleguida
            console.log('WIN!');
        }else{
            console.log('LOST!');
        } 
      }
      if(question == 1){//la pregunta
        if(option == "El número 8"){//la repuesta eleguida
            console.log('WIN!');
        }else{
            console.log('LOST!');
        } 
      }
      if(question == 2){//la pregunta
        if(option == "1"){//la repuesta eleguida
            console.log('WIN!');
        }else{
            console.log('LOST!');
        } 
      }
      if(question == 3){//la pregunta
        if(option == "Tu nombre"){//la repuesta eleguida
            console.log('WIN!');
        }else{
            console.log('LOST!');
        } 
      }
      if(question == 4){//la pregunta
        if(option == "El pacífico"){//la repuesta eleguida
            console.log('WIN!');
        }else{
            console.log('LOST!');
        } 
      }
    }

    update() {
    }
}