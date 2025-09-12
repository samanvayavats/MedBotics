import dotenv from 'dotenv'
import { app } from './app.js'
import dbconnect from './db/index.js'

dotenv.config(
    {
       path:'./.env' 
    }
)

dbconnect().then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log("the app is runing on the port " , process.env.PORT)
        })
}).catch((err)=>{
    console.log("something went wrong in db connection and port in not runing " , err)
})
