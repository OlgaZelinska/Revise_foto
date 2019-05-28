const ImageFunction = require("./imageFunc.js");
const ImageProp = require("./imageProp.js");

const fs = require('fs');

const path = "./files";
const format = 100;
const path2 = "./files/tukan.jpg"
const imageFunction = new ImageFunction();



fs.readdir(path, function (err, data) {
  console.log('All files', data);
  const { images, destination } = ImageProp.imageProp(data, path);
  console.log('New array', images);
  //imageFunction.resizeAndSave(path2, new_img_path, format)
  for (const image of images) {
    let source = `${path}/${image.name}`;
    imageFunction.resizeAndSave(source, destination, format);
  }
})

