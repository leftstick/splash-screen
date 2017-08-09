import { destroySplash } from './common/dom';
import { enable as tailing } from './tailing';
import { enable as audioWave } from './audio-wave';
import { enable as windcatcher } from './windcatcher';
import { enable as spinnerSection } from './spinner-section';
import { enable as spinnerSectionFar } from './spinner-section-far';
import { enable as circular } from './circular';

export function enable(theme: THEME): Promise<void> {
    if (theme === 'tailing') {
        return tailing();
    }

    if (theme === 'audio-wave') {
        return audioWave();
    }

    if (theme === 'windcatcher') {
        return windcatcher();
    }

    if (theme === 'spinner-section') {
        return spinnerSection();
    }

    if (theme === 'spinner-section-far') {
        return spinnerSectionFar();
    }

    if (theme === 'circular') {
        return circular();
    }
    return Promise.reject(new Error('Unknown theme'));
}

export function destroy(): Promise<void> {
    return destroySplash();
}

export type THEME = 'tailing' | 'audio-wave' | 'windcatcher' | 'spinner-section' | 'spinner-section-far' | 'circular';
