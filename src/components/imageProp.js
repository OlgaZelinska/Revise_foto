module.exports.imageProp = function imageProp(data, path){
    const images = [];
    data.forEach(function (item) {
        let file_exp = item.split('.').pop();
        if (file_exp == 'jpg' || file_exp == 'png') {
            images.push({ name: item });
        }
    });     
    const new_img_name = new Date().getTime().toString();
    const new_name_path = `${path}/file/`;
    const destination = `${new_name_path}${new_img_name}`;
        
    return {       
       images,     
       destination
    }
}