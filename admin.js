const express = require('express')

const router = express.Router()

router.get('/add-product',(req,res,next)=>{
    res.send('<form action ="/admin/add-product" method = "POST"><input type="text" name="title"><input type="text" name="size"><button type = "submit">Add product</button></form>')
})

router.post('/add-product',(req,res,next)=>{
    const obj = JSON.parse(JSON.stringify(req.body));
    console.log(obj);
    res.redirect('/')
})

module.exports =router