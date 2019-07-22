import React, { Component } from 'react';
import ProductsItem from './../ProductsItem';
    class ProductsList extends Component{
        render(){
            return (
                <div>
                   <div className="panel panel-primary">
                      <div className="panel-heading">
                        <h3 className="panel-title">Danh Sach San Pham</h3>
                      </div>
                      <div className="panel-body">
                        <table className="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>STT</th>
                              <th>Ma</th>
                              <th>Ten</th>
                              <th>Gia</th>
                              <th>Trang Thai</th>
                              <th>Hanh Dong</th>
                            </tr>
                          </thead>
                          <tbody>
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                            <ProductsItem />
                          </tbody>
                        </table>
                      </div>
                    </div>
                </div>
            );
        }
    }

export default ProductsList;

