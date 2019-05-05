import H from '../../../utils/helpers';
import HandGame from './armGame';

export default class Hand extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        // h: 298
        // w: 418
        this.x = 13;
        this.y = 410;

        this.buttons = [];

        this.create();
    }

    create() {
        const portrait = this.portrait = this.scene.add.image(0, 0, 'atlas', 'portrait_gorilla');
        portrait.setPosition(418 / 2, 298 / 2);
        portrait.setScale(0.73);
        this.add(portrait);
        portrait.setInteractive();
        portrait.on('pointerdown', () => {
            this.parentContainer.showControls();
            this.scene.monster.monkey();
        });

        const part = this.part = this.scene.add.image(0, 0, 'atlas', 'boton_seleccion_brazo');
        part.setPosition(418 / 2, 298 / 2);
        part.setScale(0.5);
        this.add(part);
        part.setInteractive();
        part.on('pointerdown', () => {
            this.parentContainer.selectPart('hand');
        });

        const buttonPiedra = this.buttonPiedra = this.scene.add.image(0, 0, 'atlas', 'boton_piedra');
        buttonPiedra.setPosition((418 / 3) - 15, (298 / 3) - 15);
        buttonPiedra.setScale(0.3);
        this.add(buttonPiedra);
        buttonPiedra.setInteractive();
        buttonPiedra.on('pointerdown', () => {
            this.miniGame.playUser(0);
            this.scene.tweens.add({
                targets: buttonPiedra,
                scaleX: '-=0.1',
                scaleY: '-=0.1',
                duration: 50,
                yoyo: true
              });
        });

        const buttonPapel = this.buttonPapel = this.scene.add.image(0, 0, 'atlas', 'boton_papel');
        buttonPapel.setPosition(((418 / 3) * 2) + 15, (298 / 3) - 15);
        buttonPapel.setScale(0.3);
        this.add(buttonPapel);
        buttonPapel.setInteractive();
        buttonPapel.on('pointerdown', () => {
            this.miniGame.playUser(1);
            this.scene.tweens.add({
                targets: buttonPapel,
                scaleX: '-=0.1',
                scaleY: '-=0.1',
                duration: 50,
                yoyo: true
              });
        });

        const buttonTijera = this.buttonTijera = this.scene.add.image(0, 0, 'atlas', 'boton_tijera');
        buttonTijera.setPosition((418 / 2) + 8, ((298 / 3) * 2) + 15);
        buttonTijera.setScale(0.3);
        this.add(buttonTijera);
        buttonTijera.setInteractive();
        buttonTijera.on('pointerdown', () => {
            this.miniGame.playUser(2);
            this.scene.tweens.add({
                targets: buttonTijera,
                scaleX: '-=0.1',
                scaleY: '-=0.1',
                duration: 50,
                yoyo: true
              });
        });

        this.buttons.push(buttonPiedra);
        this.buttons.push(buttonPapel);
        this.buttons.push(buttonTijera);

        this.miniGame = new HandGame(this.scene, this, 'HandGame');
    }

    show(element) {
        this.portrait.visible = element === 'portrait';
        this.part.visible = element === 'part';
        this.buttons.forEach(el => el.visible = element === 'buttons');
    }

    hide() {
        this.portrait.visible = false;
        this.part.visible = false;
        this.buttons.forEach(el => el.visible = false);
    }

    update() {
    }
}
