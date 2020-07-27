import React from "react";
import "../styles.css";
import {Checkbox} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function CheckBoxItem({title, handleChange,checked}) {
  return (
      <div className="checkBox">
        <input type="checkbox"
               title={title}
               onChange={handleChange}
               checked={checked}
        />
        <span>Watched</span>


        {/*<FormControlLabel*/}
        {/*    control={*/}
        {/*      <Checkbox*/}
        {/*          title={title}*/}
        {/*          onChange={handleChange}*/}
        {/*          color="primary"*/}
        {/*          inputProps={{'aria-label': 'secondary checkbox'}}*/}
        {/*      />*/}
        {/*    }*/}
        {/*    label="Watched"/>*/}

      </div>
  );
}
