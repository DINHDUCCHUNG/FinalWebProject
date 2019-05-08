import React from "react";
import Header from '../../components/commons/main-page/Header'
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "../../components/main-page/Footer/Footer";
import { withRouter } from "react-router-dom";
import MainContent from '../../components/main-page/MainPage/MainContent';
import IntroManage from "../../components/admin-page/IntroManage";
class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <Header></Header>
        <BrowserRouter>
          <Route path="/" component={MainContent} />
          <Route path='/shop' component = {IntroManage}/>
        </BrowserRouter>
        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(MainPage);
