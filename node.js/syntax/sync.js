var fs = require('fs');


/*
//readFileSync(동기)
console.log(`A`);
result = fs.readFileSync('syntax/sample.txt','utf8');
console.log(result);
console.log(`C`);
//result: A B C
*/

//readFile(비동기)
console.log(`A`);
fs.readFile('syntax/sample.txt','utf8',function(err,result){
    console.log(result);
});
console.log(`C`);
//result: A C B