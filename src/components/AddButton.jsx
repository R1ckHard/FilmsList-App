import React from "react";
import "../styles.css";
import { Button } from "@material-ui/core";

export default function AddButton({onAddButton}) {
  return (
    <div className="addMovieBtn">
      <Button onClick={onAddButton} variant="contained" color="primary" className="addMovieBtn">
        Add
      </Button>
    </div>
  );
}
