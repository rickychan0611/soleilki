import React from 'react';
import './MenuItem.css';
import {MenuList} from '../MenuList/MenuList';

export class MenuItem extends React.Component {
  render(){
    return (
      <div className="menuItem">
        <div className="thumbnails-container"><a><img class="thumbnails" src={this.props.thumbnails} /></a></div>
        <h2>{this.props.name}</h2>
        <h3>{this.props.price}</h3>
        <a>{this.props.description}</a>
        <div className="addButton">Add to Order</div>
      </div>
    );
  }
}
