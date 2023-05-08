import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "firebase/auth";
import InputControl from "../InputControl";
import { auth } from "../../Firebase";
import { Alert } from "reactstrap";
import { Card } from "react-bootstrap";
import Cards from "../Cards";

export default function SignIn() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

  // const diffToast = () => {
  //   alert("Log In Successfully")
  // }


   const handleSubmit = () => {
    if (!values.email || !values.password) {
      setErrorMessage("Please Enter all details");
      return;
    }

     
    
    setErrorMessage("");
    setSubmitButtonDisable(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {

        //token set
        localStorage.setItem(res.user.accessToken, "Token");
        alert("Successfully Logged In ")
        navigate("/Home");
        <Cards/> 
        setSubmitButtonDisable(false);
      })
      .catch((err) => {
        setSubmitButtonDisable(false);
        setErrorMessage(err.message);
      });
  };
  return (
    <div >
      {/* <h1 className="text-truncate opacity-100" style={{color:"White", textAlign: "center" }}>Enter-10</h1> */}
      <Card className="signin mx-auto opacity-75" style={{    top: "8rem" }} >
      <div >
        <h1 style={{textAlign: "center"}}>Log-In</h1>
        <InputControl
          label="Email"
          placeholder="Enter Email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
            placeholder="Enter Password"
            type="Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        />
        <div className="log  ">
          <h4>{errorMessage}</h4>
          <button type="Password"onClick={handleSubmit}  disabled={submitButtonDisable}>
            Login
          </button>
          
          <p>
            Don't have an account ?{" "}
            <span>
              <Link to="/SignUp">Signup </Link>
            </span>
          </p>
        </div>
      </div>
      </Card>
      </div>
  );
}
