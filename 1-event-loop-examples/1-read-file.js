// npm - global command, comes with node
// npm --version

// local dependency -use it only in this particular project
// npm i <packageName>

// global dependency -use it in any project
// npm install -g <packageNAme>
// sudo npm install -g <packageName> (mac)

// package.json -manifest file (stores important info about project/package)
// manual approch (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

/*
const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems);
console.log("Hello Pepole"); */

//const { log } = require('console');
const {readFile} = require('fs');
const { result } = require('lodash');

console.log('started a first task');
readFile('../content/first.txt', 'utf8', (err,result) => {
    if(err) {
        console.log(err);
        return
    }
    console.log(result);
    console.log('completed first task');
})
console.log('starting next task');

