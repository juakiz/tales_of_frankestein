import H from '../utils/helpers';
// import  menumusic from '../scenes/menu-scene'

export default class MainScrnCnt extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        this.create();
    }

    create() {
        const bg = this.bg = this.scene.add.graphics();
        bg.fillStyle(0x000000, 1);
        bg.fillRect(0, 0, 1280, 720);

        const fond = this.fond = this.scene.add.image(637, 362, 'menu');

        // menumusic.play();

        //const title = this.title = this.scene.add.image(715, 150, 'titulo');
        const playBtn = H.makeText(this.scene, 850, 325, 'PLAY', '80px', '#c5c500');
        playBtn.setInteractive();
        playBtn.on('pointerdown', () => {
            this.scene.scene.start('GameScene');
        });
        const controlsBtn = H.makeText(this.scene, 850, 440, 'STORY', '80px', '#c5c500');
        controlsBtn.setInteractive();
        controlsBtn.on('pointerdown', () => {
            this.scene.controlsScrn.visible = true;
        });
        const creditsBtn = H.makeText(this.scene, 850, 555, 'CREDITS', '80px', '#c5c500');
        creditsBtn.setInteractive();
        creditsBtn.on('pointerdown', () => {
            console.log('hola');
            this.scene.creditsScrn.visible = true;
        });


        this.add(bg);
        this.add(fond);
        //this.add(title);
        this.add(playBtn);
        this.add(controlsBtn);
        this.add(creditsBtn);
    }

    update() {
    }
}
