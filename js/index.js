// import Cursor from './cursor.js';
import Scroll from './scroll.js';
import Cloud from './components/cloud.js';
import Tree from './components/tree.js';

// import { wait } from './utils.js';

// TODO Si y'a le temps
// const unCurseur = new Cursor({element:document.querySelector('glass')});
window.addEventListener('DOMContentLoaded', (event) => {
    const sun = document.querySelector('.sun');
    const hills = document.querySelector('.hills');
    const cloud = new Cloud();
    const tree = new Tree();
    const tree_ = document.querySelector('.tree');
    const trees = document.querySelector('.tree img');

    // Placement des éléments en fonction du glass
    function positioningElementsBy(element) {
        let rect = element.getBoundingClientRect();

        hills.style.top = rect.top + rect.height * 0.6 + 'px';

        sun.style.top = rect.top + rect.height * 0.05 + 'px';
        sun.style.left = rect.left + rect.width * 0.025 + 'px';

        tree_.style.bottom = rect.bottom - rect.height * 0.82 + 'px';
        tree_.style.left = rect.left + rect.width * 0.025 + 'px';
        trees.style.height = rect.height * 0.5 + 'px';

        let baseHeight = 500;
        let ratio = rect.height / baseHeight;
        const world = document.querySelector('.world');
        // console.log(document.querySelector('.world').length, world.style);
        // world.style.top = rect.top - rect.height * 0.1;
        // world.style.height = rect.height * 0.4 - rect.height * 0.1;
        // console.log(world, world.style);
        // console.log('top', world.style.top, 'height', world.style.height);

        // cloud.setWorldStyle({ top: rect.top - rect.height * 0.1, height: rect.height * 0.4 - rect.height * 0.1 });

        cloud.generate();
        // Important ! A faire après le generate
        const clouds = document.querySelectorAll('.cloudBase');

        clouds.forEach((item) => {
            let arrTransform = item.style.transform.split(' ');
            // Supprime scale si déjà ajouté
            if (arrTransform.length > 3) arrTransform.pop();
            let transform = arrTransform.join(' ');
            item.style.transform = transform + ` scale(${ratio})`;
        });
    }
    positioningElementsBy(document.querySelector('.glass'));
    window.addEventListener('resize', () => positioningElementsBy(document.querySelector('.glass')));

    const scroll = new Scroll();
});
