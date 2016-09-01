import express from 'express';
import Materials from '../models/Materials';
let router = express.Router();
//得到数据
router.get('/', (req,res)=> {
  Materials.find((err,data)=>{
    res.send(data);
  })
});

//保存数据
router.post('/',(req,res) => {
  new Materials({
    source:req.body.source,
    amount:req.body.amount
  }).save((err,material)=>{
    if(err){
      next(err);
    }else{
      res.send(material);//数据库的数据返回
    }
  })
});

//删除数据
router.delete('/:id',(req,res)=>{
  Materials.findByIdAndRemove(req.params.id,(err) =>{
    res.send({
      error:err
    })
  })
});

module.exports = router;
//export default router;
