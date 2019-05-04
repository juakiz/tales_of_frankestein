import H from '../utils/helpers';

export default class CreditsScrnCnt extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        this.create();
    }

    create() {
        const bg = this.bg = this.scene.add.graphics();
        bg.fillStyle(0x00ffaa, 1);
        bg.fillRect(0, 0, 1280, 720);

        const title = H.makeText(this.scene, 640, 100, 'Credits', '120px');

        const backBtn = H.makeText(this.scene, 1210, 30, 'BACK', '40px');
        backBtn.setInteractive();
        backBtn.on('pointerdown', () => {
            this.scene.creditsScrn.visible = false;
        });
        const text = [];
        text[0] = H.makeText(this.scene, 350, 270, 'Programacion', '60px');
        text[1] = H.makeText(this.scene, 350, 370, 'Joaquín Monte Soto\nAlejandro Padrón Gil\nMario Castellano González', '45px')
        text[2] = H.makeText(this.scene, 950, 270, 'Arte', '60px');
        text[3] = H.makeText(this.scene, 950, 370, 'Tegavay galiano González\nJoel Portero Bordón\nEdgar Moreno Martín', '45px')
        text[4] = H.makeText(this.scene, 650, 520, 'Audio', '60px');
        text[5] = H.makeText(this.scene, 650, 570, 'Joaquín Monte Soto', '45px')
        //text.forEach();
        // this.tweens.add({
        //     targets: text,
        //     scaleX: 1,
        //     scaleY: 1,
        //     duration: 3000,
        // })
        this.add(bg);
        this.add(title);
        this.add(backBtn);
        this.add(text);
        
    }

    update() {
    }
}
