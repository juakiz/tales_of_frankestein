// import LU from '../display/layout-utils';
// import assets from '../../embed/assets.json';
// embedded.assets = embedded.assets || assets;
// import './../strings';


export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('PreloaderScene');
  }

  preload() {
    // this.scale.on('resize', (gameSize, baseSize, displaySize, resolution) => { console.log(gameSize, baseSize, displaySize, resolution); });

    var progressBg = this.add.graphics();
    progressBg.fillStyle(0x909090, 1);
    progressBg.fillRect(90, 295, 1100, 70);

    var progress = this.add.graphics();

    this.load.on('progress', (value) => {
      // console.log(value);
        progress.clear();
        progress.fillStyle(0xffffff, 1);
        progress.fillRect(100, 300, 1080 * value, 60);
    });

    // console.log(progress);

    const scene = this;

    this.load.on('complete', () => {
      // this.input.on('pointerdown', () => {
          progressBg.destroy();
          progress.destroy();
          // scene.scale.startFullscreen();
          // this.scene.start('MenuScene');
        // });
    });

    this.load.audio('musicamenu', 'src/assets/music/menu_mas_elecciones.wav');
    this.load.audio('musicapeligro', 'src/assets/music/musica_peligro.wav');

    this.load.setPath('src/assets/sprites/');

    this.load.image('fondo', 'fondo.jpg');
    this.load.image('chains', 'chains.png');
    this.load.image('shield', 'shield.png');
    this.load.image('sword', 'sword.png');

    this.load.image('diseccion_brazo_der', 'diseccion_brazo_der.png');
    this.load.image('diseccion_brazo_izq', 'diseccion_brazo_izq.png');
    this.load.image('diseccion_cabeza', 'diseccion_cabeza.png');
    this.load.image('diseccion_piernas', 'diseccion_piernas.png');
    this.load.image('diseccion_torso', 'diseccion_torso.png');

    this.load.image('diseccion_brazo_der', 'diseccion_brazo_der.png');
    this.load.image('cabeza', 'cabeza.png');
    this.load.image('diseccion_piernas', 'diseccion_piernas.png');
    this.load.image('diseccion_torso', 'diseccion_torso.png');

    this.load.image('portrait_effigie', 'portrait_effigie.png');
    this.load.image('portrait_gorilla', 'portrait_gorilla.png');
    this.load.image('portrait_spider', 'portrait_spider.png');

    this.load.image("ship", "ship.png");
    this.load.image("spider", "spider.png");
    this.load.image("blood", "sangre.png");

    this.load.image("back","boton_flechaizquierda.png")


    // this.load.image('base_piedra', 'base_piedra.png');
    // this.load.spritesheet('pollo', 'pollo.png', { frameWidth: 87.5, frameHeight: 107 });
  }

  create() {
    // this.anims.create({
    //   key: 'waterVFXLoop',
    //   frameRate: 16,
    //   frames: this.anims.generateFrameNames('assets', {
    //     prefix: 'drop_',
    //     suffix: '.png',
    //     start: 0,
    //     end: 4,
    //     zeroPad: 1,
    //   }),
    // });
    

    [
      ['pollo', 1, 3],
    ].forEach((el) => {
      // console.log(el);
      this.anims.create({
        key: el[0] + 'Walk',
        frames: this.anims.generateFrameNumbers(el[0], { start: 0, end: el[1] }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: `${el[0]}Attack`,
        frames: this.anims.generateFrameNumbers(el[0], { start: el[1], end: el[2] }),
        frameRate: 10,
        repeat: -1
      });
    });
    
    // this.anims.create({
    //   key: 'polloAttack',
    //   frames: this.anims.generateFrameNumbers('pollo', { start: 1, end: 3 }),
    //   frameRate: 10,
    //   repeat: -1
    // });

    // this.anims.create({
    //   key: 'polloWalk',
    //   frames: this.anims.generateFrameNumbers('pollo', { start: 0, end: 1 }),
    //   frameRate: 10,
    //   repeat: -1
    // });
    
    //this.scene.start('GameScene');
    this.scene.start('MenuScene');
  }
}
