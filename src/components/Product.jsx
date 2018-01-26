import React, {Component} from 'react';
import {Col, Row, Input} from 'react-materialize';
import { connect } from 'react-redux';
import {editProduct, editPrice, delProduct} from '../store/actions/index'

class Product extends Component {
  constructor(props){
    super(props)
    this.state={
      showInput:false
    }
    this.showInput=this.showInput.bind(this);
    this.editProduct=this.editProduct.bind(this)
    this.editPrice=this.editPrice.bind(this)
    this.deleteProduct=this.deleteProduct.bind(this)
  }

showInput(){
  this.setState({showInput:!this.state.showInput})
}

editProduct(event){
  let value = event.target.value
  this.props.editProduct(this.props.menu.id, this.props.index, value )
}

editPrice(event){
  let value = event.target.value
  this.props.editPrice(this.props.menu.id, this.props.index, value )
}

 deleteProduct(){
   this.props.delProduct(this.props.menu.id, this.props.index)
 }

  render() {
    return (
      <div>
      {this.state.showInput ?
        <Row>
         <Col s={6}>
           <Input placeholder={this.props.product} onChange={this.editProduct}/>
         </Col>
         <Col s={3}>
           <Input placeholder={this.props.price} onChange={this.editPrice}/>
         </Col>
         <Col s={3}>
           <a style={{cursor:'pointer'}} onClick={this.showInput}><i style={{paddingTop:'30px'}} className="small material-icons">check</i></a>
         </Col>
       </Row>
        :
       <Row>
        <Col s={6}>
          <h5 style={{textAlign:'left'}}>{this.props.product}</h5>
        </Col>
        <Col s={2}>
          <h5 style={{textAlign:'left'}}>{this.props.price} €</h5>
        </Col>
        <Col s={2}>
            <a style={{cursor:'pointer'}} onClick={this.showInput}><i style={{paddingTop:'10px'}} className="small material-icons">edit</i></a>
        </Col>
        <Col s={2}>
            <a style={{cursor:'pointer'}} onClick={this.deleteProduct}><i style={{paddingTop:'10px'}} className="small material-icons">delete</i></a>
        </Col>
      </Row>
    }
  </div>
)}
}

const mapStateToProps = state => {
  return {
    menus: state.menus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editProduct: (id, index, text) => {
      dispatch(editProduct(id, index, text))
    },
    editPrice: (id, index, price) => {
      dispatch(editPrice(id, index, price))
    },
    delProduct: (id, index) => {
      dispatch(delProduct(id, index))
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)
