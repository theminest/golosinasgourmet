const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async() => {
    await imagemin(['images/*.jpg'], {
        destination: 'build/images',
        plugins: [
            imageminMozjpeg()
        ]
    });

    console.log('Images optimized');
})();