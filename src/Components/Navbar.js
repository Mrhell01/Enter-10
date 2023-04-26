import React, { useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";
import { Auth } from "firebase/auth";
import { FormControl } from "react-bootstrap";
import { Button } from "reactstrap";
import MovieBox from "./Netflix/MovieBox";
import axios from "axios";
// import Container from 'react-bootstrap';

const Navbar = (props) => {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);

  const [text, setText] = useState("");
  const [movie, setMovie] = useState([]);
  const changeText = (event) => {
    console.log(event);
    setText(event.target.value);
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const getMovie = (e) => {
    e.preventDefault();

    axios
      .get(`http://www.omdbapi.com/?s=${text}&apikey=23991a89`)
      .then((response) => {
        console.log(response);
        setMovie(response.data.Search);
      });
      

  };

  return (
    <div>
      <div className="top-header py-4">
        <div className="container-fluid"></div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
        <div className="container-fluid navbar navbar-dark bg-dark ">
          <a className="navbar-brand" href="/Home">
            Enter-10
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon collapse navbar-collapse"
              id="navbarScroll"
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/">
                  LogIn
                </a> */}
              </li>
              <li className="nav-item">
                {/* <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Signup"
                >
                  Signup
                </a> */}
                
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/Signout"
                >
                  Logout
                </a>
              </li>
              {/* <Link to="/Signout">Signout</Link> */}
              {/* <h4 className="nav-item" style={{color : "White",size:"1px" }} >{props.name ? `Welcome - ${props.name}` : "Login Please"}</h4> */}
            </ul>

            <form className="d-flex" role="search" onSubmit={getMovie}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Movies"
                aria-label="Search"
                value={text}
                onChange={changeText}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>


      <div className="container my-3 ">
        <div className="row">
          {
            movie.map((value, index) => {
              return (
                <div className="col-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={value.Poster} className="card-img-top" alt="..." />
                  <div className="card-body">
                        <h3 className="card-title">{value.Year}</h3>
                      <h4 className="card-text">{value.title}</h4>
                      
                  </div>
                  </div>
                </div> 
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
