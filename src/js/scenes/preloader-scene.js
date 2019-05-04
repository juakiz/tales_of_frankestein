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
    progressBg.fillRect(90, 295, 620, 70);

    var progress = this.add.graphics();

    this.load.on('progress', (value) => {
      // console.log(value);
        progress.clear();
        progress.fillStyle(0xffffff, 1);
        progress.fillRect(100, 300, 600 * value, 60);
    });

    console.log(progress);

    const scene = this;

    this.load.on('complete', () => {
      // this.input.on('pointerdown', () => {
          progressBg.destroy();
          progress.destroy();
          // scene.scale.startFullscreen();
          // this.scene.start('MenuScene');
        // });
    });

    this.load.audio('musicamenu', 'src/assets/OLD/music/Hearts_forged_with_fire.mp3');

    this.load.setPath('src/assets/OLD/sprites/');

    this.load.image('fondo', 'fondo.jpg');
    this.load.image('base_piedra', 'base_piedra.png');
    this.load.image('piedra_1', 'piedra.png');
    this.load.image('ui', 'ui.png');
    this.load.image('torre_vikingos_cortada', 'torre_vikingos.png');
    this.load.image('torre_alien', 'torre_alien.png');
    this.load.image('rayo', 'rayo.png');
    this.load.image('escudo', 'escudo.png');
    this.load.image('empujd', 'empuje_drch.png');
    this.load.image('empuji', 'empuje_izq.png');    
    this.load.spritesheet('pollo', 'pollo.png', { frameWidth: 87.5, frameHeight: 107 });
    this.load.spritesheet('slime', 'slime.png', { frameWidth: 875 / 6, frameHeight: 221 });
    this.load.spritesheet('gusano', 'gusano.png', { frameWidth: 240.5, frameHeight: 212 });
    this.load.spritesheet('vikingo1', 'vikingo-01.png', { frameWidth: 730 / 6, frameHeight: 115 });
    this.load.spritesheet('vikingo2', 'vikingo-02.png', { frameWidth: 1226 / 6, frameHeight: 187 });
    this.load.spritesheet('vikingo3', 'vikingo-03.png', { frameWidth: 1128 / 6, frameHeight: 207 });

    this.load.image('menu', 'menu_juego.png');
    this.load.image('start', 'start_oscuro.png');
    this.load.image('instrucciones', 'instrucc_oscuro.png');
    this.load.image('creditos', 'creditos_oscuro.png');
    this.load.image('instruct_1', 'instruct_1.png');
    this.load.image('instruct_2', 'instruct_2.png');
    this.load.image('back', 'back.png');
    this.load.image('next', 'next.png');
    this.load.image('polloicon', 'pollo1.png');
    this.load.image('polloicon1', 'pollo_oscuro.png');
    this.load.image('gusanoicon', 'gusano1.png');
    this.load.image('gusanoicon1', 'gusano_oscuro.png');
    this.load.image('calaveraicon', 'calavera.png');
    this.load.image('calaveraicon1', 'calavera_oscuro.png');
    this.load.image('creditoscarg', 'creditos.jpg');
    this.load.image('vikingo1c', 'vikingo1.png');
    this.load.image('vikingo1o', 'vikingo1o.png');
    this.load.image('vikingo2c', 'vikingo2.png');
    this.load.image('vikingo2o', 'vikingo2o.png');
    this.load.image('vikingo3c', 'vikingo3.png');
    this.load.image('vikingo3o', 'vikingo3o.png');
    this.load.image('aliens_win', 'aliens_win.png');
    this.load.image('vikings_win', 'vikings_win.png');

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
      ['slime', 3, 4],
      ['gusano', 1, 3],
      ['vikingo1', 3, 5],
      ['vikingo2', 3, 5],
      ['vikingo3', 3, 5],
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
    
    this.scene.start('MenuScene');
  }
}
