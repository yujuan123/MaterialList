import request from 'superagent';

const modifyMaterialMiddleware = store => next => action =>{
  switch (action.type){
    case 'ADD_MATERIAL':
       request.post('/materials')
           .type('form')
           .send({
             source:action.data.source,
             amount:action.data.amount
           })
           .end(()=>{
             store.dispatch({
               type:'INIT'
             })
           });
      break;
    case 'INIT':
      request.get('/materials')
          .end((err,res)=>{
            next({
              type:'MATERIAL_UPLOADED',
              data:res.body
            })
          });
      break;
    case 'DELETE_MATERIAL':
      request.delete(`/materials/${action.id}`)
          .end((err,res)=>{
            //重新从数据库获取数据
            store.dispatch({
              type:'INIT'
            })
          });
      break;
  }
  next(action);
};

export default modifyMaterialMiddleware;