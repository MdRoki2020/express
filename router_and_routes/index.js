const app=require('./app')
const port=3000;


app.listen(port,()=>{
    console.log(`server is ruunning at http://localhost:${port}`)
})