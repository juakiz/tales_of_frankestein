import H from '../utils/helpers';

export default class MainScrnCnt extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);
    
        if (parent) parent.add(this);
        this.name = name;
    
        this.create();
      }
  
    create() {
        const bg = this.bg = this.scene.add.graphics();
        bg.fillStyle(0xffffaa, 1);
        bg.fillRect(0, 0, 1280, 720);
    
        // const bg = this.bg = this.add.graphics();
        // bg.fillStyle(0xffffaa, 1);
        // bg.fillRect(0, 0, 800, 600);
    
        H.makeText(this.scene, 640, 100, 'Tales of Frankenstein');
        const playBtn = H.makeText(this.scene, 640, 300, 'PLAY', '80px');
        playBtn.setInteractive();
        playBtn.on('pointerdown', () => {
          console.log('funciono');
        });
    
    
        H.makeText(this.scene, 640, 500, 'CREDITS', '80px');
        const controlsBtn = H.makeText(this.scene, 640, 400, 'CONTROLS', '80px');
    
        const controlsGrp = this.scene.add.container();
        controlsGrp.visible = false;
    
        // const controlsBg = this.controlsBg = this.scene.add.graphics();
        // controlsBg.fillStyle(0xffffaa, 1);
        // controlsBg.fillRect(0, 0, 1280, 720);
    
        // controlsBtn.setInteractive();
        // controlsBtn.on('pointerdown', () => {
        //   controlsGrp.visible = true;
        // });
    
        // controlsGrp.add(controlsBg);
    }
  
    update() {
    }
  }
  