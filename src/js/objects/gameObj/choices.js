import H from '../../utils/helpers';
import Hand from './choices/hand';
import Head from './choices/head';
import Leg from './choices/leg';

export default class ChoicesCnt extends Phaser.GameObjects.Container {
    constructor(scene, parent = null, name) {
        super(scene);

        if (parent) parent.add(this);
        this.name = name;

        this.create();
    }

    create() {
        this.head = new Head(this.scene, this, 'Head');
        this.head.show('part');
        // this.head.show('portrait');
        // this.head.show('buttons');
        // this.head.hide();
        
        this.hand = new Hand(this.scene, this, 'Hand');
        this.hand.show('part');
        // this.hand.show('portrait');
        // this.hand.show('buttons');
        // this.hand.hide();
        
        this.leg = new Leg(this.scene, this, 'Leg');
        this.leg.show('part');
        // this.leg.show('portrait');
        // this.leg.show('buttons');
        // this.leg.hide();
    }

    update() {
    }
}
