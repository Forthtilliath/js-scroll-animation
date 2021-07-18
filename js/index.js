// import Cursor from './cursor.js';
import Scroll from './scroll.js';
import Cloud from './components/cloud.js';
import Tree from './components/tree.js';

window.addEventListener('DOMContentLoaded', (event) => {
    // TODO Si y'a le temps
    // const unCurseur = new Cursor({element:document.querySelector('glass')});

    // Element qui sert de référence à tous les autres éléments !
    const mainElement = document.querySelector('.glass');

    // Elements déjà dans le html
    const sun = document.querySelector('.sun');
    const hills = document.querySelector('.hills');

    // Elements générés par JS
    const cloud = new Cloud({ number: 50 });
    const tree = new Tree({ number: 15 });
    const trees = document.querySelectorAll('.tree img');

    // Placement des éléments en fonction du glass
    function positioningElementsBy(element) {
        let rect = element.getBoundingClientRect();

        // Adapte la position des colinnes
        hills.style.top = rect.top + rect.height * 0.6 + 'px';

        // Adapte la position du soleil
        // TODO Soleil qui pop aléatoirement et suit une courbre pour monter ou descendre
        sun.style.top = rect.top + rect.height * 0.05 + 'px';
        sun.style.left = rect.left + rect.width * 0.025 + 'px';

        // Adapte la taille et la position de chacun des arbres
        trees.forEach((unArbre) => {
            Object.assign(unArbre.style, {
                height: rect.height * 0.5 + 'px',
                bottom: -rect.bottom + rect.height * 0.25 + 'px',
                left: rect.width * (2 - Math.random() * 4) + 'px',
            });
        });

        let baseHeight = 500;
        let ratio = rect.height / baseHeight;

        cloud.generate(ratio);
    }
    positioningElementsBy(mainElement);
    // Ajouter un delai sur le resize
    // window.addEventListener('resize', () => wait(() => positioningElementsBy(mainElement), 0.5));
    window.addEventListener('resize', () => positioningElementsBy(mainElement));

    const scroll = new Scroll({ cloud, tree, sun, hills });
});
