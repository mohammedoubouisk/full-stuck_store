const express = require('express');
const app = express();
const port = 3001;
app.use(express.json())

// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const cors = require('cors');
// const bcrypt = 

const connect_db = require('./db')

app.listen(port,()=>{
    connect_db(app).then(()=>{
        console.log('start ...')
    })
})

app.get('/',async(req,res)=>{
    const table = await app.locals.db.collection('client')
    const all = await table.find({}).toArray()
    res.status(200).json(all)

})

app.post('/register',async(req,res)=>{
    const {name,email,password} = req.body
    // const hashpassword  = await bcrypt.hashSync(password, 10)
    const new_user = {
        name:name,
        email:email,
        password:password
    }
    // const email_chk= req.body.email
    const table = await app.locals.db.collection('client')
    const alls = await table.find({email}).toArray()
    if(alls.length > 0){
        res.status(201).json({message:'already existe'})
    }
    else{  
        await table.insertOne(new_user)
        res.status(200).json({message:'addition sucess'})
    }

})


app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const table = await app.locals.db.collection('client');

    const user = await table.findOne({ email,password});
    if(user){
        res.status(200).json({message:"success"})
    }
    
    else{
       return res.status(200).json({message:"failer"})
    }
});


// app.post("/login", async (req, res) => {
//     const { email, password } = req.body;

//     const table = await app.locals.db.collection('client');

//     const user = await table.findOne({ email});
//     const passwordVlaid = await bcrypt.compare(password, user.password)

//     if(!passwordVlaid || !user){
//         res.json({message:"email or password incorrect"})
//     }
//     else{
//         const token = jwt.sign({id: user._id},"med")
//        return res.json({token, userID: user._id})
//     }   
// });

