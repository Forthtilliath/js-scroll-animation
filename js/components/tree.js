const trees = [...Array(5).keys()].map((x) => `/images/tree/${x}.png`);

/**
 * Nouvel arbre =>
 *  genere balise image avec url random
 *  genere position aléatoire
 *
 * */

export default class Tree {
    constructor(index = -1) {
        // Affecte l'arbre choisit sinon en choisit un aléatoirement
        this.url = trees[index > 0 && index < trees.length ? index : Math.floor(Math.random() * trees.length)];

        this.initialX = 0;
        this.initialY = 0;

        this.container = document.querySelector('.tree');

        this.createElement();
    }

    createElement() {
        let img = document.createElement('img');
        img.src = this.url;
        this.container.appendChild(img);
    }
}
