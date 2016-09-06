import React ,{Component} from 'react';


class AddMaterial extends Component {
  click() {
    var source = this.refs.sourceText.value.trim();
    var amount = this.refs.amountText.value.trim();
    console.log(source);
    if (source && amount) {
      //抛出去一个addMaterial...
      console.log("input");
      this.props.addMaterial({source: source, amount: amount});
    }
    this.refs.sourceText.value = '';
    this.refs.amountText.value = '';
  }

  handleKeyPress(e) {
    if (13 !== e.charCode) {
      return;
    }
    this.click();
  }
  render() {
    return (
        <form className='form-horizontal col-sm-8 col-sm-offset-2'>
          <div className="form-group">
            <label htmlFor="inputEmail3" className="col-sm-2 control-label">用料</label>iv
            <div className="col-sm-10">
              <input type="text"
                     className="form-control"
                     placeholder="用料名称"
                     ref="sourceText"
                     onkeypress={this.handleKeyPress.bind(this)}
              />
              <input type="text"
                     className="form-control"
                     placeholder="数量"
                     ref="amountText"
                     onkeypress={this.handleKeyPress.bind(this)}
              />
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button onClick={this.click.bind(this)} type="button" className="btn btn-md btn-primary">添加
                </button>
              </div>
            </div>
          </div>
        </form>

    )
  }
}
export default AddMaterial;