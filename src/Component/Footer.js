import React, { Component } from 'react';
import FooterAbove from './FooterAbove';
import FooterBelow from './FooterBelow';

class Footer extends Component {
    render() {
        return (
            <footer>
                {/* footer-above */}
                <FooterAbove />
                {/* end footer-above */}
                {/* footer-below */}
                <FooterBelow />
                {/* end footer-below */}
            </footer>
        );
    }
}

export default Footer;