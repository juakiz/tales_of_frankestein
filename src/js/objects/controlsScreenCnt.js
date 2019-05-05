import H from '../utils/helpers';

export default class ControlsScrnCnt extends Phaser.GameObjects.Container {
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

        fond[2] = this.fond = this.scene.add.image(640, 405, 'marcolateral');
        // fond[2].setScale(1.2);
        fond[2].scaleX = 1.6;
        fond[2].scaleY = 1;

        const title = H.makeText(this.scene, 640, 100, 'Story', '120px', '#c5c500');

        const backBtn = H.makeText(this.scene, 1190, 699, 'BACK', '57px', '#d1262c');
        backBtn.setInteractive();
        backBtn.on('pointerdown', () => {
            console.log('credits');
            this.scene.controlsScrn.visible = false;
        });

        const Story = H.makeText(this.scene, 650, 400, 'A principios del siglo XX, en pleno centro de la ciudad de\n las Palmas de Gran Canarias, en el castillo de la luz,\n el científico Viktor Frankenstein, comenzó a crear un ser\n humano a partir de restos de cuerpos muertos. Sin embargo\n no todo salió como estaba previsto, una fuga de gas\n provocó una fuerte explosión en el laboratorio de la cual\n surgieron extrañas criaturas que robaron las partes de\n la creación del científico\n\nEs hora de que tomes el control\n y vayas a buscar lo que es tuyo', '35px', '#ffffff')
        //this.add(fond);
        this.add(bg);
        this.add(fond);
        this.add(title);
        this.add(backBtn);
        this.add(Story);
    }

    update() {
    }
}
