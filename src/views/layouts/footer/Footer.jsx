import React from "react";
import BaseComponent from "../../../components/BaseComponent";

export default class Footer extends BaseComponent {
  render() {
    const footerText="Maryland Department of Transporation"
    return (
      <footer className="footer-bar">       
        <p className="text-center" style={{ padding: "1%" }}>{footerText}</p>
      </footer>
    );
  }
}
