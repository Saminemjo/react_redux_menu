import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Menu from './Menu.jsx';
import {Row, Button} from 'react-materialize';
import { connect } from 'react-redux';
import {addMenu} from '../store/actions/index'

class App extends Component {
  constructor(props){
    super(props)
    this.addNew=this.addNew.bind(this)
  }
addNew(){
  console.log(this);
  this.props.addMenu("Nouveau Menu")
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome chez nous</h1>
        </header>
        <Row>
          <Button floating icon='add' className='blue lighten-2' large onClick={this.addNew} style={{top: '14px'}}>
          </Button>
        </Row>
        <Row>
          {this.props.menus.map((el, index)=>
          <Menu key={index} index={index} menu={this.props.menus[index]}/>
          )}
        </Row>
      </div>
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
    addMenu: text => {
      dispatch(addMenu(text))
    }
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
