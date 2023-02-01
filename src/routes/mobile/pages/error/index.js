import React, { useState, useEffect, useRef, createRef } from "react";
import "./style.css";

function Error() {
  
  return (
    <div id="error">
      <div className="spacer"/>
      <section className="page-section">
        <div className="main-title">
            <h2 className="line">404 Error</h2>
            <p className="main-text">Oops! Looks like the page you're looking for doesn't exist.</p>
        </div>
        
      </section>
     </div>
  );
}

export default Error;
