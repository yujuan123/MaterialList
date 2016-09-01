import {connect} from 'react-redux';
import AddMaterial from '../components/AddMaterial'
import {addMaterial} from '../actions/index'; //暴露不止一个，所以要加 {}

const mapStateToProps = (state)=>(state);

const mapDispatchToProps = (dispatch)=>({
  addMaterial:(data)=>{
    dispatch(addMaterial(data));
  }
});

//connect 连接
const AddMaterialPackage = connect(mapStateToProps,mapDispatchToProps)(AddMaterial);
export default AddMaterialPackage;