import Background from '../objects/gameObj/bg';
import Choices from '../objects/gameObj/choices';
import Player from '../objects/gameObj/player';
import Monster from '../objects/gameObj/monster';
import Timer from '../objects/gameObj/timer';
import Text from '../objects/gameObj/text';
import H from '../utils/helpers';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    const music = this.musica = this.sound.add('musicamenu', { loop: true });
    music.play({ loop: true });

    this.ee = this.sys.events;
    this.ee.on('countdown', () => { console.log('countdown!!'); });

    this.dangerSound = this.sound.add('musicapeligro', { loop: false });

    this.gameView = this.add.container();
    this.bg = new Background(this, this.gameView, 'Background');
    this.choices = new Choices(this, this.gameView, 'Choices');
    this.monster = new Monster(this, this.gameView, 'Monster');
    this.player = new Player(this, this.gameView, 'Player');
    this.timer = new Timer(this, this.gameView, 'Timer');
    // this.timer.countdown(15);
    this.text = new Text(this, this.gameView, 'Text');
    // this.text.hide();
    this.text.setText('Elige un\nmiembro', '94px');
    this.text.show();
  }

  update() {
    this.player.update();
  }
}
