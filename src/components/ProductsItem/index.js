import React, { Component } from 'react';

    class ProductsItem extends Component{
        render(){
            return (
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>Iphone 6 Plus</td>
                  <td>500</td>
                  <td>
                    <span className="label label-warning">
                      Con Hang
                    </span>
                  </td>
                  <td>
                    <button type="button" className="btn btn-success mr-10">Sua</button>
                    <button type="button" className="btn btn-danger">Xoa</button>
                  </td>
                </tr>
          );
        }
    }

export default ProductsItem;