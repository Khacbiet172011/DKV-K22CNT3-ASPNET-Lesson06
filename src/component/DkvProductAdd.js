import React, { Component } from 'react'

 class dkvProductAdd extends Component {
    constructor(props){
        super(props);
        this.state={
            id:0,
            title:'',
            status:0
        }
    }
    dkvHanldChange=(event)=>{
      let name= event.target.name;
      let value =  event.target.value;
      this.setState({
        [name]:value
      })
    }

    //submit form
    dkvHanldSubmit=(ev)=>{
      ev.preventDefault();

      this.props.onSubmit(this.state);
    }
  render() {
    return (
      <div>
        <h2>Thêm Mới Sản Phẩm</h2>
        <form className='col-md-6'>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                ID
            </span>
            <input
                type="text"
                className="form-control"
                name='id'
                value={this.state.id}
                onChange={this.dkvHanldChange}
            />
            </div>

            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
                Title
            </span>
            <input
                type="text"
                className="form-control"
                name='title'
                value={this.state.title}
                onChange={this.dkvHanldChange}
            />
            </div>

            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
                Status
            </span>
            <input
                type="text"
                className="form-control"
                name='title'
                value={this.state.status}
                onChange={this.dkvHanldChange}
            />
            </div>
            <button className='btn btn-success'onClick={this.dkvHanldSubmit}> Ghi lại</button>
        </form>

      </div>
    )
  }
}
export default dkvProductAdd;