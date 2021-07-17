// import Cursor from './cursor.js';
import Scroll from './scroll.js';
import Cloud from './components/cloud.js';
// import { wait } from './utils.js';

// TODO Si y'a le temps
// const unCurseur = new Cursor({element:document.querySelector('glass')});
const scroll = new Scroll();
const cloud = new Cloud();

// let img = document.querySelector('.view .image');

// https://greensock.com/forums/topic/27086-horizontal-image-slider-for-panorama-image-and-multiple-images/

// window.addEventListener(
//     'wheel',
//     (e) => {
//         wait(() => {
//             // console.log('img', img);
//             // console.log('img.style', img.style);
//             // console.log('img.style.backgroundPositionX', img.style.backgroundPositionX);
//             // let sPosX = img.style.backgroundPositionX;
//             // let iPosX = sPosX === '' ? 0 : Number(sPosX.split('px')[0]);
//             // console.log(iPosX);
//             // if (e.wheelDeltaY > 0) {
//             //     img.style.backgroundPositionX = iPosX + 500 + 'px';
//             //     // img.classList.remove('un');
//             //     // img.classList.add('deux');
//             // } else {
//             //     img.style.backgroundPositionX = iPosX - 500 + 'px';
//             //     // img.classList.remove('deux');
//             //     // img.classList.add('un');
//             // }
//             if (e.wheelDeltaY > 0) {
//                 move('');
//             } else {
//                 move('-');
//             }
//         });
//     },
//     { passive: false },
// );

// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM entièrement chargé et analysé');
// });

// function move(sens = '') {
//     var tl = new TimelineMax({ repeat: 0 });
//     let sPosX = img.style.backgroundPositionX;
//     let iPosX = sPosX === '' ? 0 : Number(sPosX.split('px')[0]);
//     console.log(iPosX);
//     tl.to(img, 3, {
//         backgroundPositionX: sens + (iPosX + 500) + 'px',
//         //autoRound:false,
//         ease: Linear.easeNone,
//     });
// }
