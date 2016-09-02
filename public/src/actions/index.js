export const addMaterial = (data)=>{
  return{
      type:'ADD_MATERIAL',
      data
  };
};
export const deleteMaterial = (id)=>{
  return {
    type:'DELETE_MATERIAL',
    id
  }
};
