import 'bulma/css/bulma.css';
import '../../dist/splash-screen.min.css';
import 'highlight.js/styles/darcula.css';
import * as hljs from 'highlight.js';
import { enable, destory, THEME } from '../../';


import '../less/style.less';

hljs.initHighlightingOnLoad();

const $demoEL = document.querySelector('.demo-area');

$demoEL.addEventListener('click', (e: MouseEvent) => {
    const target = <HTMLElement>e.target;
    if (target.tagName !== 'A' || !target.classList.contains('button')) {
        return;
    }
    const theme = target.parentElement.parentElement.dataset['theme'];
    const isEnable = target.innerText === 'ENABLE';

    if (isEnable) {
        return enable(theme as THEME);
    }
    destory();

}, false);

// enable('tailing');