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
import RegisterScreen from "./register/register";
import NewsComponent from "./news/news"
import NavigationSidebar from "./navigation";



function App() {

  return (
      <Provider store={store}>
        <div className="App">
            <Router>
                <div className="row m-1 ">
                    <div className="d-none d-sm-block col-sm-1 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                        <NavigationSidebar active="news"/>
                    </div>

                    <div className="col-sm-11 col-md-10 col-lg-7 col-xl-7 col-xxl-7"
                         >
              <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route exact path="/home" element={<Home/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/profile/:uid" element={<Profile/>}/>
                  <Route path="/search/:searchCriteria" element={<SearchResults/>} />
                  <Route path="/search" element={<SearchResults/>} />
                  <Route path="/details/:id" element={<Details/>} />
                  <Route path="/login" element={<LoginScreen />} />
                  <Route path="/register" element={<RegisterScreen />} />
                  <Route path="/news" element={<NewsComponent/>} />
              </Routes>
                    </div>
                    <div className="d-none d-lg-block col-lg-3  col-xl-3 col-xxl-3">
                    <div className="  rounded border list-group">

                        <div className="list-group-item bg-light">
                            Sample
                        </div>
                        <div className="list-group-item bg-light">
                            Sample
                        </div>
                        <div className="list-group-item bg-light">
                            Sample
                        </div>

                    </div>
                    </div>
                </div>

            </Router>
        </div>
      </Provider>

  );
}

export default App;
