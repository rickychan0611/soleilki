import React from 'react';
import './App.css';
import {menuList} from '../menuList/menuList';

export class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <div className="orderedList">
          <h1>Order List</h1>
          <div className="orderedItem">name, qty, price, options, name, qty, price, options, name, qty, price, options, </div>
          <div className="orderedItem">name, qty, price, options</div>
          <div className="orderedItem">name, qty, price, options</div>
          <button type="button">Order</button>
        </div>
        <h1>Soleilki Japanese Fusion</h1>



        <div className="nav-container">
          <ul className="navList">
            <li><div>fooddddddddddddddd</div></li>
            <li><div>food</div></li>
            <li><div>food</div></li>
            <li><div>fooddddddddddddd</div></li>
            <li><div>food</div></li>
            <li><div>food</div></li>
            <li><div>food</div></li>
            <li><div>food</div></li>
            <li><div>food</div></li>
            <li><div>food</div></li>
            <li><div>food</div></li>
            <li><div>food</div></li>
            <li><div>fooddddddddddddddd</div></li>
            <li><div>food</div></li>
            <li><div>food</div></li>
            <li><div>fooddddddddddddd</div></li>
            <li><div>food</div></li>
            <li><div>food</div></li>
            <li><div>food</div></li>
            <li><div>food</div></li>
            <li><div>food</div></li>
            <li><div>food</div></li>
            <li><div>food</div></li>
            <li><div>food</div></li>

          </ul>
        </div>


        <div className="menuAndOrder-container">

          <div className="menuList-container">

            <div className="menuItem">
              <div className="pic"><img src={'https://goo.gl/pYpNpC'} alt="Salmon"/></div>
              <h2>Salmon Sushi</h2>
              <h3>$99.99</h3>
              <a>this is a description, blah, blah, blah, blah, blah, blah, blah, blah, blah</a>
              <div className="addButton">Add to Order</div>
            </div>

            <div className="menuItem">
              <div className="pic"><img src={'https://goo.gl/pYpNpC'} alt="Salmon"/></div>
              <h2>Salmon Sushi</h2>
              <h3>$99.99</h3>
              <a>this is a description, blah, blah, blah, blah, blah, blah, blah, blah, blah</a>
              <div className="addButton">Add to Order</div>
            </div>

            <div className="menuItem">
              <div className="pic"><img src={'https://goo.gl/pYpNpC'} alt="Salmon"/></div>
              <h2>Salmon Sushi</h2>
              <h3>$99.99</h3>
              <a>this is a description, blah, blah, blah, blah, blah, blah, blah, blah, blah</a>
              <div className="addButton">Add to Order</div>
            </div>

            <div className="menuItem">
              <div className="pic"><img src={'https://goo.gl/pYpNpC'} alt="Salmon"/></div>
              <h2>Salmon Sushi</h2>
              <h3>$99.99</h3>
              <a>this is a description, blah, blah, blah, blah, blah, blah, blah, blah, blah</a>
              <div className="addButton">Add to Order</div>
            </div>

            <div className="menuItem">
              <div className="pic"><img src={'https://goo.gl/pYpNpC'} alt="Salmon"/></div>
              <h2>Salmon Sushi</h2>
              <h3>$99.99</h3>
              <a>this is a description, blah, blah, blah, blah, blah, blah, blah, blah, blah</a>
              <div className="addButton">Add to Order</div>
            </div>

            <div className="menuItem">
              <div className="pic"><img src={'https://goo.gl/pYpNpC'} alt="Salmon"/></div>
              <h2>Salmon Sushi</h2>
              <h3>$99.99</h3>
              <a>this is a description, blah, blah, blah, blah, blah, blah, blah, blah, blah</a>
              <div className="addButton">Add to Order</div>
            </div>

            <div className="menuItem">
              <div className="pic"><img src={'https://goo.gl/pYpNpC'} alt="Salmon"/></div>
              <h2>Salmon Sushi</h2>
              <h3>$99.99</h3>
              <a>this is a description, blah, blah, blah, blah, blah, blah, blah, blah, blah</a>
              <div className="addButton">Add to Order</div>
            </div>

            <div className="menuItem">
              <div className="pic"><img src={'https://goo.gl/pYpNpC'} alt="Salmon"/></div>
              <h2>Salmon Sushi</h2>
              <h3>$99.99</h3>
              <a>this is a description, blah, blah, blah, blah, blah, blah, blah, blah, blah</a>
              <div className="addButton">Add to Order</div>
            </div>

            <div className="menuItem">
              <div className="pic"><img src={'https://goo.gl/pYpNpC'} alt="Salmon"/></div>
              <h2>Salmon Sushi</h2>
              <h3>$99.99</h3>
              <a>this is a description, blah, blah, blah, blah, blah, blah, blah, blah, blah</a>
              <div className="addButton">Add to Order</div>
            </div>

            <div className="menuItem">
              <div className="pic"><img src={'https://goo.gl/pYpNpC'} alt="Salmon"/></div>
              <h2>Salmon Sushi</h2>
              <h3>$99.99</h3>
              <a>this is a description, blah, blah, blah, blah, blah, blah, blah, blah, blah</a>
              <div className="addButton">Add to Order</div>
            </div>

            <div className="menuItem">
              <div className="pic"><img src={'https://goo.gl/pYpNpC'} alt="Salmon"/></div>
              <h2>Salmon Sushi</h2>
              <h3>$99.99</h3>
              <a>this is a description, blah, blah, blah, blah, blah, blah, blah, blah, blah</a>
              <div className="addButton">Add to Order</div>
            </div>

          </div>
        </div>


        {/*<div className="popUp">
          <div className="popUp-pic">pic</div>
          <div className="popUp-name">name</div>
          <div className="popUp-price">$99.99</div>
          <div className="popUp-description"></div>
          <div className="popUp-addButton">+</div>
          <div className="popUp-option"><ul><li>1</li></ul></div>
          </div>
          */}

          <div className="footer">
            Restaurant ordering system by Ricky Chan.
          </div>

        </div>
      );
    }
  }
