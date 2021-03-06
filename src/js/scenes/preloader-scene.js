import atlasImg from '../../assets/sprites/atlas.png';
import atlasData from '../../assets/sprites/atlas.json';
import fondo_menu from '../../assets/sprites/fondo_menu.jpg';
import fondo from '../../assets/sprites/fondo.jpg';
import menu from '../../assets/sprites/menu.png';

import musicamenu from '../../assets/music/menu_mas_elecciones.ogg';
import musicapeligro from '../../assets/music/musica_peligro.ogg';


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

    this.load.audio('musicamenu', musicamenu);
    this.load.audio('musicapeligro', musicapeligro);

    // this.load.setPath('src/assets/sprites/');
    this.load.image('fondo_menu', fondo_menu);
    this.load.image('fondo', fondo);
    this.load.image('menu', menu);

    // this.load.image('chains', 'chains.png');
    // this.load.image('shield', 'shield.png');
    // this.load.image('sword', 'sword.png');
    // this.load.image('titulo', 'titulo.png');


    // this.load.image('diseccion_brazo_der', 'diseccion_brazo_der.png');
    // this.load.image('diseccion_brazo_izq', 'diseccion_brazo_izq.png');
    // this.load.image('diseccion_cabeza', 'diseccion_cabeza.png');
    // this.load.image('diseccion_piernas', 'diseccion_piernas.png');
    // this.load.image('diseccion_torso', 'diseccion_torso.png');

    // this.load.image('Frank_papel', 'Frank_papel.PNG');
    // this.load.image('Frank_Tijeras', 'Frank-Tijeras.PNG');
    // this.load.image('diseccion_brazo_der', 'Frank_piedra.PNG');
    // this.load.image('diseccion_brazo_izq', 'Frank_pizza.PNG');
    // this.load.image('diseccion_cabeza', 'Frank_Cabbeza.PNG');
    // this.load.image('diseccion_piernas', 'Frank_piernas.PNG');
    // this.load.image('diseccion_torso', 'Frank_camiseta.PNG');

    // this.load.image('boton_seleccion_brazo', 'boton_seleccion_brazo.png');
    // this.load.image('boton_seleccion_cabeza', 'boton_seleccion_cabeza.png');
    // this.load.image('boton_seleccion_piernas', 'boton_seleccion_piernas.png');

    // this.load.image('portrait_effigie', 'portrait_effigie.png');
    // this.load.image('portrait_gorilla', 'portrait_gorilla.png');
    // this.load.image('portrait_spider', 'portrait_spider.png');

    // this.load.image('boton_flechaderecha', 'boton_flechaderecha.png');
    // this.load.image('boton_flechaizquierda', 'boton_flechaizquierda.png');

    // this.load.image('boton_piedra', 'boton_piedra.png');
    // this.load.image('boton_papel', 'boton_papel.png');
    // this.load.image('boton_tijera', 'boton_tijera.png');

    // this.load.image('marco', 'marco.png');

    // this.load.image('gorilla_body', 'gorilla_body.png');
    // this.load.image('gorilla_lengua_pezon', 'gorilla_lengua_pezon.png');
    // this.load.image('gorilla_lengua_sexy', 'gorilla_lengua_sexy.png');
    // this.load.image('gorilla_papel', 'gorilla_papel.png');
    // this.load.image('gorilla_piedra', 'gorilla_piedra.png');
    // this.load.image('gorilla_tijera', 'gorilla_tijera.png');

    // this.load.image('esfinje_1', 'esfinje_1.PNG');
    // this.load.image('esfinje_2', 'esfinje_2.PNG');


    // this.load.image("ship", "ship.png");
    // this.load.image("spider", "spider.png");
    // this.load.image("blood", "sangre.png");

    // this.load.image("back", "boton_flechaizquierda.png");

    // this.load.image('boton_tijera', 'boton_tijera.png');
    // this.load.image('boton_piedra', 'boton_piedra.png');
    // this.load.image('boton_papel', 'boton_papel.png');

    // this.load.image('Aranya_cabeza', 'Aranya_cabeza.png');
    // this.load.image('Aranya_pierna_der', 'Aranya_pierna_der.png');
    // this.load.image('Aranya_pierna_izq', 'Aranya_pierna_izq.png');
    // this.load.image('tela_aranya', 'tela_aranya.png');
    
    // this.load.image('marcolateral', 'marcolateral.png');

    this.load.atlas('atlas', atlasImg, atlasData);
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
    
    // this.scene.start('GameScene');
    this.scene.start('MenuScene');
  }
}
