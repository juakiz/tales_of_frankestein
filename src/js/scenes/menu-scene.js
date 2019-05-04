import MainScreenCnt from '../objects/mainScreenCnt';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create() {
    this.menuView = this.add.container();
    const mainsScrn = new MainScreenCnt(this, this.menuView, 'MainScreen');
    console.log(mainsScrn);
    // mainsScrn.alpha = 0.5;
  }

  update() {
  }
}
