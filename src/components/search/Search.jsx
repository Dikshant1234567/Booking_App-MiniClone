import "./search.css";
import { Button } from "@mui/material";

import React from "react";

function Search() {
  return (
    <section className="search">
      <div className="searchBox">
        <span>
          <input type="text" />
        </span>
        <span>
          <input type="datetime" name="" id="" />
        </span>
        <span>
          <input type="number" name="" id="" />
        </span>
        <Button className="search-btn" variant="contained">Search</Button>
      </div>
    </section>
  );
}

export default Search;
