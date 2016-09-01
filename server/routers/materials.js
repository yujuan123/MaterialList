import express from 'express';
import Materials from '../models/Materials';
const router = express.Router();

//得到原始数据
router.get('/',(req,res)=>{
  Materials.find((err,data)=>{
    if(res.status===200){
      res.send(data);
    }
  })
});

//添加数据
router.post('/',(req,res)=>{
  new Materials({
    source:req.body.data.source,
    amount:req.body.data.amount
  }).save((err,material)=>{
    if(err){
      return next(err);
    }else{
      res.send(material);
    }
  })
});

//删除数据
router.delete('/:id',(req,res)=>{
  Materials.findByIdAndRemove(req.params.id,(err,doc)=>{
    if(err){
      res.send({
        error:err
      })
    }
  })
});

//因为被导入时 require
module.exports = router;