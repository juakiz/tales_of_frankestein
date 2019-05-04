import H from '../utils/helpers';

export default class ChoiceScrnCnt extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        console.log(scene)
        super(scene);
    
        if (parent) parent.add(this);
        this.name = name;
    
        this.create();
      }
  
    create() {
      // var rect = new Phaser.Geom.Rectangle(100, 500, 200, 100);
      // var graphics = this.add.graphics({ fillStyle: { color: '#E13E1B' } });
      // graphics.fillRectShape(rect);
      // graphics.setInteractive(rect, event);

      // var rect = new Phaser.Geom.Rectangle(500, 500, 200, 100);
      // var graphics = this.add.graphics({ fillStyle: { color: '#E13E1B' } });
      // graphics.fillRectShape(rect);
      // graphics.setInteractive(rect, event);

      // var rect = new Phaser.Geom.Rectangle(900, 500, 200, 100);
      // var graphics = this.add.graphics({ fillStyle: { color: '#E13E1B' } });
      // graphics.fillRectShape(rect);
      // graphics.setInteractive(rect, event);

      // const playBtn1 = H.makeText(200, 550, 'CABEZA', '80px');
      // playBtn1.setInteractive().on('inputDown', () => {
      //   console.log('funciono');
      // });

      // const playBtn2 = H.makeText(600, 550, 'PIERNA', '80px');
      // playBtn2.setInteractive().on('inputDown', () => {
      //   console.log('funciono');
      // });

      // const playBtn3 = H.makeText(1000, 550, 'BRAZO', '80px');
      // playBtn3.setInteractive().on('inputDown', () => {
      //   console.log('funciono');
      // });
  
  
    
      const controlsGrp = this.scene.add.container();
      controlsGrp.visible = false;
    
    }
  
    update() {
    }
  }
  