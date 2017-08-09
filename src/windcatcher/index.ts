
import { prepare, createElementWithClasses, addClassesToElement, destroySplash } from '../common/dom';

export async function enable() {
    const $splash = await prepare();
    for (var i = 0; i < 8; i++) {
        $splash.appendChild(createElementWithClasses('div', 'blade'));
    }
    addClassesToElement($splash, 'windcatcher');
}

export async function destroy(): Promise<void> {
    return destroySplash();
}
