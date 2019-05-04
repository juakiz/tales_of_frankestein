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

        const title = this.title = this.scene.add.image(715, 150, 'titulo');
        
        const playBtn = H.makeText(this.scene, 640, 285, 'PLAY', '80px');
        playBtn.setInteractive();
        playBtn.on('pointerdown', () => {
        });
        const controlsBtn = H.makeText(this.scene, 640, 400, 'STORY', '80px');
        controlsBtn.setInteractive();
        controlsBtn.on('pointerdown', () => {
            this.scene.controlsScrn.visible = true;
        });
        const creditsBtn = H.makeText(this.scene, 640, 515, 'CREDITS', '80px');
        creditsBtn.setInteractive();
        creditsBtn.on('pointerdown', () => {
            this.scene.creditsScrn.visible = true;
        });


        this.add(bg);
        this.add(title);
        this.add(playBtn);
        this.add(controlsBtn);
        this.add(creditsBtn);
        
    }

    update() {
    }
}
