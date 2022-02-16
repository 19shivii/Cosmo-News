import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {

    return (
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pagesize={12} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" pagesize={12} country="in" category="business" />} />
            <Route exact path="/sport" element={<News setProgress={this.setProgress} apikey={this.apikey} key="sport" pagesize={12} country="in" category="sport" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apikey={this.apikey}key="entertainment" pagesize={12} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" pagesize={12} country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" pagesize={12} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" pagesize={12} country="in" category="science" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" pagesize={12} country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
    )
  }
}