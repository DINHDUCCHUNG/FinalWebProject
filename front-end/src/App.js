import React, { Component } from "react";
import "./App.css";
import LoginAdmin from "./pages/manage/LoginAdmin";
import { BrowserRouter, Route } from "react-router-dom";
import AminPage from "./pages/manage/AminPage";
import MainPage from "./pages/main/MainPage";
import Blog from "./pages/main/Blog";
import Product from "./pages/main/Product";
import BlogItem from "./pages/main/BlogItem";
import Category from "./pages/main/Category";
import ProductDetail from "./pages/main/ProductDetail";
import BuyScreen from "./pages/main/BuyScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {/* Main */}
          <Route path="/" exact={true} component={MainPage} />
          <Route path="/Blog" exact={true} component={Blog} />
          <Route path="/Blog/:id" exact={true} component={BlogItem} />
          <Route path="/Product" exact={true} component={Product} />
          <Route path="/Product/:category" exact={true} component={Category} />
          <Route
            path="/Product/:category/:productId"
            exact={true}
            component={ProductDetail}
          />
          <Route
            path="/Product/:category/Buy/:productId"
            component={BuyScreen}
          />

          
          {/* Amin */}
          <Route path="/admin-login" component={LoginAdmin} />
          <Route path="/admin-page" component={AminPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
