export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    const bg = this.bg = this.add.image(0, 0, 'fondo');
    bg.setOrigin(0, 0);
  }

  update() {
  }
}
