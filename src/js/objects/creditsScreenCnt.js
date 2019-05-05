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
        
        const fond = [];
        fond[0] = this.fond = this.scene.add.image(300, 360, 'fondo_menu');
        fond[0].setScale(1.2);
        fond[1] = this.fond = this.scene.add.image(800, 360, 'fondo_menu');
        fond[1].setScale(1.2);

        fond[2] = this.fond = this.scene.add.image(640, 400, 'marcolateral');
        // fond[2].setScale(1.2);
        fond[2].scaleX = 1.6;
        fond[2].scaleY = 1;

        const title = H.makeText(this.scene, 640, 100, 'Credits', '120px', '#c5c500');
        

        const backBtn = H.makeText(this.scene, 1190, 699, 'BACK', '57px', '#d1262c');
        backBtn.setInteractive();
        backBtn.on('pointerdown', () => {
            this.scene.creditsScrn.visible = false;
        });
        const text = [];
        text[0] = H.makeText(this.scene, 350, 270, 'Programación', '60px', '#ffffff');
        text[1] = H.makeText(this.scene, 350, 370, 'Joaquín Monte Soto\nAlejandro Padrón Gil\nMario Castellano González', '45px', '#ffffff')
        text[2] = H.makeText(this.scene, 950, 270, 'Arte', '60px', '#ffffff');
        text[3] = H.makeText(this.scene, 950, 370, 'Tegavay Galiano González\nJoel Portero Bordón\nEdgar Moreno Martín', '45px', '#ffffff')
        text[4] = H.makeText(this.scene, 350, 520, 'Audio', '60px', '#ffffff');
        text[5] = H.makeText(this.scene, 350, 570, 'Jonatan Galindo Alvarez', '45px', '#ffffff');
        text[6] = H.makeText(this.scene, 950, 520, 'Narración', '60px', '#ffffff');
        text[7] = H.makeText(this.scene, 950, 570, 'Samuel Rodríguez García', '45px', '#ffffff');
        //text.forEach();
        // this.tweens.add({
        //     targets: text,
        //     scaleX: 1,
        //     scaleY: 1,
        //     duration: 3000,
        // })
        this.add(bg);
        this.add(fond);
        this.add(title);
        this.add(backBtn);
        this.add(text);
        
    }

    update() {
    }
}
