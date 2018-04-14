import React from 'react';
import './MenuItem.css';
import {MenuList} from '../MenuList/MenuList';

export class MenuItem extends React.Component {
  constructor(props){
    super(props);
    this.addItemToOrderList=this.addItemToOrderList.bind(this);

  }
  addItemToOrderList(){
    this.props.onAdd(this.props.menuItem);
  }


  render(){
    return (
      <div className="menuItem">
        <div className="thumbnails-container"><a><img class="thumbnails" src={this.props.menuItem.field.thumbnails} /></a></div>
        <h2>{this.props.menuItem.field.name}</h2>
        <h3>{this.props.menuItem.field.price}</h3>
        <p>{this.props.menuItem.id}. {this.props.menuItem.field.description}</p>
        <div className="addButton" onClick={this.addItemToOrderList}>Add to Order</div>
      </div>
    );
  }
}
