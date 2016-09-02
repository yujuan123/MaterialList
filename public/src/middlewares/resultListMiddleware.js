//中间件来 接受抛出的action 并发送异步网络请求
import request from 'superagent';

const resultListMiddleware = store=>next=>action=> {
  switch (action.type){
    case 'ADD_MATERIAL'://保存数据并交给 下一个next(action)
      request.post('/materials')
          .send(action.data)
          .end((err,res)=>{
            store.dispatch({
              type:'INIT'
            })
          });
      break;
    case 'INIT':
      request.get('/materials')
          .end((err,res)=>{
            next({
              type:'MATERIAL_LOADED',//reducer接受拿去改变state,改变页面
              data:res.body
            })
          });
      break;
    case 'DELETE_MATERIAL':
      request.delete(`/materials/${action.id}`)
          .end(()=>{
            store.dispatch({
              type:'INIT'
            })
          });
      break;
  }
  next(action);
};

//暴露出去
export default resultListMiddleware;