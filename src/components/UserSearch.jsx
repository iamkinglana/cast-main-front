import React, { useState } from "react";

function UserSearch() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    fetch(`http://localhost:3000/users/search?query=${query}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.error(error);
        setSearchResults([]);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <h3>Search Results</h3>
      {searchResults.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default UserSearch;
