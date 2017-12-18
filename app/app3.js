const http = require('http');
const server = http.createServer();
server.listen(6002,()=>{
	console.log(`listen at 6002`)
})