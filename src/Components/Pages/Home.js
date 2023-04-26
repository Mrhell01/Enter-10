import React, { useEffect, useState } from "react";
import bg from "../Img/movie.jpg";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./Home.css"
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import Example from "../Carousel";
import MovieBox from "../Netflix/MovieBox";
import { Navigate, useNavigate } from "react-router-dom";
import Netflix from "../Netflix/Netflix";
import Cards from "../Cards";
import SignIn from "./Login";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app, auth } from "../../Firebase";
import { initializeApp } from 'firebase/app';
// import { verifyIdToken } from 'firebase/auth';
// import { verifyIdToken } from 'firebase/firebase-auth';


const Home = (props) => {
  const navigate = useNavigate();

  let imageStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white",
  };
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

  // const [validAuth, setValidAuth] = useState(false);
  // const token = localStorage.getItem("Token");
  // if (signInWithEmailAndPassword) {
  //   return <Cards/>
  // }
  // // else {
  // //   return <Navigate to={"/login"}/>;
  // // }
  // const app = initializeApp({
  //   // Initialize Firebase app config
  // });
  

  // const auth = getAuth(app);



  // verifyIdToken(auth, token)
  //   .then((decodedToken) => {
  //     // The token is valid
  //     const uid = decodedToken.uid;
  //     console.log(`Valid token for user ${uid}`);
  //     setValidAuth(true);
  //   })
  //   .catch((error) => {
  //     // The token is invalid
  //     console.error('Invalid token:', error);
  //   });


  return (
   
      
    < div >
      {/* {validAuth &&   ( <></> 
      )} */}
      <Navbar /><h4 className="opacity-75" style={{
        color: "black",
        backgroundColor: "white",
        padding: "10px",
        fontFamily: "Sans-Serif",
        textAlign: "center"
      }}>{props.name ? `Welcome - ${props.name}` : "Login Please"}
      </h4>
      <Example></Example>
      <Cards></Cards>
      <Footer></Footer>
    </div>
    
  );
};

export default Home;
