import Background from '../objects/gameObj/bg';
import Choices from '../objects/gameObj/choices';
import Player from '../objects/gameObj/player';
import Monster from '../objects/gameObj/monster';
import Timer from '../objects/gameObj/timer';
import Text from '../objects/gameObj/text';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');

    // this.createBg();
  }

  create() {
    this.gameView = this.add.container();
    this.bg = new Background(this, this.gameView, 'Background');
    this.choices = new Choices(this, this.gameView, 'Choices');
    this.player = new Player(this, this.gameView, 'Player');
    this.monster = new Monster(this, this.gameView, 'Monster');
    this.timer = new Timer(this, this.gameView, 'Timer');
    this.text = new Text(this, this.gameView, 'Text');
  }

  update() {
  }
}
