const result = (state = [],action)=>{
  switch (action.type) {
    case 'MATERIAL_UPLOADED'://谁抛出的？是中间件抛出的
      return action.data;
  }
  return state;
};
export default result;