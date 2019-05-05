import H from '../../utils/helpers';

export default class Timer extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        this.seconds = 0;

        this.create();
    }

    create() {
        const bg = this.bg = this.scene.add.graphics();
        bg.fillStyle(0x808080, 0.8);
        bg.fillRect(-70, -40, 135, 85);

        this.add(bg);

        const timer = this.timer = H.makeText(this.scene, 1280 - 75, 52, null, '100px',  '#FFFFFF');
        this.setTime(this.seconds)
        this.add(timer);

        bg.x = timer.x;
        bg.y = timer.y;
    }

    setTime(num) {
        this.seconds = num;
        if (num > 9) this.timer.setText(num);
        else this.timer.setText(`0${num}`);
    }

    countdown(secs) {
        this.setTime(secs);
        this.timerEvent = this.scene.time.addEvent({
            delay: 1000,
            callback: (secs) => {
                // console.log(this.seconds);
                if (this.seconds > 0) {
                    this.seconds--;
                    this.setTime(this.seconds);
                } else {
                    this.scene.ee.emit('countdown');
                }
            },
            args: [secs],
            callbackScope: this,
            repeat: secs
        });
    }

    update() {
    }
}
