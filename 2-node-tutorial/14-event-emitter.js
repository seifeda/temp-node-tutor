const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) =>{
    console.log(`data recived user ${name} with id: ${id}`);
})
customEmitter.on('response', () => {
    console.log(`some other logic her`)
})
customEmitter.emit('response', 'john', 34 )