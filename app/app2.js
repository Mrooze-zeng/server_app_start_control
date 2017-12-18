const http = require('http');
const server = http.createServer();
server.listen(6001,()=>{
	console.log(`listen at 6001`)
})