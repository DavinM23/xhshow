const fs = require('fs');


function get_jc(text) {
    let obj = eval(`( ${text} )`);
    fs.writeFileSync('./test.json', JSON.stringify(obj, null, 4), 'utf8');
}