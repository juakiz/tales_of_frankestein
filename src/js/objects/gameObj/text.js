import H from '../../utils/helpers';

export default class Text extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        this.setPosition(H.WIDTH / 2, 200);

        this.create();
    }

    create() {
        const bg = this.bg = this.scene.add.image(0, 0, 'marco');
        bg.setScale(1.5);
        bg.angle = 90;
        this.add(bg);

        const sentence = 'Prueba prueba prueba\nPrueba prueba\nPrueba pruebaprueba prueba';
        const text = this.text = H.makeText(this.scene, 0, 0, sentence, '42px');
        this.add(text);

        this.x = H.WIDTH + this.bg.displayHeight;
    }

    setText(sentence, size = '42px') {
        this.text.setText(sentence);
        this.text.setFontSize(size);
    }

    show() {
        this.x = H.WIDTH + this.bg.displayHeight;
        this.scene.tweens.add({ 
            targets: this, 
            x: H.WIDTH / 2, 
            ease: 'Circ.easeOut',
            duration: 450, 
        });
    }

    hide() {
        this.scene.tweens.add({ 
            targets: this, 
            x: -this.bg.displayHeight,
            ease: 'Circ.easeIn',
            duration: 250, 
        });
    }

    update() {
    }
}
