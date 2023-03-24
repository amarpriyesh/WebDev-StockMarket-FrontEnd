import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './home/home';
import Profile from "./profile/profile";
import SearchResults from "./search/searchResults";
import Details from "./details/details";

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/home" element={<Home/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/profile/:uid" element={<Profile/>}/>
              <Route path="/search/:searchCriteria" element={<SearchResults/>} />
              <Route path="/search" element={<SearchResults/>} />
              <Route path="/details/:id" element={<Details/>} />
            </Routes>
        </div>
      </Router>
  );
}

export default App;
