import React from "react";
import './css/logo.css'

class IntroManage extends React.Component {
  render() {
    return (
      <div className="main">
        <img
          className="logo"
          src="http://localhost:3001/logo.jpg"
          alt=""
          height="30%"
          width="30%"
        />
      </div>
    );
  }
}
export default IntroManage;
