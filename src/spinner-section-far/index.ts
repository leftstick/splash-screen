
import { prepare, createElementWithClasses, addClassesToElement, destorySplash } from '../common/dom';

export async function enable() {
    const $splash = await prepare();

    addClassesToElement($splash, 'spinner-section-far');
}

export async function destory(): Promise<void> {
    return destorySplash();
}
