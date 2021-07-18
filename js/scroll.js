export default class Scroll {
    constructor({ cloud, tree, sun, hills }) {
        this.addEvents();

        this.speedClouds = 1 - Math.random() * 2; // -1 à 1
        this.speedTrees = 1;
        this.speedHills = 1;
        this.speedSun = 0.03;

        this.currentPosition = 0;

        this.clouds = [];
        this.trees = [];

        this.cloud = cloud;
        this.hills = hills;
        this.sun = sun;
        this.tree = tree;

        this.initialPositionSun = { left: Number(sun.style.left.split('px')[0]), top: sun.style.top };

        this.setupElements();
    }

    setupElements() {
        this.clouds = document.querySelectorAll('.cloudBase');
        this.trees = document.querySelector('.tree');
    }

    addEvents() {
        // window.addEventListener('wheel', (e) => wait(() => this.move(e), 0.5));
        window.addEventListener('wheel', (e) => this.move(e));
    }

    move(e) {
        this.currentPosition += e.deltaY;
        // this.moveClouds();
        this.moveSun();

        console.log('currentPosition', this.currentPosition);
    }

    moveClouds() {
        // console.log('moveclouds', this.clouds);
        const regExec = /(\w+)\(([^)]*)\)/g;
        this.clouds.forEach((cloud) => {
            let arrTransform = [];
            let m;
            while ((m = regExec.exec(cloud.style.transform))) {
                arrTransform.push({ name: m[1], value: m[2] });
            }
            // let arrTransform = cloud.style.transform.split(' ');
            // console.log(arrTransform);
        });
    }

    moveSun() {
        this.sun.style.left = this.initialPositionSun.left + this.currentPosition * this.speedSun + 'px';
        // TODO Faire que le soleil monte dans le ciel puis redescende
    }
}
