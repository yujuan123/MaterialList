import React, {Component} from 'react';
import {deleteMaterial} from '../actions/index';
import {connect} from 'react-redux';
class DeleteMaterial extends Component {
  render() {
    const result = this.props.result;
    const deleteMaterialItem = this.props.deleteMaterialItem;

    return (
        <div>
          <table>
            <thead>
            <tr>
              <th>Number</th>
              <th>Source</th>
              <th>Amount</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {
              result.map((v, k)=> {
                return (
                    <tr>
                      <td>{k + 1}</td>
                      <td>{v.source}</td>
                      <td>{v.amount}</td>
                      <td>
                        <a href="javascript:void(0)" onClick={()=>{
                           deleteMaterialItem(v._id);
                          }}>
                          <b>删除</b>
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
const mapStateToProps = (state)=>({
  result:state.result
});
const mapDispatchToProps = (dispatch)=>({
 deleteMaterialItem: (id)=> {
    dispatch(deleteMaterial(id))
    }
});
const DeleteMaterialPackage = connect(mapStateToProps, mapDispatchToProps)(DeleteMaterial);

export default DeleteMaterialPackage;