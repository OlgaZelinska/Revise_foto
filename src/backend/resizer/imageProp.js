module.exports.imageProp = function imageProp(data, path) {
    const images = [];
    const new_name_path = `${path}/file/`;

    data.forEach(function (item) {
        let file_exp = item.split('.').pop();
        if (_isNotImage(file_exp)) return;

        const name = item;
        const destination = `${new_name_path}${_generateName()}`

        images.push({ name, destination });
    });

    return {
        images
    }
}

function _isNotImage(file_exp) {
    return !(file_exp == 'jpg' || file_exp == 'png')
}

function _generateName() {
    const chunk = Math.random().toString();
    return chunk.slice(2, chunk.length);
}