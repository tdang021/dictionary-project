import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function search(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = `7a6tfo3aa33dcf22944a8db00a0bf65c`;
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Dictionary">
      <form onSubmit={handleSearch}>
        <input type="search" autoFocus={true} onChange={search} />
      </form>
    </div>
  );
}
