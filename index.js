// const express=require('express')
// const app=express()
// let port=3200

// //Authentication middleware
// app.use((req,res,next)=>{
//     console.log("Authentication middleware called")
//     next()
// })

// app.use("/library-2",(req,res,next)=>{
//     console.log("Book recommendations")
//     next()
// })

// app.use("/library-3",(req,res,next)=>{
//     console.log("Special accerss to research paper from proffessors and seniors")
//     next();
// })


// app.get("/library-2",(req,res)=>{
//     res.send("<h1>Library 2 entered</h1>")
// })
// app.get("/library-3",(req,res)=>{
//     res.send("<h1>Library 3 entered</h1>")
// })


// app.listen(port,()=>{
//     console.log("Server is running")
// })

const express=require('express')
const app=express()

app.use((req,res,next)=>{
    req.user='Guest'
    next()
})

app.get('/welcome',(req,res)=>{
    res.send(`<h1>Welcome, ${req.user}</h1>`)
})




app.listen(3000,()=>console.log("Server is running"))