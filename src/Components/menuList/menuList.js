import React from 'react';
import './MenuList.css';
import {MenuItem} from '../MenuItem/MenuItem';

export class MenuList extends React.Component {
  render() {
    return (
      <div>
        {this.props.titleList.map(title => {
          return (
            <div>
              <div className='menuList-title' id={title}><h1>{title}</h1></div>
              <div  className="menuList-container">
              {this.props.menuItems[title].map(menuItem  => {
                return <MenuItem
                  thumbnails={menuItem.field.thumbnails}
                  name={menuItem.field.name}
                  price={menuItem.field.price}
                  description={menuItem.field.description}/>
              })
            }
          </div>
          </div>
        )
      })
    }
  </div>
);
}
}
