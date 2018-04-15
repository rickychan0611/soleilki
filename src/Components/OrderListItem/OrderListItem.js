import React from 'react';
import './OrderListItem.css';

export class OrderListItem extends React.Component {
  constructor(props){
    super(props);
    this.removeItem=this.removeItem.bind(this);

  }

  removeItem(){
    this.props.onRemove(this.props.item);
  }

  render() {
    return (
      <div className="item">
        <div className="item-information">
          <h3>{this.props.item.field.name}</h3>
          <p>x {this.props.item.field.qty}</p>

        </div>
        <div className="item-button">
        <button onClick={this.editItem}>Edit</button>
        <button onClick={this.removeItem}>remove</button>

        <hr></hr>
        </div>
      </div>
    );
  }
}
