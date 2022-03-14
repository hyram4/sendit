const mssql=require('mssql')
const config =require('../config/db')
const {v4:uuidv4}=require('uuid')

// parcels

async function getparcels(req,res){
    try{
        await mssql.connect(config)
        const result=await(new mssql.Request().execute('getParcel').then((result)=>{
        res.send(result.recordset)
        console.log(result.recordset)
        }).catch((err)=>{
        res.send(result)
        console.log(result)
        }));
    }catch(err){
        console.log(err)
    }

}
async function getAparcel(req,res){
    const id=req.params.id;
    try{
        await mssql.connect(config)
        const result=await(new mssql.Request().input('id',id).execute('getAParcel').then((result)=>{
            res.send(result.recordset)
            console.log(result.recordset)
            }).catch((err)=>{
            res.send(result)
            console.log(result)
            }));
    }catch(err){
        console.log(err)
    }

}


async function createparcel(req,res){
    const {id,description,sender_number,receive_number,start_location,end_location,}=req.body
    try{
        let pool=await mssql.connect(config)
     await pool.request().
         input('id',uuidv4(id))
        .input('description',description)
        .input('sender_number',sender_number)
        .input('receive_number',receive_number)
        .input('start_location',start_location)
        .input('end_location',end_location)
        .execute('createparcel')
        res.json('parcel inserted successfully')
    }catch(err){
        console.log(err)
    }

}
async function deleteparcel(req,res){
    const id=req.params.id;
    try{
        await mssql.connect(config)
        const result=await(new mssql.Request().input('id',id)
        .execute('deleteparcel').then((result)=>{
            res.json("parcel deleted successfully")
            }).catch((err)=>{
            res.send(result)
            console.log(result)
            }));
    }catch(err){
        console.log(err)
    }

}
async function updateparcel(req,res){
    const id=req.params.id;
    const {description,sender_number,receive_number,start_location,end_location}=req.body
    try{
        let pool=await mssql.connect(config)
     await pool.request().
        input('id',id)
        .input('description',description)
        .input('sender_number',sender_number)
        .input('receive_number',receive_number)
        .input('start_location',start_location)
        .input('end_location',end_location)
       .execute('updateParcel')
        res.json(' parcel updated successfully')
    }catch(err){
        console.log(err)
    }



}

module.exports={getparcels,createparcel,getAparcel,deleteparcel,updateparcel};