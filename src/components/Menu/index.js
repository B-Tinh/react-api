import React, { Component } from 'react';

    class Menu extends Component{
        render(){
            return (
                <div>
                   <div className="navbar navbar-default">
                        <a className="navbar-brand">CALL API</a>
                        <ul className="nav navbar-nav">
                          <li className="active">
                              <a>Trang Chu</a>
                          </li>
                          <li>
                              <a>Quan Ly San Pham</a>
                          </li>
                        </ul> 
                    </div> 
                </div>
            );
        }
    }

export default Menu;




