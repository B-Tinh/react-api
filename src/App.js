import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import ProductsList from './components/ProductsList';

    class App extends Component{
        render(){
            return (
                <div>
                    <Menu />
                    <div className="container">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <button type="button" className="btn btn-info mb-10">
                            Them San Pham
                          </button>
                          <ProductsList />
                        </div>
                      </div>
                    </div>
                </div>
            );
        }
    }

export default App;




