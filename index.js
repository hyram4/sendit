const express=require('express')
const mssql=require('mssql')
const config=require('./config/db')

const app= express()

app.use(express.json())
app.use('/users',require('./Routes/userRoutes'))
app.use('/parcels',require('./Routes/parcelRoutes'))
mssql.connect(config).then(pool =>{
    if(pool.connecting){
        console.log('connecting to database')
    }
    if(pool.connected){
        console.log('connected to database')
    }
}).catch(e=>console.log(e))
app.listen(4000,()=>{
    console.log("Running...")
})