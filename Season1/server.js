const http=require("node:http")
const server=http.createServer(function(req,res){
    res.end()
})
server.listen(7777)
