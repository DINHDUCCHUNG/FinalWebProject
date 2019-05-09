import React from "react";
import Header from '../../components/commons/main-page/Header'
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "../../components/main-page/Footer/Footer";
import { withRouter } from "react-router-dom";
import MainContent from '../../components/main-page/MainPage/MainContent';
import Shop from "../../components/main-page/Shop/Shop";
import ProductDetail from "../../components/main-page/Shop/ProductDetail";
import BuyScreen from "../../components/main-page/Shop/BuyScreen";
class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <Header></Header>
        <BrowserRouter>
          <Route path="/home" component={MainContent} />
          <Route path='/home/shop/:category' component = {Shop}/>
          <Route path='/home/product/:productId' component = {ProductDetail}/>
          <Route path='/home/buy/:productId' component = {BuyScreen}/>
        </BrowserRouter>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(MainPage);
