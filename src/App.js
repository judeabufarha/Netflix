import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {SocialMediaIconsReact} from 'social-media-icons-react';

import {Navbar} from './components/navbar';
import {TopBanner} from './components/topbanner';
import {MovieSection} from './components/moviesection';
import { Footer } from './components/footer';
import {MyList} from "./components/mylist";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/">
            <Navbar/>
            <TopBanner/>
            <MovieSection/>
            <Footer/>
          </Route>
          <Route path = "/my-list">
            <Navbar/>
            <MyList/>
            <Footer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
