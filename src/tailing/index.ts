

import { prepare, createElementWithText, addClassesToElement, destorySplash } from '../common/dom';

export async function enable() {
    const $splash = await prepare();
    const $span = createElementWithText('span', 'Loading');
    $splash.appendChild($span);
    addClassesToElement($splash, 'tailing');
}

export async function destory(): Promise<void> {
    return destorySplash();
}
