import React, { Component } from 'react';

class FooterAbove extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-12 footer-bottom">
                        <img src="img/title/logo.png" className="img-fluid" alt="" />
                        <h6>Hệ thống cửa hàng</h6>
                        <p>Tại Hồ Chí Minh</p>
                        <p>17A Cộng Hòa Phường ? Quận Tân Bình</p>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 footer-bottom">
                        <h6>Điện thoại:</h6>
                        <p><i className="fas fa-phone" />:0339181198</p>
                        <h6>Theo dõi chúng tôi</h6>
                        <div className="contact">
                        <i className="fab fa-facebook" />
                        <i className="fab fa-twitter" />
                        <i className="fab fa-youtube" />
                        <i className="fab fa-instagram" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 footer-bottom">
                        <h6>Thông tin</h6>
                        <a href="/#" className="nav-link">Giới thiệu</a>
                        <a href="/#" className="nav-link">Chính sách vận chuyển</a>
                        <a href="/#" className="nav-link">Quy định chính sách</a>
                        <a href="/#" className="nav-link">Chính sách bảo mật</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterAbove;