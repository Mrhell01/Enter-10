import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputControl from "../InputControl";
// import {createUserWithEmailAndPassword} from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Auth } from "firebase/auth";
import { auth } from "../../Firebase";
import { Card } from "react-bootstrap";
// import { async } from '@firebase/util';
export default function SignUp() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

  const handleSubmit = () => {
    if (!values.name || !values.email || !values.password) {
      setErrorMessage("Please Enter all details");
      return;
    }

    setErrorMessage("");
    setSubmitButtonDisable(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        console.log(res);
        const user = res.user;
        console.log(user);
        updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");

        setSubmitButtonDisable(false);
      })
      .catch((err) => {
        setSubmitButtonDisable(false);
        setErrorMessage(err.message);
      });
  };

  return (
    <div >
    <Card className="signup opacity-75" style={{    top: "6rem" }}>
      <div>
        <h1 style={{textAlign: "center"}} >Signup</h1>
        <InputControl
          label="Name"
          placeholder="Enter your Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter Email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          type="Password"
          label="Password"
          placeholder="Enter Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        />
        <div className="log">
          <h4>{errorMessage}</h4>
          <button onClick={handleSubmit} disabled={submitButtonDisable}>
            Signup
          </button>
          <p>
            Already have an account ?{" "}
            <span>
              <Link to="/">Log-in </Link>
            </span>
          </p>
        </div>
      </div>
      </Card>
      </div>
  );
}
