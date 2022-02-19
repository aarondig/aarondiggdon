import React, { useEffect, useRef } from "react";
import "./style.css";

function Article({ el, isCurrent }) {

  
  return (
    <div id="article">
      {/* <h4 className="subtitle">About This Project</h4> */}
            <h1 className="title">{el.header}</h1>
            <p className="description">{el.body}</p>
      {el.subsections.map((element, i) => {
        switch (element.type) {
          default: {
            return (
              <p className="description">{element.body}</p>
            );
          }
          case "text/image": {
            return (
            <div className="subsection" key={i}>
              <div className="text-c">
              <h3 className="subtitle">{element.subhead}</h3>
              <p className="description">{element.subbody}</p>
              </div>
              <div className="sub-img-c">
                <img className="sub-img" src={element.href}/>
              </div>
            </div>
            );
          }
          case "image/text": {
            return (
            <div className="subsection" key={i}>
              <div className="sub-img-c">
                <img className="sub-img" src={element.href}/>
              </div>
              <div className="text-c">
              <h3 className="subtitle">{element.subhead}</h3>
              <p className="description">{element.subbody}</p>
              </div>
            </div>
            );
          }
          case "text/text": {
            return (
            <div className="subsection" key={i}>
              <h3 className="subhead">{element.subhead}</h3>
              <p className="description">{element.subbody}</p>
            </div>
            );
          }
        }
      })}


    </div>
  );
}

export default Article;
