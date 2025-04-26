const http=require('http');
const port=process.env.PORT || 5000;
const router=require('./routes/router.js');

http.createServer((req,res)=>{
    router(req,res);
}).listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
})