
export async function prepare(): Promise<HTMLElement> {
    await destroySplash();
    const $body = await waitForBody();
    addClassesToElement($body, 'splashing');

    const $splash = createElementWithClasses('div', 'splash');
    $body.appendChild($splash);
    return $splash;
}

export async function destroySplash(): Promise<void> {
    const $body = await waitForBody();
    removeClassesToElement($body, 'splashing');
    const $splash = $body.querySelector('div.splash');
    if ($splash) {
        $body.removeChild($splash);
    }
}

function waitForBody(): Promise<HTMLElement> {

    return new Promise<HTMLElement>((resolve, reject) => {
        let $body = document.body;
        if ($body) {
            return resolve($body);
        }

        const id = setInterval(() => {
            $body = document.body;
            if (!$body) {
                return;
            }
            clearInterval(id);
            resolve($body);
        }, 100);
    });
}

export function addClassesToElement(el: HTMLElement, ...clses: Array<string>): void {
    const finalClses = clses.filter(cls => !hasClass(el, cls));
    el.classList.add(...finalClses);
}

export function removeClassesToElement(el: HTMLElement, ...clses: Array<string>): void {
    const finalClses = clses.filter(cls => hasClass(el, cls));
    el.classList.remove(...finalClses);
}

function hasClass(el: HTMLElement, cls: string) {
    return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

export function createElementWithClasses(tag: string, ...clses: Array<string>): HTMLElement {
    const ele = document.createElement(tag);

    ele.classList.add(...clses);

    return ele;
}

export function createElementWithText(tag: string, txt: string): HTMLElement {
    const ele = document.createElement(tag);
    ele.innerText = txt;
    return ele;
}
