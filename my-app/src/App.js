import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar"
import RecommendedVideos from "./RecommendedVideos"
import './App.css';
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
      <Switch>
      <Route path="/search/:searchTerm">
      <h1>Search Page</h1>
      </Route>
      <Route path="/">
      
      <div className="app_page">
        <Sidebar />
        <RecommendedVideos />
        </div>
      </Route>
    </Switch>
    </Router>
    
    
   
        

    
        
      
    </div>
  );
}

export default App;