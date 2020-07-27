import React, {useState, useEffect} from "react";
import "../styles.css";
import SearchMovie from "./SearchInput"
import FilmItem from "./FilmItem"
import List from "@material-ui/core/List";
import axios from "axios"
import {TabPanel} from "./TabPanel";
import AddMovieInput from "./Input";
import AddButton from "./AddButton";
import {FilmsTabs} from "./Tabs";

const apiKey = '23ba1877d174867b3ff21108f4f4e46c'


export default function MainForm() {

  const [value, setValue] = useState(1);
  const [filmsList, setList] = useState([])
  const [addedFilms, setAdded] = useState([])
  const [selectValue, setSelectValue] = useState('')

  const [search, setSearch] = useState('')

  const handleCheckBox = (event) => {
    let setWatchedToData = addedFilms.map((item) => {
      if (item.title === event.target.title) {
        item.watched = !item.watched
        return item
      } else {
        return item
      }
    })
    setAdded(setWatchedToData)
    localStorage.setItem('addedFilms', JSON.stringify(addedFilms))
  };

  useEffect(() => {
    if (!localStorage.getItem('filmsList')) {

      const fetchData = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/list/9258`, {
          params: {
            api_key: apiKey
          }
        })
        res.data.items.map((item) => {
          item.watched = false
        })
        setList(res.data.items)
        let films = JSON.stringify(res.data.items)
        localStorage.setItem('filmsList', films)
      }
      fetchData()
    } else {
      let data = JSON.parse(localStorage.getItem('filmsList'))
      setList(data)
    }
    if (!localStorage.getItem("addedFilms")) {
      localStorage.setItem('addedFilms', [])
    } else {
      let data = JSON.parse(localStorage.getItem('addedFilms'))
      setAdded(data)
    }
  }, [])


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const onSelectChange = (event, newInputValue) => {
    setSelectValue(newInputValue);
  }
  const onAddButton = () => {
    if (selectValue) {
      // delete film from list
      let data = filmsList.filter((item) => item.title !== selectValue)
      setList(data)
      localStorage.setItem('filmsList', JSON.stringify(filmsList))
      // add films
      let addadded = filmsList.filter((item) => item.title === selectValue)
      setAdded([...addedFilms, ...addadded])
      localStorage.setItem('addedFilms', JSON.stringify([...addedFilms, ...addadded]))
      setSelectValue('')
    }

  }
  const onSearchChange = (event) => {
    setSearch(event.target.value)
  }
  return (
      <>
        <div className="container">
          <div className="addMoviesBlock">
            <AddMovieInput
                InputValue={selectValue}
                onSelectChange={onSelectChange}
                loadOptions={filmsList}/>
            <AddButton onAddButton={onAddButton}/>
          </div>

          <div className="tabsWrapper">
            <FilmsTabs
                value={value}
                handleChange={handleChange}
            />
            <SearchMovie onSearchChange={onSearchChange} value={search}/>
          </div>
          <TabPanel value={value} index={0}>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className='filmItemWrapper'
            >
              {search === '' ? (addedFilms.map((item, index) => {
                if (item.watched)
                  return (
                      <FilmItem handleCheckBox={handleCheckBox} item={item} key={index}/>
                  )
              })) : (
                  (addedFilms.map((item, index) => {
                    if (item.watched && item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
                      return (
                          <FilmItem handleCheckBox={handleCheckBox} item={item} key={index}/>
                      )
                  }))
              )
              }
            </List>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className='filmItemWrapper'
            >
              {search === '' ? (addedFilms.map((item, index) => {
                if(!item.watched){
                  return (
                      <FilmItem handleCheckBox={handleCheckBox} item={item} key={index}/>
                  )
                }
              })) : (addedFilms.map((item, index) => {
                if (item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
                  return <FilmItem handleCheckBox={handleCheckBox} item={item} key={index}/>
                }
              }))
              }
            </List>
          </TabPanel>
        </div>

      </>
  )
      ;
}
