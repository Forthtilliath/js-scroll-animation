// import Cursor from './cursor.js';
import Scroll from './scroll.js';
import Cloud from './components/cloud.js';
import Tree from './components/tree.js';
import Sun from './components/sun.js';

window.addEventListener('DOMContentLoaded', (event) => {
    // TODO Si y'a le temps
    // const unCurseur = new Cursor({element:document.querySelector('glass')});

    // Element qui sert de référence à tous les autres éléments !
    const mainElement = document.querySelector('.glass');

    // Elements déjà dans le html
    // const sun = document.querySelector('.sun');
    const hills = document.querySelector('.hills');

    // Elements générés par JS
    const sun = new Sun();
    const cloud = new Cloud({ number: 50 });
    const tree = new Tree({ number: 15 });
    const trees = document.querySelectorAll('.tree img');

    // Placement des éléments en fonction du glass
    function positioningElementsBy(element) {

        let rect = element.getBoundingClientRect();

        // Adapte la position des colinnes
        hills.style.top = rect.top + rect.height * 0.6 + 'px';

        // Adapte la position et la taille du soleil
        sun.recalculatePosition(rect);
        sun.setScaleFromX();

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

        // Affiche la scène
        mainElement.classList.remove('hidden');
    }
    
    // positioningElementsBy(mainElement);
    window.addEventListener('resize', () => positioningElementsBy(mainElement));

    new Scroll({ cloud, tree, sun, hills });
});
