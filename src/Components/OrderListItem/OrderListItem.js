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
          <p>{this.props.item.field.price}</p>
        </div>
        <button className="Track-action" onClick={this.removeItem}>remove</button>
      </div>
    );
  }
}
