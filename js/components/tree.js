const trees = [...Array(6).keys()].map((x) => `/images/tree/${x}.png`);

export default class Tree {
    constructor({ index = -1, number = 1 }) {
        this.index = index;
        this.nbTrees = number;

        this.initialX = 0;
        this.initialY = 0;

        this.container = document.querySelector('.tree');

        this.createElements();

        this.elements = this.container.querySelectorAll('img');
    }

    getContainer() {
        return this.container;
    }

    getElements() {
        return this.elements;
    }

    createElements() {
        for (let i = 0; i < this.nbTrees; i++) {
            this.createElement();
        }
    }

    createElement() {
        // Affecte l'arbre choisit sinon en choisit un aléatoirement
        const url =
            trees[this.index > 0 && this.index < trees.length ? this.index : Math.floor(Math.random() * trees.length)];

        let img = document.createElement('img');
        img.src = url;
        img.alt = 'tree';
        this.container.appendChild(img);
    }

    move(x) {
        this.container.style.left = x + 'px';
    }
}
