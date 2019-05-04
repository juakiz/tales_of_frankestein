import Phaser from 'phaser';

import Preloader from './js/scenes/preloader-scene';
import Menu from './js/scenes/menu-scene';
import Game from './js/scenes/game-scene';


console.log(window.innerWidth, window.innerHeight);

const config = {
  type: Phaser.AUTO,
  // parent: 'phaser-example',
  // width: window.innerWidth,
  // height: window.innerHeight,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'phaser-example',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720
  },
  pixelArt: true,
  scene: [
    Preloader,
    Menu,
    Game,
  ]
};

const game = new Phaser.Game(config);
