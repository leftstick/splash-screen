
import { prepare, addClassesToElement, destroySplash } from '../common/dom';

export async function enable() {
    const $splash = await prepare();
    addClassesToElement($splash, 'audio-wave');
}

export async function destroy(): Promise<void> {
    return destroySplash();
}
