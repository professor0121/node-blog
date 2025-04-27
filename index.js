const http=require('http');
const port=process.env.PORT || 5000;
const router=require('./routes/router.js');
// const email=require('./nodemailer/email.js');


http.createServer((req,res)=>{
    router(req,res);
    res.writeHead(200,{'Content-Type':'text/html'});
    // email();
}).listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
})

// const http=require('http');

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'text/html'});
//     res.end('<h1>Server is running</h1>');
// }).listen(5000,()=>{
//     console.log('Server running at http://localhost:5000/');
// }   )