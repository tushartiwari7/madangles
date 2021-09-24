import React from 'react'

const sumofangles = (a,b,c) => {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    return ((a+b+c) === 180 ? true : false);
}

export default sumofangles;
