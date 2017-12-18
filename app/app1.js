const http = require('http');
const server = http.createServer();
server.listen(6000,()=>{
	console.log(`listen at 6000`)
})