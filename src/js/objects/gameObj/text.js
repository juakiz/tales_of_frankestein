import H from '../../utils/helpers';

export default class Text extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        this.create();
    }

    create() {

    }

    update() {
    }
}
