//reducers 里面有 好多数据 state
const result = (state=[],action)=>{
  switch (action.type){
    case 'MATERIAL_LOADED':
      return action.data;
  }
  return state;
};
export default result;