import MainScreenCnt from '../objects/mainScreenCnt';
// import ChoiceScreenCnt from '../objects/choiceScreenCnt';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create() {
    this.menuView = this.add.container();
    this.mainsScrn = new MainScreenCnt(this, this.menuView, 'MainScreen');
  }

  update() {
  }
}
