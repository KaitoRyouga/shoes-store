import React, { Component } from 'react';
import Header from './Component/Header';
import Content from './Component/Content';
import Footer from './Component/Footer';

class App extends Component {
  render() {
    return (
      <div className = "chuatatca">
        {/* start */}
        {/* header: navbar, slide */}
        <Header />
        {/* end header */}
        {/* content */}
        {/* content: bannerv1, product , discount , bannerv2 ,subscribe ,returntop */}
        <Content />
        {/* end content */}
        {/* footer : footer-above, footer-below */}
        <Footer />
        {/* end footer */}
        {/* end */}
      </div>
    );
  }
}

export default App;