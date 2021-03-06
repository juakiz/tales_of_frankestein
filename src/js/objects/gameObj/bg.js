import H from '../../utils/helpers';

export default class Background extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        this.create();
    }

    create() {
    const bg = this.bg = this.scene.add.image(0, 0, 'fondo');
    bg.setOrigin(0, 0);
    this.add(bg);

    const shield = this.scene.add.image(350, 275, 'atlas', 'shield');
    shield.setScale(1.5);
    this.add(shield);

    const chains = this.scene.add.image(650, 300, 'atlas', 'chains');
    chains.setScale(1.5);
    this.add(chains);

    const sword1 = this.scene.add.image(350, 275, 'atlas', 'sword');
    sword1.setScale(1.5);
    sword1.angle = 30;
    this.add(sword1);

    const sword2 = this.scene.add.image(350, 275, 'atlas', 'sword');
    sword2.setScale(1.5);
    sword2.angle = -30;
    this.add(sword2);
    }

    update() {
    }
}
