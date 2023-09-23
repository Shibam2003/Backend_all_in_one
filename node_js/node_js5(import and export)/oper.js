const add = (a, b) =>{
    return a + b;
};

const sub = (a, b) =>{
    return a - b;
};

const name = 'shibam';

// module.exports = add;
// module.exports.add = add;
// module.exports.sub = sub;

//one line
module.exports = {add, sub};
