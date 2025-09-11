import express from "express"
const app = express()

app.get('/' ,(req:any, res:any)=>{
    return res.send(' are we able to use the ty !')
})

app.listen(8000)