import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props);

  if (props.results) {
    return (
      <div className="Results">
        <br />
        <h2>{props.results.word}</h2>
        <div className="Phonetics">{props.results.phonetic}</div>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
