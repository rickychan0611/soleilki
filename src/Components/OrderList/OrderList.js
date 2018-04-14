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
      </div>
        
    );
  }
}
