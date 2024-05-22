import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <div className="fw-bold">Definition</div>
      <p>{props.meaning.definition}</p>
      <div className="fw-bold">Example</div>
      <p>{props.meaning.example}</p>
      <div className="fw-bold">Synonyms</div>
      <Synonyms synonyms={props.meaning.synonyms} />
      <br />
    </div>
  );
}
