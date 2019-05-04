import MainScreenCnt from '../objects/mainScreenCnt';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create() {    
    const mainsScrn = new MainScreenCnt(this, null, 'MainScreen');
    mainsScrn.alpha = 0.5;
  }

  update() {
  }
}
