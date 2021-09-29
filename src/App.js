import React, { useState } from "react";
import "./styles.css";

const flagopedia = {
  "🇮🇳": "India",
  "🇫🇷": "France",
  "🇬🇧": "United Kingdom",
  "🇮🇹": "Italy",
  "🇱🇰": "Sri Lanka",
  "🇮🇶": "Iraq",
  "🇮🇷": "Iran",
  "🇮🇸": "Iceland",
  "🇺🇸": "United States",
  "🇷🇺": "Russia",
  "🇮🇱": "Israel",
  "🇲🇾": "Malaysia",
  "🇧🇩": "Bangladesh",
  "🇯🇲": "Jamaica",
  "🇯🇴": "Jordan",
  "🇯🇵": "Japan",
  "🇰🇪": "Kenya",
  "🇧🇷": "Brazil",
  "🇧🇹": "Bhutan",
  "🇨🇦": "Canada",
  "🇨🇭": "Switzerland",
  "🇩🇪": "Germany",
  "🇪🇬": "Egypt",
  "🇸🇪": "Sweden",
  "🇸🇬": "Singapore"
};

var flags = Object.keys(flagopedia);

export default function App() {
  var [countryName, setCountryName] = useState("Country name will appear here");
  function flagInputHandler(event) {
    let countryName = flagopedia[event.target.value];
    if (countryName === undefined) {
      countryName = "Oh!Oh! ,The entered flag is not in our database";
    }
    setCountryName(countryName);
  }
  function flagClickHandler(flag) {
    setCountryName(flagopedia[flag]);
  }

  return (
    <div className="App">
      <h1 className="heading">
        <span>🚩</span> Flagopedia <span>🚩</span>
      </h1>
      <h4>Enter flag or choose any flag below to know the country name</h4>
      <input
        style={{
          width: "70%",
          padding: "1rem",
          borderRadius: "1rem",
          margin: "2rem"
        }}
        onChange={flagInputHandler}
        placeholder="Enter the flag here"
      ></input>
      <div className="output">{countryName}</div>

      <ul className="non-bullets">
        {flags.map((flag) => {
          return (
            <li
              onClick={() => flagClickHandler(flag)}
              className="list-item"
              key={flag}
            >
              <a href="#output">{flag}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
