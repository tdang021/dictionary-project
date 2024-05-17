import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <div>
              <li key={index}>{synonym}</li>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
