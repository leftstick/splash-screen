
import { prepare, addClassesToElement, destorySplash } from '../common/dom';

export async function enable() {
    const $splash = await prepare();
    addClassesToElement($splash, 'audio-wave');
}

export async function destory(): Promise<void> {
    return destorySplash();
}
