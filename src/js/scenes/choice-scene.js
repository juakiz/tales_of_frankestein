export default class ChoiceScene extends Phaser.Scene {
    constructor() {
      super('ChoiceScene');
    }
  
    create() {

      var rect = new Phaser.Geom.Rectangle(100, 500, 200, 100);
      var graphics = this.add.graphics({ fillStyle: { color: 0x0000ff } });
      graphics.fillRectShape(rect);
      graphics.setInteractive(rect, event);

      var rect = new Phaser.Geom.Rectangle(500, 500, 200, 100);
      var graphics = this.add.graphics({ fillStyle: { color: 0x0000ff } });
      graphics.fillRectShape(rect);
      graphics.setInteractive(rect, event);

      var rect = new Phaser.Geom.Rectangle(900, 500, 200, 100);
      var graphics = this.add.graphics({ fillStyle: { color: 0x0000ff } });
      graphics.fillRectShape(rect);
      graphics.setInteractive(rect, event);

      const playBtn1 = this.makeText(200, 550, 'PLAY', '80px');
      playBtn1.setInteractive().on('inputDown', () => {
        console.log('funciono');
      });

      const playBtn2 = this.makeText(600, 550, 'PLAY', '80px');
      playBtn2.setInteractive().on('inputDown', () => {
        console.log('funciono');
      });

      const playBtn3 = this.makeText(1000, 550, 'PLAY', '80px');
      playBtn3.setInteractive().on('inputDown', () => {
        console.log('funciono');
      });
  
      // const pollo = this.add.sprite(100, 100, 'pollo', 5);
      // const pollo = this.add.sprite(100, 100);
      // pollo.anims.play('polloAttack');
      // pollo.anims.play('polloWalk');
  
      // pollo.setScale(0.25);
  
      const scene = this;
  
      // pollo.setInteractive().on('pointerdown', function () {
      //   console.log(this);
      //   scene.scale.toggleFullscreen();
      //   if (scene.scale.isFullscreen) {
      //     // On start fulll screen
      //   } else {
      //     // On stop fulll screen
      //   }
      // });
      
    }
  
    makeText(x, y, text, size = '60px') {
      var config = {
        x: x,
        y: y,
        text,
        style: {
          fontSize: size,
          fontFamily: 'Arial',
          color: '#000000',
          align: 'center',
          shadow: {
            color: '#FFFFFF',
            fill: true,
            offsetX: 2,
            offsetY: 2,
            blur: 8
          }
        }
      };
  
      const textObj = this.make.text(config);
      textObj.setOrigin(0.5, 0.5);
  
      return textObj;
    }
  
    update() {
    }
  }