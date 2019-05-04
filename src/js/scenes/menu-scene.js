export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create() {
    const bg = this.bg = this.add.graphics();
    bg.fillStyle(0xffffaa, 1);
    bg.fillRect(0, 0, 1280, 720);

    // const bg = this.bg = this.add.graphics();
    // bg.fillStyle(0xffffaa, 1);
    // bg.fillRect(0, 0, 800, 600);

    this.makeText(640, 100, 'Tales of Frankenstein');
    const playBtn = this.makeText(640, 300, 'PLAY', '80px');
    playBtn.setInteractive();
    playBtn.on('pointerdown', () => {
      this.scene.start('ChoiceScene');
    });

    this.makeText(640, 400, 'CONTROLS', '80px');
    this.makeText(640, 500, 'CREDITS', '80px');

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
