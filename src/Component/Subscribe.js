import React, { Component } from 'react';

class Subscribe extends Component {
    render() {
        return (
            <div className="container-fluid bg-subscribe">
                <div className="row">
                    <div className="col-12 inbox">
                    <form className="form-inline">
                        <input type="text" className="form-inline form-control-lg" placeholder="Nhập email" style={{width: '400px'}} />
                        <button className="btn btn-success btn-lg">Đăng ký nhận tin</button>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Subscribe;