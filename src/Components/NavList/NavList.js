import React from 'react';
import './NavList.css';
import {App} from '../App/App';
import { Link } from 'react-scroll'

export class NavList extends React.Component {
  render(){
    return(
      <div className="nav-container">
        <ul className="navList">
          {
            this.props.navItems.map(navItem => {
              return <li>
                <Link
                  activeClass="active"
                  className={navItem}
                  to={navItem}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80} >
                <a href="">  <div>
                    {navItem}
                  </div>
                  </a>
                </Link>
                </li>
            })
          }
        </ul>
      </div>
    );
  }
}
