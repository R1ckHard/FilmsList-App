import React from "react";
import "../styles.css";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function AddMovie({loadOptions,InputValue,onSelectChange}) {
  return (
      <div>
        <Autocomplete
            inputValue={InputValue}
            onInputChange={onSelectChange}
            id="combo-box-demo"
            size="small"
            options={loadOptions}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        />
      </div>
  );
}
