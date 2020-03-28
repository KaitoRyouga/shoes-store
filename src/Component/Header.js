import React, { Component } from 'react';
import Navbar from './Navbar';
import Slide from './Slide';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                {/* navbar */}
                <Navbar />
                {/* end navbar */}
                {/* slide */}
                <Slide />
                {/* end slide */}
            </div>
        );
    }
}

export default Header;