import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

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
      <div className="Dictionary-search">
        <form onSubmit={handleSearch}>
          <input type="search" autoFocus={true} onChange={search} />
        </form>
      </div>
      <Results results={results} />
    </div>
  );
}
