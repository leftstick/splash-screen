

import { prepare, createElementWithText, addClassesToElement, destroySplash } from '../common/dom';

export async function enable() {
    const $splash = await prepare();
    const $span = createElementWithText('span', 'Loading');
    $splash.appendChild($span);
    addClassesToElement($splash, 'tailing');
}

export async function destroy(): Promise<void> {
    return destroySplash();
}
