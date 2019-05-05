import H from '../../../utils/helpers';
import HeadGame from './headGame';
import Monster from '../monster';

export default class Head extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        // h: 298
        // w: 418
        this.x = 13 + 418;
        this.y = 410;

        this.buttons = [];

        this.create();
    }

    create() {
        const portrait = this.portrait = this.scene.add.image(0, 0, 'atlas', 'portrait_effigie');
        portrait.setPosition(418 / 2, 298 / 2);
        portrait.setScale(0.73);
        this.add(portrait);

        portrait.setInteractive();
        portrait.on('pointerdown', () => {
            this.miniGame.play();
            this.parentContainer.showControls();
            this.scene.monster.esfinje();
        });
        
        const part = this.part = this.scene.add.image(0, 0, 'atlas', 'boton_seleccion_cabeza');
        part.setPosition(418 / 2, 298 / 2);
        part.setScale(0.5);
        this.add(part);
        part.setInteractive();
        part.on('pointerdown', () => {
            this.parentContainer.selectPart('head');
        });

        const button1 = this.button1 = this.scene.add.image(0, 0, 'atlas', 'marco');
        button1.setScale(0.3, 1);
        button1.setPosition((418 / 2), (298 / 3) - (button1.displayWidth / 1.5));
        button1.angle = 90;
        this.add(button1);
        button1.setInteractive();
        // button1.on('pointerdown', (el) => {
        //     console.log('hola')
        //     this.scene.tweens.add({ 
        //         targets: button1, 
        //         scaleX: 0/* button1.scaleX * 0.8 */, 
        //         scaleY: 0/* button1.scaleY * 0.8 */, 
        //         duration: 50, 
        //         yoyo: true 
        //     });
        // });

        const button2 = this.button2 = this.scene.add.image(0, 0, 'atlas', 'marco');
        button2.setScale(0.3, 1);
        button2.setPosition((418 / 2), ((298 / 3) * 2) - (button1.displayWidth / 1.5));
        button2.angle = 90;
        this.add(button2);
        button2.setInteractive();
        // button2.on('pointerdown', () => {
        // });

        const button3 = this.button3 = this.scene.add.image(0, 0, 'atlas', 'marco');
        button3.setScale(0.3, 1);
        button3.setPosition((418 / 2), ((298 / 3) * 3) - (button1.displayWidth / 1.5));
        button3.angle = 90;
        this.add(button3);
        button3.setInteractive();
        // button3.on('pointerdown', () => {
        // });

        this.buttons.push(button1);
        this.buttons.push(button2);
        this.buttons.push(button3);

        this.miniGame = new HeadGame(this.scene, this, 'HeadGame');
    }

    show(element) {
        this.portrait.visible = element === 'portrait';
        this.part.visible = element === 'part';
        this.buttons.forEach(el => { el.visible = element === 'buttons'; });
        this.miniGame.buttons.forEach(el => { el.visible = element === 'buttons'; });
    }

    hide() {
        this.portrait.visible = false;
        this.part.visible = false;
        this.buttons.forEach(el => el.visible = false);
        this.miniGame.buttons.forEach(el => { el.visible = false; });
    }

    update() {
    }
}
