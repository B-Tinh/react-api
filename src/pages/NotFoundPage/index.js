import React, { Component } from 'react';

    class NotFoundPage extends Component{
        render(){
            return (
                <div className="container">
                  <div className="alert alert-warning">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>Khong Tim Thay Trang</strong>
                  </div>
                </div>
            );
        }
    }

export default NotFoundPage;
