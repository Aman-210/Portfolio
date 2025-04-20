export const getImages = (imageName)=>{
    const image = require(`../assets/img/${imageName}`);
    return image;
}