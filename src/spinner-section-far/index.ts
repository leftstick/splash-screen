
import { prepare, createElementWithClasses, addClassesToElement, destroySplash } from '../common/dom';

export async function enable() {
    const $splash = await prepare();

    addClassesToElement($splash, 'spinner-section-far');
}

export async function destroy(): Promise<void> {
    return destroySplash();
}
