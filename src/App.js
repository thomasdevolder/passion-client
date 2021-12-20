import React from 'react';
import './App.css';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link, 
  Navigate, 
  Outlet
} from "react-router-dom";
import Home from './components/Home';
import useFetch from './hooks/useFetch'


function App() {

  console.log(process.env.REACT_APP_SERVER_URL)
  const { loading, error, data} = useFetch(`${process.env.REACT_APP_SERVER_URL}/api/guests` || "http://localhost:1337/api/guests")

  if(loading) return(<p>Loading...</p>)
  if(error) return (<p>Error :(</p>)

  console.log(data.data);

  return (
    <Router>
      <Routes>
            <Route path="/home/*" element={<Home />} />
            <Route path="/" element={<Login guestsData={data}/>} />
      </Routes>
    </Router>
  );
}

export default App;
