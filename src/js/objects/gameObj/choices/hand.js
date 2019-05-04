import H from '../../../utils/helpers';

export default class Hand extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        // h: 298
        // w: 418
        this.x = 13;
        this.y = 410;

        this.create();
    }

    create() {
        const portrait = this.portrait = this.scene.add.image(0, 0, 'portrait_effigie');
        portrait.setPosition(418 / 2, 298 / 2);
        portrait.setScale(0.73);
        this.add(portrait);

        // const portrait = this.portrait = this.scene.add.image(0, 0, 'portrait_effigie');
        // portrait.setPosition(418 / 2, 298 / 2);
        // portrait.setScale(0.73);
        // this.add(portrait);
    }

    update() {
    }
}
