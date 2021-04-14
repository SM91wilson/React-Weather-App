// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Header from "./components/header/header";
import SearchBar from "./components/searchBar/searchBar";
import WeatherDiv from "./components/weatherDiv/weatherDiv";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div class ='container'>
        <div class ='row'>
          <div><SearchBar /></div>
        </div>
        <div>{/* <recent searches> */}</div>
      </div>
      <div class='container'>
        <div class='row'>
          <div>
            <WeatherDiv />
            {/* <forecast> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
