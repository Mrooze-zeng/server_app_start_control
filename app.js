const {spawn} = require('child_process');
const path = require('path');
const fs = require('fs');
const basePath = '/home/ubuntu/tmp/servers/app'
let Servers = fs.readdirSync(basePath);
const serverBox ={}
for(let i=0;i<Servers.length;i++){
		Servers[i]=path.join(basePath,Servers[i])
		console.log(Servers[i])
		serverBox['server'+i] = spawn('forever',[Servers[i]])
		serverBox['server'+i].stdout.on('data',data=>{
			console.log(`server${i} stdout:${data}`)
		})
		serverBox['server'+i].stderr.on('data',data=>{
			console.log(`server${i} stdout:${data}`)
		})
		serverBox['server'+i].on('close',code=>{
			console.log(`server${i}  closed:${code}`)
		})
}
