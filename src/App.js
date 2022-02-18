import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const App =()=>  {
 const apikey=process.env.REACT_APP_NEWS_API
 const[progress,setProgress]=useState(0)
    return (
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pagesize={12} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pagesize={12} country="in" category="business" />} />
            <Route exact path="/sport" element={<News setProgress={setProgress} apikey={apikey} key="sport" pagesize={12} country="in" category="sport" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey}key="entertainment" pagesize={12} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" pagesize={12} country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pagesize={12} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pagesize={12} country="in" category="science" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pagesize={12} country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
    )
  }
export default App;