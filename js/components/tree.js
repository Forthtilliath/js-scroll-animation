const trees = [...Array(6).keys()].map((x) => `/images/tree/${x}.png`);

/**
 * Nouvel arbre =>
 *  genere balise image avec url random
 *  genere position aléatoire
 *
 * */

export default class Tree {
    constructor({ index = -1, nbTrees = 1 }) {
        this.index = index;
        this.nbTrees = nbTrees;

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
        // this.elements.forEach((tree) => {
        //     console.log(tree);
        //     // console.log('before', tree.style.left, x);
        //     tree.style.left = Number(tree.style.left.split('px')[0]) + x + 'px';
        //     // console.log('after', tree.style.left, x);
        // });
        // let newLeft = Number(this.container.style.left.split('px')[0]) + x;
        this.container.style.left = x + 'px';
    }
}
