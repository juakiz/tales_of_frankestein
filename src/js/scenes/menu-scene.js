import MainScreenCnt from '../objects/mainScreenCnt';
// import ChoiceScreenCnt from '../objects/choiceScreenCnt';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create() {
    this.menuView = this.add.container();
    this.mainsScrn = new MainScreenCnt(this, this.menuView, 'MainScreen');
    // this.choiseScrn = new ChoiceScreenCnt(this, this.menuView, 'ChoiseScreen');
    // choiseScrn.visible = false;
    // console.log(mainsScrn) ;
    // mainsScrn.alpha = 0.5; 
  } 

  update() {
  }
}
