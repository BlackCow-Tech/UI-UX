import React, { useState } from "react";
import "../css/104.css";

function F104() {

  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="frame">
      <p className="text-wrapper">Find your offer and Enjoy!</p>
      <div className="frame-wrapper">
        <div className="div">
        <div className="frame-661">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/4oxngh7jeal-41%3A405?alt=media&token=508ace0d-eebe-4281-ad68-db5690bbae90"
          alt="Not Found"
          className="search"
        />
      </div>
          <input
            className="search-a-shoes"
            placeholder="Search a shoes, brands..."
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </div>
  );
}

export default F104;
