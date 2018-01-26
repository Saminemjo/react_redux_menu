import React, {Component} from 'react';
import {Col, Input} from 'react-materialize';
import { connect } from 'react-redux';
import {editMenu, delMenu} from '../store/actions/index';
import Products from './ProductsList.jsx'
import h1 from '../img/1.jpeg';
import h2 from '../img/2.jpeg';
import h3 from '../img/3.jpeg';


class Menu extends Component {
  constructor(props){
    super(props)
    this.state={
      showInput:false,
      image:""
    }
    this.showInput=this.showInput.bind(this);
    this.update=this.update.bind(this)
    this.delete=this.delete.bind(this)
  }
componentDidMount(){
  var myPix = [h1, h2, h3];
  let chooseIt = () => {
    return Math.floor(Math.random() * myPix.length)
  }
  this.setState({image:myPix[chooseIt()]})
}

showInput(){
  this.setState({showInput:!this.state.showInput})
}
update(event){
  let value = event.target.value;
  this.props.editMenu(this.props.menu.id, value)
}
delete(){
  this.props.delMenu(this.props.index)
}

  render() {
    return (
    <Col l={4} m={6} s={12}>
      {console.log(this)}
      <div className="card small" style={{height:'auto', paddingBottom:'50px'}}>
        <div className="card-image">
          <img src={this.state.image} alt="miam"/>
          <span className="card-title">
          {!this.state.showInput ?
            this.props.menu.text
            :
            (<Input  placeholder={this.props.menu.text} s={6} onChange={this.update}/>)
        }
      </span>
        </div>
        <div className="card-content">
          <Products menu={this.props.menu} />
        </div>
        <div className="card-action">
            {this.state.showInput ?
          <a style={{cursor:'pointer'}} onClick={this.showInput}><i className="material-icons">check</i></a>
          :
          <a style={{cursor:'pointer'}} onClick={this.showInput}><i className="material-icons">edit</i></a>
        }
          <a style={{cursor:'pointer'}} onClick={this.delete}><i className="material-icons">delete</i></a>
          </div>
        </div>
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
    editMenu: (id, text) => {
      dispatch(editMenu(id, text))
    },
    delMenu: index => {
      dispatch(delMenu(index))
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)
