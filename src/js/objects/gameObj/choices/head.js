import H from '../../../utils/helpers';

export default class Head extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        // h: 298
        // w: 418
        this.x = 13 + 418;
        this.y = 410;

        this.create();
    }

    create() {
        const portrait = this.portrait = this.scene.add.image(0, 0, 'portrait_gorilla');
        portrait.setPosition(418 / 2, 298 / 2);
        portrait.setScale(0.73);
        this.add(portrait);

        // const cabeza = this.cabeza = this.scene.add.image(-15, 0, 'diseccion_cabeza');
        // cabeza.setOrigin(0.5, 1);
        // this.add(cabeza);

        // const brazo_der = this.brazo_der = this.scene.add.image(0, 0, 'diseccion_brazo_der');
        // brazo_der.setOrigin(0.5, 1);
        // this.add(brazo_der);
    }

    update() {
    }
}
