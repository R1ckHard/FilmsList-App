import React from "react";
import "../styles.css";
import {TextField} from "@material-ui/core";

export default function SearchMovie({value,onSearchChange}) {
  return (
      <TextField
          size="small"
          value={value}
          onChange={onSearchChange}
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
          className="addMovieInput"
      />
  );
}
