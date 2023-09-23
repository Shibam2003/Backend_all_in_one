const path = require('path');
// console.log(path.dirname('C:/Users/chakr/OneDrive/Desktop/Backend/node_js4(pathmodule)/path.js'));

// console.log(path.extname('C:/Users/chakr/OneDrive/Desktop/Backend/node_js4(pathmodule)/path.js'));

// console.log(path.basename('C:/Users/chakr/OneDrive/Desktop/Backend/node_js4(pathmodule)/path.js'));
// console.log(path.parse('C:/Users/chakr/OneDrive/Desktop/Backend/node_js4(pathmodule)/path.js'));

const myPath = path.parse('C:/Users/chakr/OneDrive/Desktop/Backend/node_js4(pathmodule)/path.js');
console.log(myPath.name);

