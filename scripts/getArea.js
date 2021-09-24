import React from 'react'

const getArea = (a,b,c) => {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    const s = (a+b+c)/2;
    const area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    
    if(a<(b+c) && b<(a+c) && c<(a+b))
        return area.toFixed(5);
    else
        return false;
}

export default getArea;
