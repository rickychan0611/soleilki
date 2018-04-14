import React from 'react';
import './App.css';
import {MenuList} from '../MenuList/MenuList';
import {NavList} from '../NavList/NavList';
import wholeMenu from '../MenuList/WholeMenu';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      "menuItems" : wholeMenu,
      "navList" : Object.keys(wholeMenu)
    };//end this.state
  }

  

  render() {
    return (
      <div className="main-container">
        <h1>Soleilki Japanese Fusion</h1>
        <NavList navItems={this.state.navList} />
        <div className="menuAndOrder-container">
          <MenuList menuItems={this.state.menuItems} titleList={this.state.navList} />
        </div>
        <div className="footer">
          Restaurant ordering system by Ricky Chan.
        </div>

        <div className="orderedList">
          <h1>Order List</h1>
          <div className="orderedItem">name, qty, price, options, name, qty, price, options, name, qty, price, options, </div>
          <div className="orderedItem">name, qty, price, options</div>
          <div className="orderedItem">name, qty, price, options</div>
          <button type="button">Order</button>
        </div>
      </div>
    );
  }
}
