import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleSearch(event) {
    event.preventDefault();

    let apiKey = `7a6tfo3aa33dcf22944a8db00a0bf65c`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function search(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  return (
    <div className="Dictionary">
      <div className="Dictionary-search text-center">
        <form onSubmit={handleSearch}>
          <input
            type="search"
            autoFocus={true}
            placeholder=" Look up a word"
            onChange={search}
          />
          <div className="hint">
            suggested words: authentic, ambiguous, conundrum, etc...
          </div>
        </form>
      </div>
      <Results results={results} />
    </div>
  );
}
