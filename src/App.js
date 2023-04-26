import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import Signup from './Components/Pages/Signup';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import { Auth } from 'firebase/auth';
import Signout from './Components/Pages/Signout';
import { auth } from './Firebase';
import MovieBox from './Components/Netflix/MovieBox';
import { Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDashboard from './Components/Pages/UserDashboard';
import PrivateRoute from './Components/PrivateRoute';
import Netflix from './Components/Netflix/Netflix';



function App() {
  const [userName, setUserName] = useState("");
  useEffect(()=> {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName)
      }
      else setUserName("");
      console.log(user);
    })
  })

  // const [movies, setMovies] = useState([]);
  // const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=bc24c976cea5d2a205d5252ab187ef7b";
  // const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=bc24c976cea5d2a205d5252ab187ef7b&query"
  // useEffect(() => {
  //   fetch(API_URL)
  //   .then((res)=>res.json())
  //   .then(data=>{
  //     console.log(data);
  //     setMovies(data.results);
  //   })
  // }, [])
  


  return (
    <>
      {/* <div className='container'>
        <div className='grid'>
        {movies.map((movieReq)=> <MovieBox key={movieReq.id} {...movieReq}/>)}
      </div>
      </div> */}
    <Router>
        <Routes>
          <Route path="/" element ={<Login/>}/>
          <Route path="/home" element ={<Home name={userName}/>}/>
          <Route path="/Signup" element ={<Signup/>}/>
          <Route path="/Signout" element={<Signout />} />
          <Route path="/Netflix" element={<Netflix />} />



          <Route path="/user" element={<PrivateRoute />}>
            <Route path="Dashboard" element={<UserDashboard />} />
            
          </Route>
        </Routes>

      </Router>
     
      </>
  );
}

export default App;