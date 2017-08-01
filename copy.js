const fs = require('fs');
const path = require('path');

const names = [
    'tailing',
    'audio-wave',
    'windcatcher',
    'spinner-section',
    'spinner-section-far',
    'circular'
];

const origin = fs.createReadStream(path.resolve(__dirname, 'types', 'feature.min.d.ts'), {
    encoding: 'utf8'
});

names.forEach(name => {
    const fileName = `splash-screen-${name}.min.d.ts`;
    const out = fs.createWriteStream(path.resolve(__dirname, 'dist', fileName));
    origin.pipe(out);
});