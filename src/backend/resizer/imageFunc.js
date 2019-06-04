const jimp = require('jimp');

module.exports = class ImageFunction {
    resizeAndSave(source, destination, format, ) {
        jimp.read(source, (err, test) => {
            
            const { width, height } = test.bitmap;
            const { w, h } = this._rescale({ width, height }, format)

            test.resize(w, h)
                .quality(50)
                .write(`${destination}.${test.getExtension()}`);
            // .write(`./files/file/mm.${test.getExtension()}`);
        })
    }

    _rescale({ width, height }, format) {
        if (width == height) return {
            w: format,
            h: format
        }

        return {
            w: width > height ? format : jimp.AUTO,
            h: width < height ? format : jimp.AUTO
        }
    }
}
