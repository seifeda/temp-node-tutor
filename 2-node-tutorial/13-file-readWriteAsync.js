const { readFile, writeFile } = require('fs').promises 
// const util =require('util')
// const readFilePromise=util.promisify(readFile)
// const wirteFilePromise=util.promisify(wirteFile)
// const { resolve } = require('path')
 
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err){
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt','utf8')
        await writeFile (
            './content/result-mind-grenade.txt', 
            `THIS IS AWESOME : ${first} ${second}`
            ,{flag: 'a'}
        )
        console.log(first, second)
    }catch (errr) {
        console.log(errr);
    }
}
start()


/*
//this one is only using file read
const start = async () => {
    try {
        const first = await getText('./content/second.txt')
        const second = await getText('./content/first.txt')
        console.log(first, second);
    }catch (errr) {
        console.log(errr);
    }
}
start()

*/
// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))