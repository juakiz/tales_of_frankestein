import H from '../../../utils/helpers';
import Monster from '../monster'

export default class HeadGame extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;
        this.questions = [
            '¿Que ser que camina sobre\nla tierra lo hace primero\na 4 patas, después a 2\ny luego,cuando se vuelve\ndébil utiliza 3 patas?', 
            'Ponerme de lado y seré\ntodo, cortarme a la mitad\ny seré nada  ¿Que soy?', 
            '¿Qué sigue en esta\nsecuencia de números:\n1, 11, 21, 1211,\n111221, 312211, ...?',
            '¿Qué es aquello que\nte pertenece, pero\nel resto  de personas\nlo usan más que tu?',
            '¿Cual es el oceano\nmás tranquilo?'
        ];
        this.create();
    }


    create() {
        var machineChoise;
        var options;
        this.scene.choices.head.show('buttons');
        machineChoise = this.getRandom(0,4);
        options = this.getAnswer(machineChoise);

        this.scene.text.hide();
        this.scene.text.setText(this.questions[machineChoise], '40px');
        this.scene.text.show();
        
        const playBtn1 = H.makeText(this.scene, 640, 455, options[0], '40px');
        playBtn1.setInteractive();
        playBtn1.on('pointerdown', () => {
          this.playUser(options[0], machineChoise);
        });

        const playBtn2 = H.makeText(this.scene, 640, 555, options[1], '40px');
        playBtn2.setInteractive();
        playBtn2.on('pointerdown', () => {
          this.playUser(options[1], machineChoise);
        });

        const playBtn3 = H.makeText(this.scene, 640, 655, options[2], '40px');
        playBtn3.setInteractive();
        playBtn3.on('pointerdown', () => {
          this.playUser(options[2], machineChoise);
        });

        // const back = this.scene.add.image(60 , 650, "back");
        // back.setScale(0.2);
        // back.setInteractive();
        // back.on('pointerdown', () => {
        //     this.scene.scene.restart('GameScene');
        // });
        
        // const esfinje = this.esfinje = this.scene.add.image(0, 0, 'esfinje_1');
        // esfinje.setPosition(1000, 400);
        // // esfinje.setOrigin(1000, 400);
        // this.add(esfinje);
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
            this.scene.text.hide();
            this.scene.text.setText('WIN', '140px');
            this.scene.text.show();
        }else{
            this.scene.text.hide();
            this.scene.text.setText('LOST', '140px');
            this.scene.text.show();
        } 
      }
      if(question == 1){//la pregunta
        if(option == "El número 8"){//la repuesta eleguida
            this.scene.text.hide();
            this.scene.text.setText('WIN', '140px');
            this.scene.text.show();
        }else{
            this.scene.text.hide();
            this.scene.text.setText('LOST', '140px');
            this.scene.text.show();
        } 
      }
      if(question == 2){//la pregunta
        if(option == "1"){//la repuesta eleguida
            this.scene.text.hide();
            this.scene.text.setText('WIN', '140px');
            this.scene.text.show();
        }else{
            this.scene.text.hide();
            this.scene.text.setText('LOST', '140px');
            this.scene.text.show();
        } 
      }
      if(question == 3){//la pregunta
        if(option == "Tu nombre"){//la repuesta eleguida
            this.scene.text.hide();
            this.scene.text.setText('WIN', '140px');
            this.scene.text.show();
        }else{
            this.scene.text.hide();
            this.scene.text.setText('LOST', '140px');
            this.scene.text.show();
        } 
      }
      if(question == 4){//la pregunta
        if(option == "El pacífico"){//la repuesta eleguida
            this.scene.text.hide();
            this.scene.text.setText('WIN', '140px');
            this.scene.text.show();
        }else{
            this.scene.text.hide();
            this.scene.text.setText('LOST', '140px');
            this.scene.text.show();
        } 
      }
    }

    update() {
    }
}