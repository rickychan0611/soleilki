import React from 'react';
import './MenuList.css';
import {MenuItem} from '../MenuItem/MenuItem';

export class MenuList extends React.Component {
  constructor(props) {
    super(props);
//this.state.array = this.props???
this.renderWholeMenu=this.renderWholeMenu.bind(this);
}
renderWholeMenu(){
  //return ({Object.keys(this.props.menuItems[0])});
}
render() {


    return (
      <div><h1>{this.renderWholeMenu}</h1>
      <div className="menuList-container">

      {this.props.menuItems[0].Appetizers.map(menuItem  => {
        return <MenuItem
        thumbnails={menuItem.field.thumbnails}
        name={menuItem.field.name}
        price={menuItem.field.price}
        description={menuItem.field.description}/>
      })}
    </div>
      </div>
    );
  }
}
