
const getHypotenuse = (base,height) => {

    base = parseInt(base);
    height = parseInt(height);
    const temp = Math.pow(base,2) + Math.pow(height,2);
    return Math.sqrt(temp);
}

export default getHypotenuse;
