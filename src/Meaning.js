import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning.synonyms);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <div className="fw-bold">Defintion</div>
      <p>{props.meaning.definition}</p>
      <div className="fw-bold">Synonyms</div>
      <Synonyms synonyms={props.meaning.synonyms} />
      <br />
    </div>
  );
}
