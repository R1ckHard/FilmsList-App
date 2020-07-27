import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import SearchMovie from "./SearchInput";
import React from "react";


export function FilmsTabs({handleChange, value}) {

  return (
      <div className="tabsWrapper">
        <Paper square className="filmsTabs">
          <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              aria-label="icon tabs example"
          >
            <Tab
                className="imgContainer"
                icon={<>
                  <VisibilityIcon/>
                  <span>Watched</span>
                </>}
                aria-label="visibility"
            />
            <Tab
                className="imgContainer"
                icon={<>
                  <VisibilityOffIcon/>
                  <span>Unwatched</span>
                </>}
                aria-label="favorite"
            />
          </Tabs>
        </Paper>
      </div>
  )
}

