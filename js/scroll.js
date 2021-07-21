export default class Scroll {
    constructor({ cloud, tree, sun, hills }) {
        this.addEvents();

        this.speedClouds = 0.1 - Math.random() * 0.2; // -1 à 1
        this.speedTrees = -0.1;
        this.speedHills = -0.5;
        this.speedSun = 0.03;

        this.currentPosition = 0;

        this.cloud = cloud;
        this.hills = hills;
        this.sun = sun;
        this.tree = tree;

        // Récupère les positions initiales des éléments car on modifiera leur position à part de ca et de currentPosition
        // this.initialPositionSun = {
        //     left: Number(sun.style.left.split('px')[0]),
        //     top: Number(sun.style.top.split('px')[0]),
        // };
        this.initialPositionSun = sun.getInitialPosition();
        this.initialPositionHills = { left: Number(hills.style.backgroundPositionX.split('px')[0]) };
    }

    addEvents() {
        window.addEventListener('wheel', (e) => this.move(e));
    }

    move(e) {
        this.currentPosition += e.deltaY;
        this.moveClouds();
        this.moveSun();
        this.moveHills();
        this.moveTrees();
    }

    moveClouds() {
        this.cloud.move(this.currentPosition * this.speedClouds);
    }

    moveSun() {
        // this.sun.style.left = this.initialPositionSun.left + this.currentPosition * this.speedSun + 'px';
        this.sun.move(this.currentPosition * this.speedSun);
        // TODO Faire que le soleil monte dans le ciel puis redescende
    }

    moveHills() {
        this.hills.style.backgroundPositionX =
            this.initialPositionHills.left + this.currentPosition * this.speedHills + 'px';
    }

    moveTrees() {
        this.tree.move(this.currentPosition * this.speedTrees);;
    }
}
