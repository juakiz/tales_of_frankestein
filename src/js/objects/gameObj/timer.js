import H from '../../utils/helpers';

export default class Timer extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        this.create();
    }

    create() {
        const bg = this.bg = this.scene.add.graphics();
        bg.fillStyle(0x808080, 1);
        bg.fillRect(-70, -40, 135, 85);

        this.add(bg);

        const timer = this.timer = H.makeText(this.scene, 1280 - 75, 332, '00', '100px');
        this.add(timer);

        bg.x = timer.x;
        bg.y = timer.y;

    }

    update() {
    }
}
