import React from "react";
import * as quotes from "../quotesConfig";

class Footer extends React.Component {
  render() {
    const quotesTexts = quotes.QUOTES_TEXTS;
    return (
      <div
        className="ui center aligned segment"
        style={{ backgroundColor: "#eeab98" }}
      >
        <div class="ui massive horizontal statistic">
          <div class="value" style={{ color: "#4d4b68" }}>
            4
          </div>
          <div class="label" style={{ color: "#4d4b68" }}>
            tasks are done today! Keep Going.
          </div>
        </div>
        <div class="ui center aligned container">
          <i>
            <p style={{ fontSize: "48px" }}>{quotesTexts[0].text}</p>
          </i>
        </div>
      </div>
    );
  }
}

export default Footer;
