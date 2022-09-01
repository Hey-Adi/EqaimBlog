require('dotenv').config();
const PORT = process.env.PORT || 5000;
const http = require("http");
const app = require("./app");
const server = http.createServer(app);

server.listen(PORT,err=>{
    if(err) throw err;
    console.log(`=> Server Port: ${PORT} Started ✔`);
    // console.log(`Server 🚀 @PORT:${PORT}`);
});