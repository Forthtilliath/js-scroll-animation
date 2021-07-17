/**
 * 1. Event on move
 * 2. Si x 
 **/

import { wait } from './utils.js';

export default class Cursor {
    constructor({ element }) {
        this.element = element;
        this.addEvents();
        this.lastX = 0;
        this.lastY = 0;
    }

    addEvents() {
        window.addEventListener('mousemove', (e) => wait(()=> this.move(e)));
    }

    move(e) {
        let x = e.clientX;
        let y = e.clientY;

        let middleX = window.innerWidth / 2;
        let middleY = window.innerHeight / 2;
        console.log('moved',x,y,middleX,middleY);
    }
}
