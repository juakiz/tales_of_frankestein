import H from '../../utils/helpers';

export default class Player extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        this.x = 100;
        this.y = 388;

        this.setScale(0.4);

        this.create();
    }

    create() {
        const leg = this.leg = this.scene.add.image(0, 0, 'diseccion_piernas');
        leg.setOrigin(0.5, 1);
        this.add(leg);

        const head = this.head = this.scene.add.image(-15, 0, 'diseccion_cabeza');
        head.setOrigin(0.5, 1);
        this.add(head);

        const brazo_der = this.brazo_der = this.scene.add.image(0, 0, 'diseccion_brazo_der');
        brazo_der.setOrigin(0.5, 1);
        this.add(brazo_der);

        const brazo_izq = this.brazo_izq = this.scene.add.image(0, 0, 'diseccion_brazo_izq');
        brazo_izq.setOrigin(0.5, 1);
        this.add(brazo_izq);

        const torso = this.torso = this.scene.add.image(0, 0, 'diseccion_torso');
        torso.setOrigin(0.5, 1);
        this.add(torso);

        leg.visible = false;
        head.visible = false;
        brazo_der.visible = false;
        brazo_izq.visible = false;
    }

    show(part) {
        if (part !== 'hand') this[part].visible = true;
        else {
            this.brazo_der.visible = true;
            this.brazo_izq.visible = true;
        }
    }

    update() {
    }
}
