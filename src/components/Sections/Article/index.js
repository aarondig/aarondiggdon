import React, { useEffect, useRef } from "react";
import "./style.css";

function Article({ el }) {
  return (
    <div id="article">
      {/* <h4 className="subtitle">About This Project</h4> */}
      <div className="row" style={{marginBottom: "8%"}}>
        <div className="description-c">
          <h1 className="title">{el.header}</h1>
          <p className="description">{el.body}</p>
        </div>
        <div className="spacer"></div>
      </div>
      {el.subsections.map((element, i) => {
        //IF LAST SUBSECTION
        // if (i === el.subsections.length -1) {

        // }

        switch (element.type) {
          default: {
            return <p className="description" key={i}>{element.body}</p>;
          }
          case "text/space": {
            return (
              <div className={i !== el.subsections.length -1 ? "subsection" : "subsection last"} key={i}>
                
                <div className="left-c">
                <h3 className="subtitle">{element.subhead}</h3>
                <p className="description">{element.subbody}</p>
                </div>
                <div className="right-c" />
        
              </div>
            )
          }
          case "text/image": {
            return (
              <div className={i !== el.subsections.length -1 ? "subsection" : "subsection last"} key={i}>
                <div className="left-c">
                  <h3 className="subtitle">{element.subhead}</h3>
                  <p className="description">{element.subbody}</p>
                </div>
                <div className="sub-img-c">
                  <img className="sub-img" src={element.src} />
                </div>
              </div>
            );
          }
          case "image/text": {
            return (
              <div className={i !== el.subsections.length -1 ? "subsection" : "subsection last"} key={i}>
                <div className="sub-img-c">
                  <img className="sub-img" src={element.src} />
                </div>
                <div className="left-c">
                  <h3 className="subtitle">{element.subhead}</h3>
                  <p className="description">{element.subbody}</p>
                </div>
              </div>
            );
          }
          case "title/text": {
            return (
              <div className={i !== el.subsections.length -1 ? "subsection" : "subsection last"} key={i}>
                <h3 className="subhead">{element.subhead}</h3>
                <div className="left-c">
                <p className="description no-margin">{element.subbody}</p>
                </div>
              </div>
            );
          }
          case "text/color": {
            return (
              <div className="subsection" key={i}>
                <div className="left-c">
                  <h3 className="subtitle">{element.subhead}</h3>
                  <p className="description">{element.subbody}</p>
                </div>
                <div className="sub-color-c">
                  {element.colors.map((e, i) => {
                    return (
                      <div
                        className="color-c"
                        style={{ background: e }}
                      >
                        <h3 className="color">{e}</h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }


          case "font/color": {
            return (
              <div className="subsection" key={i}>
                <div className="sub-font-c">
                  <div className="subtitle">Typeography</div>
                  <div className="fonts-c">
                {element.fonts.map((e, i) => {
                    return (
                      <div
                        className="font-c"
                        key={i}
                      >
                        <h1 className="font" style={{fontFamily: e.fontFamily, fontSize: e.fontSize, fontWeight: e.fontWeight, color: e.color}}>{e.name}</h1>
                      </div>
                    );
                  })}
                  </div>
                 
                </div>
                <div className="sub-color-c">
                <div className="subtitle">Colors</div>
                  {element.colors.map((e, i) => {
                    return (
                      <div
                        className="color-c"
                        style={{ background: e }}
                        key={i}
                      >
                        <h3 className="color">{e}</h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          case "text/color/font": {
            return (
              <div className="subsection" key={i}>
                <div className="left-c">
                  <h1 className="subtitle">{element.subhead}</h1>
                  <p className="description">{element.subbody}</p>
                {element.fonts.map((e, i) => {
                    return (
                      <div
                        className="font-c"
                        key={i}
                      >
                        <h1 className="font" style={{fontFamily: e.fontFamily, fontSize: e.fontSize, fontWeight: e.fontWeight, color: e.color}}>{e.name}</h1>
                      </div>
                    );
                  })}
                 
                </div>
                <div className="sub-color-c">
                  {element.colors.map((e, i) => {
                    return (
                      <div
                        className="color-c"
                        style={{ background: e }}
                        key={i}
                      >
                        <h3 className="color">{e}</h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        }
      })}
    </div>
  );
}

export default Article;
