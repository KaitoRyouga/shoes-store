import React, { Component } from 'react';

class Slide extends Component {
    render() {
        return (
            <div className="container-fluid slide">
                    <div className="slide__img">
                        <img className="shose-animation" src="./img/title/slideshow-img1.webp" alt="" />
                    </div>
                    <div className="row">
                        <div className="col-8">
                        </div>
                        <div className="cac-slide">
                        <div className="col-4 slide-position active-slide">
                            <h3 className="sub-title wow">Men's Original</h3>
                            <h1 className="main-title wow">New Sneaker Fower</h1>
                        </div>
                        <div className="col-4 slide-position">
                            <h3 className="sub-title wow">Woman's Original</h3>
                            <h1 className="main-title wow">Automn Winter Fashion</h1>
                        </div>
                        <div className="col-4 slide-position">
                            <h3 className="sub-title wow">2020 January</h3>
                            <h1 className="main-title wow">Newe String Fashion</h1>
                        </div>
                        </div>
                    </div>
                    <div className="button-header">
                        <a href="/#" className="btn btn-dark btn-lg button__animation btn-white button-go-to-up">Shop Now</a>
                    </div>
                    <div className="btn-slide">
                        <a id="next" href="/#"><i className="fas fa-caret-right" /></a>
                        <a id="prev" href="/#"><i className="fas fa-caret-left" /></a>
                    </div>
            </div>
        );
    }
}

export default Slide;