import React, { Component } from 'react'
import DkvProductlist from './component/DkvProductlist';
import DkvProductAdd from './component/DkvProductAdd';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products : [
        { title: 'Do Khac Viet', id: 2210900137 , status:1 },
        { title: 'Cabbage', id: 1 , status:1 },
        { title: 'Garlic', id: 2 , status:0 },
        { title: 'Apple', id: 3 , status:0 },
        { title: 'Samsung', id: 4 , status:1 },
      ]
    }
  }
  DkvHanldSubmit=(param)=>{
    console.log("App:",param);
    //thêm vào bảng dữ liệu product
    let {products}=this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container'>
          <h1>Do Khac Viet -Event Form - Render Data</h1>
          <hr/>
          {/* Corrected prop name from renderProduct to renderProducts */}
          <DkvProductlist renderProducts={this.state.products}/>
          <hr/>
          <DkvProductAdd onSubmit={'this.DkvHanldSubmit'}/>
      </div>
    );
  }
}
export default  App;
