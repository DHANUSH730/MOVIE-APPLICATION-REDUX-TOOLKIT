import React from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import "./App.scss"
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home"
function App() {
  return (
    <div className="App">
    <Router>
      <Header></Header>
      <div className="container">

      
      <Routes>
        
      <Route path="/" Component={Home}/>
      <Route path="/movie/:imdbID" Component={MovieDetail}/>
      <Route Component={PageNotFound}/>
        
      </Routes>
      </div>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
