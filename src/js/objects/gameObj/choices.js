import H from '../../utils/helpers';
import Hand from './choices/hand';
import Head from './choices/head';
import Leg from './choices/leg';

export default class ChoicesCnt extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        this.members = [];

        this.scene.ee.on('countdown', () => {
            if (!this.leg.showed)
                this.scene.choices.showPortraits();
        });

        this.create();
    }

    create() {
        this.head = new Head(this.scene, this, 'Head');
        this.members.push(this.head);
        // this.head.show('part');
        // this.head.show('portrait');
        // this.head.show('buttons');
        // this.head.hide();
        
        this.hand = new Hand(this.scene, this, 'Hand');
        this.members.push(this.hand);
        // this.hand.show('part');
        // this.hand.show('portrait');
        // this.hand.show('buttons');
        // this.hand.hide();
        
        this.leg = new Leg(this.scene, this, 'Leg');
        this.members.push(this.leg);
        // this.leg.show('part');
        // this.leg.show('portrait');
        // this.leg.show('buttons');
        // this.leg.hide();

        // this.selectPart('hand');
        // this.selectPart('head');
        // this.selectPart('leg');
        // this.defeatedBoss('hand');
        // this.defeatedBoss('head');
        // this.defeatedBoss('leg');
        // this.showControls();
        // this.showPortraits();
        this.showParts();
    }

    hideMembers() {
        this.members.forEach((el) => { el.hide(); });
    }

    // PARTS
    showParts() {
        let cont = 0;
        this.hideMembers();
        this.members.forEach((el) => {
            if (!el.selectedPart) el.show('part');
            else {
                el.hide();
                cont++;
            }
        });
        setTimeout(() => {
            if (cont >= 3) {
                this.scene.text.setText('Te has\npasado\nel juego', '94px');
                this.scene.input.on('pointerdown', () => {
                    this.scene.scene.start('MenuScene');
                })
            } else {
                this.scene.text.setText('Elige un\nmiembro', '94px');
                
            }
            this.scene.text.show();
        }, 200);
    }

    selectPart(part) {
        this.scene.player.show(part);
        this[part].selectedPart = true;
        this.scene.text.hide();
        setTimeout(() => { this.showPortraits(); }, 200);
    }

    // BOSSES
    showPortraits() {
        this.scene.text.hide();
        this.hideMembers();
        this.members.forEach((el) => { if (!el.defeatedBoss) el.show('portrait'); });
        setTimeout(() => {
            this.scene.text.setText('¡Pelea contra\nun enemigo!', '74px');
            this.scene.text.show();
        }, 200);
    }

    defeatedBoss(part) {
        this[part].defeatedBoss = true;
        // TODO: GOTO BOSS
    }

    // CONTROLS
    showControls() {
        this.scene.dangerSound.play({ loop: false });

        this.scene.timer.countdown(5);
        this.scene.text.hide();
        this.hideMembers();
        this.members.forEach((el) => {
            if (el.selectedPart) el.show('buttons');
            else el.hide();
        });
    }

    selectControl(member) {
        // TODO: GOTO BOSS
    }

    update() {
    }
}
