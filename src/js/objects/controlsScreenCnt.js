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

        const title = H.makeText(this.scene, 640, 100, 'Story', '120px');

        const backBtn = H.makeText(this.scene, 1210, 30, 'BACK', '40px');
        backBtn.setInteractive();
        backBtn.on('pointerdown', () => {
            console.log('credits');
            this.scene.controlsScrn.visible = false;
        });

        const Story = H.makeText(this.scene, 650, 440, 'principios del siglo XX, en pleno centro de la ciudad de\n las Palmas de Gran Canarias, en el castillo de la luz,\n el científico Viktor Frankenstein, comenzó a crear un ser\n humano a partir de restos de cuerpos muertos. Sin embargo\n no todo salió como estaba previsto, una fuga de gas\n provocó una fuerte explosión en el laboratorio de la cual\n surgieron extrañas criaturas que robaron las partes de\n la creación del científico\n\nEs hora de que tomes el control\n y vayas a buscar lo que es tuyo', '35px')

        this.add(bg);
        this.add(title);
        this.add(backBtn);
        this.add(Story);
    }

    update() {
    }
}
