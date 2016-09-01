import React , {Component} from 'react';
import {connect} from 'react-redux';
class DisplayList extends Component{
  render(){
    //获取 需要的state
    const result=this.props.result;
    //抛出 事件Action
    const deleteMaterial = this.props.deleteMaterial;
    console.log("rendering");
    return (
        <div>
          <table>
            <thead>
            <tr>
              <th>编号</th>
              <th>用料名称</th>
              <th>数量</th>
            </tr>
            </thead>
            <tbody>
            {
             result.map((v,k)=>{
               return (
                   <tr>
                     <td>{k+1}</td>
                     <td>{v.source}</td>
                     <td>{v.amount}</td>
                     <td>
                       <a
                         href="javascript: void(0)"
                         onClick={()=> {
                         deleteMaterial(v._id);
                       }}
                         >
                         <b> 删除</b>
                       </a>
                     </td>
                   </tr>
               )
             })
            }
            </tbody>
          </table>
        </div>
    )
  }
}

//做connect
const mapStateToProps =(state)=>({
  result:state.result
});

const mapDispatchToProps = (dispatch)=>({
  deleteMaterial:(id)=>{
    dispatch({
      type:'DELETE_MATERIAL',
      id
    })
  }
});

const DisplayListPackage = connect(mapStateToProps,mapDispatchToProps)(DisplayList);

export default DisplayListPackage;