// import React, {useState, useEffect} from "react";
// import "../styles.css";
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import Paper from '@material-ui/core/Paper';
// import VisibilityIcon from '@material-ui/icons/Visibility';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
// import SearchMovie from "./SearchInput"
// import FilmItem from "./FilmItem"
// import List from "@material-ui/core/List";
// import axios from "axios"
// import {TabPanel} from "./TabPanel";
//
// const apiKey = '23ba1877d174867b3ff21108f4f4e46c'
//
//
// export default function IconTabs() {
//
//   const [value, setValue] = useState(0);
//   const [filmsList, setList] = useState([])
//
//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get(`https://api.themoviedb.org/3/list/9258`, {
//         params: {
//           api_key: '23ba1877d174867b3ff21108f4f4e46c'
//         }
//       })
//       setList(res.data.items)
//       let films = JSON.stringify(res.data.items)
//       localStorage.setItem('filmsList', films)
//     }
//     fetchData()
//   }, [])
//
//   console.log(filmsList)
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//
//   return (
//       <>
//         <TabPanel
//             value={value}
//             index={0}>
//           <List
//               component="nav"
//               aria-labelledby="nested-list-subheader"
//               className='filmItemWrapper'
//           >
//             <FilmItem/>
//           </List>
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//           Item Two
//         </TabPanel>
//       </>
//   );
// }
