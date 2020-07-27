import React from "react";
import "../styles.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import CheckBoxItem from "./CheckBox";


export default function NestedList({item,handleCheckBox}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      <div className="filmItemWrapper">
        <ListItem  button onClick={handleClick}>
          <ListItemIcon>
            {open ? <ExpandMore/> : <NavigateNextIcon/>}
          </ListItemIcon>
          <ListItemText primary={item.title}/>
        </ListItem>
        <Collapse  in={open} timeout="auto" unmountOnExit>
          <div className="infoContainer">
            <div className="poster">
              <img alt={item.title} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/>
            </div>
            <div className="filmInfo">
              <div>
                <ul>
                  <li>Year:{item.release_date}</li>
                  <li>Rate:{item.vote_average}</li>
                  <li>Description:{item.overview}</li>
                </ul>
              </div>
              <CheckBoxItem title={item.title} handleChange={handleCheckBox} checked={item.watched} />
            </div>
          </div>

        </Collapse>
      </div>
  );
}
