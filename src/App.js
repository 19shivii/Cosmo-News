import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  render() {

    // Your API key= is: 817bc4c4ef3641319e677329256f17bf
    return (
      <> 
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general"  pagesize={12} country="in" category="general" />} />
            <Route exact path="/business" element={<News key="business" pagesize={12} country="in" category="business" />} />
            <Route exact path="/sport" element={<News key="sport" pagesize={12} country="in" category="sport" />} />
            <Route exact path="/entertainment" element={<News key="entertainment"  pagesize={12} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News key="general"  pagesize={12} country="in" category="general" />} />
            <Route exact path="/health" element={<News key="health" pagesize={12} country="in" category="health" />} />
            <Route exact path="/science" element={<News key="science" pagesize={12} country="in" category="science" />} />
            <Route exact path="/technology" element={<News key="technology" pagesize={12} country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}