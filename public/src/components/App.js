import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import Logo  from './Logo';
import SliderPicture from './SliderPicture';


//导入 “被包装” 的  AddMaterialPackage
import AddMaterialPackage from '../container/AddMaterialPackage';
import DisplayListPackage  from './DisplayList';
class App extends Component {

  render() {
    return (
        <div>
          <Logo/>
          <AddMaterialPackage/>
          <DisplayListPackage />
        </div>
    );
  }
}

export default App;
