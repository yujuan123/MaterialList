import express from 'express';
import Material from '../models/Material';
const router = express.Router();

//得到原始数据
router.get('/',(req,res)=>{
  Material.find((err,data)=>{
    console.log(err);
    res.send(data);
  })
});

//添加数据
router.post('/',(req,res)=>{
  console.log(req.body);
  new Material({
    source:req.body.source,
    amount:req.body.amount
  }).save((err,material)=>{
    if(err){
      return next(err);
    }else{
      console.log(material);
      res.send(material);
    }
  })
});

//删除数据
router.delete('/:id',(req,res)=>{
  Material.findByIdAndRemove(req.params.id,(err)=>{
    res.send(err);
  })
});

//因为被导入时 require
module.exports = router;