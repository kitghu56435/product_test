const express = require('express');
const app = express();
const port = process.env.PORT || 3005;





app.get('/',(req,res)=>{
    console.log(getIP(req.rawHeaders,'X-Real-IP'));
    res.end();
})


function getIP(header,key){
    let ip = '127.0.0.1';
    for(i = 0;i<header.length;i++){
        if(header[i] == key){
            ip = header[i+1];
        }
    }
    return ip;
}

app.listen(port,()=>{
    console.log(`ip is running on port ${port}`);
})


let alan  = 'google'




// rawHeaders 裡面有
// Symbol(kHeaders) 有 在socket附近