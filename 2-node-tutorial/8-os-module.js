const os = require('os') 

// info about current user

const user =os.userInfo()
console.log(user);

// method returns tghe system uptime in seconds
console.log(`the system Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(), 
    totlaMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);
console.log(currentOS.name);