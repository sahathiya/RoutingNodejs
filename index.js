const http=require("http")
const port=3000
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("<h1>HOME PAGE</h1>")
        res.end()
   
}else if(req.url==='/About'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("<h1>ABOUT PAGE</h1>")
    res.end()
}else if(req.url==='/Contact'){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("<h1>CONTACT PAGE</h1>")
    res.end()

}
    else{
    res.writeHead(404,{'Content-Type':'application/json'})
        
    res.end(JSON.stringify({error:"error"}))
}
})
server.listen(port,()=>{
    console.log(`server running on${port}`);
    
})




