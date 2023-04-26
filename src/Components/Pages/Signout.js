import React from 'react'
import {signOut} from "firebase/auth";
import { Auth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';
import { Container } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card } from 'react-bootstrap';



export default function Signout() {
 const navigate =useNavigate();

  
  const out = () => {
      signOut(auth).then(() => { 
        console.log("successfully logged out");
        
        navigate("/");
          }).catch((error) => {
            console.log("error");
            navigate("/");
          });
    }

  return (
    <Card className="opacity-75" style={{    top: "12rem" }} >
      <Container className="opacity-75" style={{color: "black",
      backgroundColor: "white",
      padding: "10px",
          fontFamily: "Sans-Serif",
      textAlign: "center",
      
    }}>
      
           <div >
          <h1>Sure You Want To Sign-Out?</h1>
        <button  onClick={out}>
            Sign out
        </button>
        <ToastContainer />

    </div>
      </Container>
      </Card>
  )
}