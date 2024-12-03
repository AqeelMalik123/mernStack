import express from 'express'

const app= express();

app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.get('/joke',(req,res)=>{
    const joke=[{
        id:1,
        content:"joke 1",
        title:"this is first joke"
    },
    {
        id:2,
        content:"joke 2",
        title:"this is second joke"
    },
    {
        id:3,
        content:"joke 3",
        title:"this is third joke"
    }               


]
    res.send(joke)
})
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server at https://localhost:${port}`)
})