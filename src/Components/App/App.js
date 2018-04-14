import React from 'react';
import './App.css';
import {MenuList} from '../MenuList/MenuList';
import {NavList} from '../NavList/NavList';
import {OrderList} from '../OrderList/OrderList';
import wholeMenu from '../MenuList/WholeMenu';
import { Link } from 'react-scroll'

export class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      menuItems : wholeMenu,
      navList : Object.keys(wholeMenu),
      orderListItems : []

    };//end this.state
    this.addItemToOrderList=this.addItemToOrderList.bind(this);
    this.checkOrder=this.checkOrder.bind(this);
  }


addItemToOrderList(item){
  let idArr = [];  //make a new id array. compare id and see if the item already added or not
  for (let i=0; i < this.state.orderListItems.length; i++){
    idArr.push(this.state.orderListItems[i].id);
  }
  console.log('track id = '+ item.id);
  if (! idArr.some(x => x === item.id)){
    let a = this.state.orderListItems; //push the track into the playlisttracks array
    a.push(item);
    console.log(this.state.orderListItems);
    this.setState({orderListItems: a});

  }
}

checkOrder(){
  const check = this.state.orderListItems;
console.log('checked' + this.state.orderListItems);
if (check.length){
  return <div><OrderList menuItems={this.state.orderListItems} /></div>;
}

}


  render() {
    return (
      <div className="main-container">
        <h1>Soleilki Japanese Fusion</h1>
        <NavList navItems={this.state.navList} />
        <div className="menuAndOrder-container">
          <MenuList menuItems={this.state.menuItems} titleList={this.state.navList} onAdd={this.addItemToOrderList}/>
        </div>
        <div className="footer">
          Restaurant ordering system by Ricky Chan.
        </div>
        <div className="orderedList">
          <h1>Order List</h1>
          {this.checkOrder()}
          <button type="button">Order</button>
        </div>


      </div>
    );
  }
}
