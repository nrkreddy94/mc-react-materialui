import React, { Component } from "react";

class Banner extends Component {
  render() {
    const bannerStyle = {
      textAlign: "right",
      padding: "1%",
      background: "yellowgreen",
    };
    const bannerHeaderStyle = {
      fontFamily: "cursive",
      color: "red",
      fontSize: "xx-large"
    }
    const bannerCaptionStyle = {
      fontFamily: "cursive",
      color: "white",
      fontSize: "larger"
    }
    const bannerCaption2Style = {
      fontFamily: "cursive",
      color: "red",
      fontSize: "larger",
      paddingTop: "2%"
    }
    return (
      <div className="jumbotron bannerStyle">
        <div style={bannerStyle}>
          <p style={bannerHeaderStyle} >iFMIS Production</p>
          <p style={bannerCaptionStyle}> Maryland Department of Transporation</p>
          <p style={bannerCaption2Style}>Contractor Compliance and Reporting System</p>
        </div>

      </div>
    );
  }
}

export default Banner;
