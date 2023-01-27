import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import './App.scss';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movies/:imdbID" element={<MovieDetail />} />
            <Route element={<NotFound />} />
          </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
