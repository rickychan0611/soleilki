import React from 'react';
import './NavList.css';
import {App} from '../App/App';

export class NavList extends React.Component {
  render(){
    return(
      <div className="nav-container">
        <ul className="navList">
          {
            this.props.navItems.map(navItem => {
              return <li><div>{navItem}</div></li>
            })
          }
        </ul>
      </div>
    );
  }
}
