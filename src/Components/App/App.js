import React from 'react';
import './App.css';
import {MenuList} from '../MenuList/MenuList';
import {NavList} from '../NavList/NavList';
import wholeMenu from '../MenuList/Appetizers';

export class App extends React.Component {
  constructor(props){
    super(props);

  /*  const Appetizers =  {
      'name': 'Salmon Sushi NEW',
      'price': '$10',
      'description': "blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, blah, ",
      'thumbnails': 'https://goo.gl/pYpNpC'
    };//end menu Items*/

    /*const menuList = {
      "Appetizers": Appetizers,
      "Salads": Salads
    };*/

    const navItems = [
      "Appetizers",
      "Salads",
      "Soup & Hot Pots",
      "Sashimi",
      "Nigiri Sushi",
      "Tempura",
      "Special Rolls",
      "Maki (roll)",
      "Temeki (cone)",
      "Sushi Combo",
      "Sushi Rice Bowl",
      "Japanese Curry",
      "Donburi (Rice bowl)",
      "Chaahan",
      "Noodle Soup",
      "Yaki Udon / Noodle",
      "Deep Fried",
      "Bento Box",
      "Entrees",
      "Set Dinner Platters",
      "Party Tray"
    ];

    this.state = {
      "menuItems" : wholeMenu,
      "navList" : navItems
    };//end this.state

    console.log('this.state.menuItems= '+this.state.menuItems.Appetizers);
    console.log('Object.keys(this.state.menuItems =' + Object.keys(wholeMenu[0]));
  }

  render() {
    return (
      <div className="main-container">
        <h1>Soleilki Japanese Fusion</h1>
        <NavList navItems={this.state.navList} />
        <div className="menuAndOrder-container">
          <MenuList menuItems={this.state.menuItems} />
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
