
import { prepare, createElementWithClasses, addClassesToElement, destroySplash } from '../common/dom';

export async function enable() {
    const $splash = await prepare();

    const arr = [
        'spinner-blue',
        'spinner-red',
        'spinner-yellow',
        'spinner-green'
    ];

    for (let i = 0; i < arr.length; i++) {
        const layer = createElementWithClasses('div', 'spinner-layer', arr[i]);

        const circleLeft = createElementWithClasses('div', 'circle-clipper', 'left');
        const circle01 = createElementWithClasses('div', 'circle');

        circleLeft.appendChild(circle01);
        layer.appendChild(circleLeft);

        const gapPatch = createElementWithClasses('div', 'gap-patch');
        const circle02 = createElementWithClasses('div', 'circle');

        gapPatch.appendChild(circle02);
        layer.appendChild(gapPatch);

        const circleRight = createElementWithClasses('div', 'circle-clipper', 'right');
        const circle03 = createElementWithClasses('div', 'circle');
        circleRight.appendChild(circle03);

        layer.appendChild(circleRight);

        $splash.appendChild(layer);
    }

    addClassesToElement($splash, 'circular');
}

export async function destroy(): Promise<void> {
    return destroySplash();
}
