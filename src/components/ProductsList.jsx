import React, {Component} from 'react';
import {Col} from 'react-materialize';
import { connect } from 'react-redux';
import {addProduct} from '../store/actions/index';
import Product from './Product.jsx';

class ProductsList extends Component {
  constructor(props){
    super(props)
    this.state={
      showInput:false
    }
    this.showInput=this.showInput.bind(this);
    this.addProduct=this.addProduct.bind(this)
  }

showInput(){
  this.setState({showInput:!this.state.showInput})
}

addProduct(){
  this.props.addProduct(this.props.menu.id, "Nouveau plat", "0")
}


  render() {
    return (
    <Col l={12}>
      {console.log(this)}
        {this.props.menu.products.map((product, index) =>
        <Product price={product.price} product={product.text} menu={this.props.menu} index={index} key={index} />
      )}
      <a style={{cursor:'pointer', textAlign:'left'}} onClick={this.addProduct}>Add product</a>
      </Col>
    );
  }
}

const mapStateToProps = state => {
  return {
    menus: state.menus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: (id, text, price) => {
      dispatch(addProduct(id, text, price))
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList)
