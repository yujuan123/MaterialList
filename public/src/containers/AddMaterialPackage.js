import AddMaterial from '../components/AddMaterial';
import {connect} from 'react-redux';
import {addMaterial} from '../actions/index';
//映射数据、
const mapStateToProps = (state)=>{
  return state;
};
const mapDispatchToProps = (dispatch)=>({
  addMaterial:(data)=>{
    dispatch(addMaterial(data));
  }
});

const AddMaterialPackage =connect(mapStateToProps,mapDispatchToProps)(AddMaterial);

export default AddMaterialPackage;