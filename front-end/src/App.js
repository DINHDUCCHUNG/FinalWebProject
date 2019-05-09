import React, { Component } from "react";
import "./App.css";
import LoginAdmin from "./pages/manage/LoginAdmin";
import { BrowserRouter, Route } from "react-router-dom";
import AminPage from "./pages/manage/AminPage";
import MainPage from "./pages/main/MainPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          {/* Main */}
          <Route path="/home"component={MainPage} /> 

            {/* Amin */}
          <Route path="/admin-login"  component={LoginAdmin} />
          <Route path="/admin-page" component={AminPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
