const {readFileSync, writeFileSync } = require('fs')
console.log('start');
const first =readFileSync('./content/first.txt','utf8')
const second =readFileSync('./content/second.txt','utf8')

console.log(first,second);
//if we add {flag : 'a'} it will append with the exixting text
writeFileSync('./content/result-sync.txt',`Here is the result : ${first}, ${second}` ,
{flag: 'a'})

console.log('done with this task');
console.log('starting the next one')