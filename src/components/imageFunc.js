const jimp = require('jimp');
const sizeOf = require('image-size');

module.exports = class ImageFunction {
    constructor() {
        this.width = 0;
        this.height = 0;
    }    
    scalingAndSave(source, destination, format) {
        jimp.read(source, function (err, test) {
            let w = this.width > this.height ? format : jimp.AUTO;
            let h = this.width < this.height ? format : jimp.AUTO;
            if (this.width == this.height) w = 200, h = 200;
            test.resize(w, h)
                .quality(50)
                .write(`${destination}.${test.getExtension()}`);
                // .write(`./files/file/mm.${test.getExtension()}`);
        })
    }
    resizeAndSave(source, destination, format) {
        sizeOf(source, (err, dimensions) => {
            this.width = dimensions.width;
            this.heigh = dimensions.height;
            this.scalingAndSave(source, destination, format);
        })
    }
}
