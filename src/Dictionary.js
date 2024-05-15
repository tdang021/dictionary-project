import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleSearch(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function search(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSearch}>
        <input type="search" autoFocus={true} onChange={search} />
      </form>
    </div>
  );
}
