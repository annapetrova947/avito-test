import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { getItems } from "../../services/actions/movies";
import Movies from "../Movies/Movies";
import { MovieDetails } from './../MovieDetails/MovieDetails'
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    getItems()(dispatch);
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
       </Routes>    
    </div>
  );
}

export default App;
