// const fs = require('fs'); // core module
// const cetakNama = require('./coba'); // local module
// const moment = require('moment'); // third party module / npm module / node_modules

// console.log('hello WPU');

// const cetakNama = require('./coba');
// const PI = require('./coba');
const coba = require('./coba');
// console.log(coba);
console.log(
    coba.cetakNama('saskia karmila'), 
    coba.PI, 
    coba.mahasiswa.cetakMhs(), 
    new coba.orang()
);