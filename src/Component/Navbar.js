import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
                <a href="/#" className="navbar-brand"><img src="img/product/logo.webp" alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportDropdown" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportDropdown">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/#">Trang chủ<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown">
                        Giày nam
                        </a>
                        <div className="dropdown-content">
                        <a className="dropdown-item" href="/#">Trứng ráng cần mỡ</a>
                        <a className="dropdown-item" href="/#">Bắp cần bơ</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="/#">Yêu không cần cớ</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown">
                        Giày nữ
                        </a>
                        <div className="dropdown-content">
                        <a className="dropdown-item" href="/#">Trứng ráng cần mỡ</a>
                        <a className="dropdown-item" href="/#">Bắp cần bơ</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="/#">Yêu không cần cớ</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Fanpage</a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 form-menu">
                    <a href="/#"><i className="fas fa-search" /></a>
                    <a href="/#"><i className="far fa-user" /></a>
                    <a href="/#"><i className="fas fa-shopping-cart" /></a>
                    </form>
                </div>
                </nav>
        );
    }
}

export default Navbar;