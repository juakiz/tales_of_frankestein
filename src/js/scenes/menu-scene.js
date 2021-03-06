import MainScreenCnt from '../objects/mainScreenCnt';
import ControlsScreenCnt from '../objects/controlsScreenCnt';
import CreditsScreenCnt from '../objects/creditsScreenCnt';

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create() {



    // const sword = this.add.image(100, 200, 'atlas', 'Sword');
    // this.tweens.add({
    //   targets: sword,
    //   x:1000,
    //   duration: 4500,
    //   yoyo: true,
    //   repeat: -1sr
    // }) 
    // var menumusic = this.sound.add('musicamenu',{
    //   mute: false,
    //   volume: 1,
    //   rate: 1,
    //   detune: 0,
    //   seek: 0,
    //   loop: false,
    //   delay: 0 
    // });

    this.menuView = this.add.container();
    this.mainsScrn = new MainScreenCnt(this, this.menuView, 'MainScreen');
    this.controlsScrn = new ControlsScreenCnt(this, this.menuView, 'ControlScreen');
    this.controlsScrn.visible = false;
    this.creditsScrn = new CreditsScreenCnt(this, this.menuView, 'CreditScreen');
    this.creditsScrn.visible = false;
    // console.log(mainsScrn);
    // mainsScrn.alpha = 0.5;
    // this.menuView = this.add.container();
    // this.mainsScrn = new MainScreenCnt(this, this.menuView, 'MainScreen');
    // this.mainsScrn = new LegsScreenCnt(this, this.menuView, 'LegsScreen');
  }

  update() {
  }
}
