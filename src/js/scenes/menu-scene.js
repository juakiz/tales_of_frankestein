import MainScreenCnt from '../objects/mainScreenCnt';
// import ChoiceScreenCnt from '../objects/choiceScreenCnt';
import LegsScreenCnt from '../objects/legsScreenCnt';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create() {
    // this.menuView = this.add.container();
    // this.mainsScrn = new MainScreenCnt(this, this.menuView, 'MainScreen');
    this.menuView = this.add.container();
    // this.mainsScrn = new MainScreenCnt(this, this.menuView, 'MainScreen');
    this.mainsScrn = new LegsScreenCnt(this, this.menuView, 'LegsScreen');
  }

  update() {
  }
}
