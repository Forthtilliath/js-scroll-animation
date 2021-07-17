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
        window.addEventListener('mousemove', (e) => wait(() => this.move(e), 0.5));
    }

    move(e) {
        let cursorX = e.clientX;
        let cursorY = e.clientY;

        // let middleX = window.innerWidth / 2;
        // let middleY = window.innerHeight / 2;
        const rect = document.querySelector('.glass').getBoundingClientRect();
        let middleX = Math.floor(rect.x + rect.width / 2);
        let middleY = Math.floor(rect.y + rect.height / 2);
        console.log('moved', cursorX, cursorY, middleX, middleY);

        if (cursorX > middleX) {
            console.log('right');
            // document.querySelector('.glass-subcontainer > .glass-bg:nth-child(1)').style.flexGrow = 0.8;
            // document.querySelector('.glass-subcontainer > .glass-bg:nth-child(3)').style.flexGrow = 1;
            document
                .querySelector('.glass-subcontainer > .glass-bg:nth-child(1)')
                .animate([{ flexGrow: 0.8 }, { duration: 1000 }]);
        }

        if (cursorX < middleX) {
            console.log('left');
            // document.querySelector('.glass-subcontainer > .glass-bg:nth-child(1)').style.flexGrow = 1;
            // document.querySelector('.glass-subcontainer > .glass-bg:nth-child(3)').style.flexGrow = 0.8;
            document
            .querySelector('.glass-subcontainer > .glass-bg:nth-child(1)')
            .animate([{ flexGrow: 1.25 }, { duration: 1000 }]);
        }

        if (cursorY > middleY) {
            console.log('up');
            document.querySelector('.glass-container > .glass-bg:nth-child(1)').style.flexGrow = 0.8;
            document.querySelector('.glass-container > .glass-bg:nth-child(3)').style.flexGrow = 1;
        }

        if (cursorY < middleY) {
            console.log('down');
            document.querySelector('.glass-container > .glass-bg:nth-child(1)').style.flexGrow = 1;
            document.querySelector('.glass-container > .glass-bg:nth-child(3)').style.flexGrow = 0.8;
        }
    }
}
