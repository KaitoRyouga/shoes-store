import React, { Component } from 'react';
import Bannerv1 from './Bannerv1';
import Product from './Product';
import Discount from './Discount';
import Bannerv2 from './Bannerv2';
import Subscribe from './Subscribe';
import ReturnTop from './ReturnTop';

class Content extends Component {
    render() {
        return (
            <div className ="content">
                {/* bannerv1 */}
                    <Bannerv1 />
                {/* end bannerv1 */}
                {/* product */}
                    <Product />
                {/* end product */}
                {/* discount */}
                    <Discount />
                {/* end discount */}
                {/* bannerv2 */}
                    <Bannerv2 />
                {/* end bannerv2 */}
                {/* subscribe */}
                    <Subscribe />
                {/* end subscribe */}
                {/* returntop */}
                    <ReturnTop />
                {/* end returntop */}
            </div>
        );
    }
}

export default Content;