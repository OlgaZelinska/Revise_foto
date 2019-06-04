const ImageFunction = require("./imageFunc.js");
const ImageProp = require("./imageProp.js");

const fs = require('fs');

const imageFunction = new ImageFunction();

module.exports = function resize(path, format) {

  fs.readdir(path, function (err, data) {

    const { images } = ImageProp.imageProp(data, path);
    for (const image of images) {
      let source = `${path}/${image.name}`;
      let destination = image.destination;
      imageFunction.resizeAndSave(source, destination, format);
    }
  })
}

