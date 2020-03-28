import React, { Component } from 'react';

class Bannerv1 extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row introduce-product">
                    <div className="col-12 col-lg-4 order-lg-1 introduce-product__type1 wow zoomInDown">
                    <a href="/#">
                        <img className="hover-scale" src="./img/product/banner-v1-img1.webp" alt="" />
                        <div className="introduce-product__text1">
                        <h3 className="card-text">Running Shoes</h3>
                        <h2 className="card-title">Nice Just Do It</h2>
                        </div>
                    </a>
                    </div>
                    <div className="col-12 col-lg-8 order-lg-1 introduce-product__type1 wow zoomInDown">
                    <a href="/#">
                        <img className="hover-scale" src="./img/product/banner-v1-img2.webp" alt="" />
                    </a>
                    <div className="introduce-product__text2">
                        <h2 className="card-title">The Benefits Of Running</h2>
                        <h3 className="card-text">Season Off 30 - 10%</h3>
                        <a href="/#" className="btn btn-dark btn-lg button__animation btn-white">More Infor</a>
                    </div>
                    </div>
                    <div className="col-12 col-lg-4 order-lg-2 introduce-product__type1 wow zoomInDown">
                    <a href="/#">
                        <img className="hover-scale" src="./img/product/banner-v2-img1.webp" alt="" />
                        <div className="introduce-product__text1">
                        <h3 className="card-text">Best Sallers</h3>
                        <h2 className="card-title">Adidas Shoes</h2>
                        </div>
                    </a>
                    </div>
                    <div className="col-12 col-lg-8 order-lg-1 introduce-product__type1 wow zoomInDown">
                    <a href="/#"><img className="hover-scale" src="./img/product/banner-v2-img2.webp" alt="" /></a>
                    <div className="introduce-product__text2">
                        <h2 className="card-title">Women Hoodies &amp; Sweatshirts</h2>
                        <h3 className="card-text">Season Off 30 - 10%</h3>
                        <a href="/#" className="btn btn-dark btn-lg button__animation btn-white">More Infor</a>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bannerv1;