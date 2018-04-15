import React from 'react';
import './OrderList.css';
import {OrderListItem} from '../OrderListItem/OrderListItem';


export class OrderList extends React.Component {

  render() {
    return (

        <div className="orderedItem">
          {
              this.props.menuItems.map(item => {
                return <OrderListItem item={item} onRemove={this.props.onRemove}/>
              })
            }
            <div className="bottom-button">
            <button type="button">Order</button>
            <button type="button" onClick={this.props.onRemoveAll}>Clear All</button>
            </div>
      </div>

    );
  }
}
