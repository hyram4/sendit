const mssql=require('mssql')
const config =require('../config/db')
const {v4:uuidv4}=require('uuid')
const bcrypt=require('bcrypt')
const schema=require('../Helpers/Helpers')
async function getUsers(req,res){
    try{
        await mssql.connect(config)
        const result=await(new mssql.Request().execute('getUsers').then((result)=>{
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
async function getAUser(req,res){
    const id=req.params.id;
    try{
        await mssql.connect(config)
        const result=await(new mssql.Request().input('id',id).execute('getAuser').then((result)=>{
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


async function createUser(req,res){
    const {id,username,fullname,phone_number,email,password}=req.body
    try{
        let pool=await mssql.connect(config)
     await pool.request().
        input('id',uuidv4(id))
        .input('username',username)
        .input('fullname',fullname)
        .input('phone_number',phone_number)
        .input('email',email)
        .input('password',bcrypt.hashSync(password,bcrypt.genSaltSync(10))).execute('createUser')
        res.json('user inserted successfully')
    }catch(err){
        console.log(err)
    }

}
async function deleteUser(req,res){
    const id=req.params.id;
    try{
        await mssql.connect(config)
        const result=await(new mssql.Request().input('id',id)
        .execute('deleteuser').then((result)=>{
            res.json("user deleted successfully")
            
            }).catch((err)=>{
            res.send(result)
            console.log(result)
            }));
    }catch(err){
        console.log(err)
    }

}
async function updateUser(req,res){
    const id=req.params.id;
    const {username,fullname,phone_number,email,password}=req.body
    try{
        let pool=await mssql.connect(config)
     await pool.request().
         input('id',id)
        .input('username',username)
        .input('fullname',fullname)
        .input('phone_number',phone_number)
        .input('email',email)
        .input('password',bcrypt.hashSync(password,bcrypt.genSaltSync(10))).execute('updateUser')
        res.json('user updated successfully')
    }catch(err){
        console.log(err)
    }}



    async function login(req,res){
        const {email,password}=req.body
        const{error}=schema.validate(req.body)
        if (error)
        return res
        .status(400)
        .send({success:false,message:error.details[0].message});
        try{
            let pool=await mssql.connect(config)
         let {recordset}=await pool.request().
             input('email',email)
             .execute('userlogin')
           const user=recordset[0]
           if(!user)res.status(400).send({message:"user does not exist"})
           const validpassword=await bcrypt.compare(password,user.password)
           if(!validpassword)return res.send('Invalid credentials')
        }catch(err){
            console.log(err)
        }}
    






module.exports={getUsers,createUser,getAUser,deleteUser,updateUser,login};