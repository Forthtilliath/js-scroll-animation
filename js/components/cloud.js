// https://www.clicktorelease.com/blog/how-to-make-clouds-with-css-3d/

export default class Cloud {
    constructor() {
        /**
         * objects is an array of cloud bases
         * layers is an array of cloud layers
         **/
        this.objects = [];
        this.layers = [];
        this.nbClouds = 15;

        this.world = document.getElementById('world');
        this.viewport = document.getElementById('viewport');

        this.generate();
    }

    generate() {
        this.objects = [];
        this.layers = [];
        if (this.world.hasChildNodes()) {
            while (this.world.childNodes.length >= 1) {
                this.world.removeChild(world.firstChild);
            }
        }

        for (let j = 0; j < this.nbClouds; j++) {
            this.objects.push(this.createCloud());
        }
    }

    createCloud() {
        let div = document.createElement('div');
        div.className = 'cloudBase';
        const rect = this.world.getBoundingClientRect();
        // console.log(rect);
        let random_x = Math.random() * rect.width;
        let random_y = Math.random() * rect.height;
        let random_z = 256 - Math.random() * 50;
        let random_s = 0.3;
        let t = `translateX(${random_x}px) translateY(${random_y}px) translateZ(${random_z}px) scale(${random_s})`;
        div.style.transform = t;
        this.world.appendChild(div);

        for (let j = 0; j < 5 + Math.round(Math.random() * 10); j++) {
            let cloud = document.createElement('img');

            cloud.src = 'http://www.clicktorelease.com/code/css3dclouds/cloud.png';
            cloud.className = 'cloudLayer';
            cloud.style.opacity = 0.8;
            let random_x = 256 - Math.random() * 512;
            let random_y = 256 - Math.random() * 200;
            let random_z = 100 - Math.random() * 200;
            let random_a = Math.random() * 360;
            let random_s = 0.25 + Math.random();
            random_x *= 0.2;
            random_y *= 0.2;
            cloud.data = {
                x: random_x,
                y: random_y,
                z: random_z,
                a: random_a,
                s: random_s,
                speed: 0.1 * Math.random(),
            };
            // let t = `translateX(${random_x}px) translateY(${random_y}px) translateZ(${random_z}px) rotateZ(${random_a}deg) scale(${random_s})`;
            let t = `translateX(${random_x}px) translateY(${random_y}px) translateZ(${random_z}px) rotateZ(${random_a}deg)`;
            cloud.style.transform = t;
            div.appendChild(cloud);
            this.layers.push(cloud);
        }

        return div;
    }
}
