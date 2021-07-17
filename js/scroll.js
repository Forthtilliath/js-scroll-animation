import Tree from './components/tree.js';

export default class Scroll {
    constructor() {
        this.addEvents();

        this.currentPosition = 0;
    }

    addEvents() {
        // window.addEventListener('wheel', (e) => wait(() => this.move(e), 0.5));
        window.addEventListener('wheel', (e) => this.move(e));
        console.log(new Tree());
    }

    move(e) {
        this.currentPosition += e.deltaY;
        
        console.log('currentPosition', this.currentPosition);
    }
}
