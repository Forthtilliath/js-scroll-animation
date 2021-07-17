// import Cursor from './cursor.js';
import Scroll from './scroll.js';
import Cloud from './components/cloud.js';
import Tree from './components/tree.js';

// import { wait } from './utils.js';

// TODO Si y'a le temps
// const unCurseur = new Cursor({element:document.querySelector('glass')});

const sun = document.querySelector('.sun');
const hills = document.querySelector('.hills');
const cloud = new Cloud();
const tree = new Tree();
const tree_ = document.querySelector('.tree');
const trees = document.querySelector('.tree img');

// Placement des éléments en fonction du glass
function positioningElementsBy(element) {
    let rect = element.getBoundingClientRect();
    console.log(rect);
    hills.style.top = rect.top + rect.height * 0.6 + 'px';

    sun.style.top = rect.top + rect.height * 0.05 + 'px';
    sun.style.left = rect.left + rect.width * 0.025 + 'px';

    tree_.style.bottom = rect.bottom - rect.height * 0.82 + 'px';
    tree_.style.left = rect.left + rect.width * 0.025 + 'px';
    trees.style.height = rect.height * 0.5 + 'px';
}
positioningElementsBy(document.querySelector('.glass'));
window.addEventListener('resize', () => positioningElementsBy(document.querySelector('.glass')));

const scroll = new Scroll();
