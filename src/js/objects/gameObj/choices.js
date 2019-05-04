import H from '../../utils/helpers';
import Head from './choices/head';
import Hand from './choices/hand';
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
        this.hand = new Hand(this.scene, this, 'Hand');
        this.leg = new Leg(this.scene, this, 'Leg');
    }

    update() {
    }
}
