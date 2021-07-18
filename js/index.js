// import Cursor from './cursor.js';
import Scroll from './scroll.js';
import Cloud from './components/cloud.js';
import Tree from './components/tree.js';

import { wait } from './utils.js';

// TODO Si y'a le temps
// const unCurseur = new Cursor({element:document.querySelector('glass')});
window.addEventListener('DOMContentLoaded', (event) => {
    // Element qui sert de référence à tous les autres éléments !
    const mainElement = document.querySelector('.glass');

    // Elements déjà dans le html
    const sun = document.querySelector('.sun');
    const hills = document.querySelector('.hills');

    // Elements générés par JS
    const cloud = new Cloud();
    const tree = new Tree({ nbTrees: 10 });
    const tree_ = document.querySelector('.tree');
    const trees = document.querySelectorAll('.tree img'); // TODO QSA

    // Placement des éléments en fonction du glass
    function positioningElementsBy(element) {
        let rect = element.getBoundingClientRect();

        hills.style.top = rect.top + rect.height * 0.6 + 'px';

        sun.style.top = rect.top + rect.height * 0.05 + 'px';
        sun.style.left = rect.left + rect.width * 0.025 + 'px';

        // tree_.style.bottom = rect.bottom - rect.height * 0.82 + 'px';
        // tree_.style.left = rect.left + rect.width * 0.025 + 'px';

        trees.forEach((unArbre) => {
            // unArbre.style.height = rect.height * 0.5 + 'px';
            // tree_.style.bottom = rect.bottom - rect.height * 0.82 + 'px';
            // tree_.style.left = rect.left + rect.width * 0.025 + 'px';

            Object.assign(unArbre.style, {
                height: rect.height * 0.5 + 'px',
                // bottom: rect.bottom - rect.height * 0.82 + 'px',
                bottom: -rect.bottom + rect.height * 0.25 + 'px',
                // left: rect.left + rect.width * 0.025 + 'px',
                left: rect.width * (2 - Math.random() * 4) + 'px',
            });

            console.log(rect.width * (2 - Math.random() * 4) + 'px');
        });

        let baseHeight = 500;
        let ratio = rect.height / baseHeight;

        cloud.generate(ratio);
        // Important ! A faire après le generate
        // const clouds = document.querySelectorAll('.cloudBase');

        // clouds.forEach((unNuage) => {
        //     let arrTransform = unNuage.style.transform.split(' ');
        //     // Supprime scale si déjà ajouté
        //     if (arrTransform.length > 3) arrTransform.pop();
        //     let transform = arrTransform.join(' ');
        //     unNuage.style.transform = transform + ` scale(${ratio})`;
        // });
    }
    positioningElementsBy(mainElement);
    // window.addEventListener('resize', () => wait(() => positioningElementsBy(mainElement), 0.5));
    window.addEventListener('resize', () => positioningElementsBy(mainElement));

    const scroll = new Scroll({ cloud, tree, sun, hills });
});
