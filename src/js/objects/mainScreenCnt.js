import H from '../utils/helpers';

export default class MainScrnCnt extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        this.create();
    }

    create() {
        const bg = this.bg = this.scene.add.graphics();
        bg.fillStyle(0xffffaa, 1);
        bg.fillRect(0, 0, 1280, 720);

        const title = H.makeText(this.scene, 640, 100, 'Tales of Frankenstein');
        const playBtn = H.makeText(this.scene, 640, 300, 'PLAY', '80px');
        playBtn.setInteractive();
        playBtn.on('pointerdown', () => {
            this.scene.scene.start('GameScene');
        });

        const controls = H.makeText(this.scene, 640, 400, 'CONTROLS', '80px');
        const credits = H.makeText(this.scene, 640, 500, 'CREDITS', '80px');

        this.add(bg);
        this.add(title);
        this.add(playBtn);
        this.add(controls);
        this.add(credits);
    }

    update() {
    }
}
