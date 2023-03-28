import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './home/home';
import Profile from "./profile/profile";
import SearchResults from "./search/searchResults";
import Details from "./details/details";
import LoginScreen from "./login/login";
import {Provider} from "react-redux";
import store from "./reducers/store";
import Navigation from "./components/navigation";

function App() {
  return (
      <Provider store={store}>
        <div className="container">
            <Router>
                <Navigation/>
              <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route exact path="/home" element={<Home/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/profile/:uid" element={<Profile/>}/>
                  <Route path="/search/:searchCriteria" element={<SearchResults/>} />
                  <Route path="/search" element={<SearchResults/>} />
                  <Route path="/details/:id" element={<Details/>} />
                  <Route path="/login" element={<LoginScreen />} />
              </Routes>
            </Router>
        </div>
      </Provider>

  );
}

export default App;
