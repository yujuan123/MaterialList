//大的app
import React ,{Component} from 'react';

//添加 被包好的组件
import AddMaterialPackage from '../containers/AddMaterialPackage';
import DeleteMaterialPackage from './DeleteMaterial';

class MaterialApp extends Component{
  render(){
    return (
        <div>
          <AddMaterialPackage/>
          <DeleteMaterialPackage/>
        </div>
    )
  }
}

export default MaterialApp;