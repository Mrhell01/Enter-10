import React, { useEffect, useState } from "react";
import Home from "./Home";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Auth } from "firebase/auth";
import { auth } from "../../Firebase";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  // useEffect(() => {console.log(data)},
  //   [data])

  //Handle Change
  const handleChange = (event, property) => {
    // console.log("Name changed");
    // console.log(event.target.value);

    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(async (data) =>{
      const user = data.user;
      await updateProfile(user, {
        displayName: data.name,
      });
      navigate("/");
  })
    .catch((error) => console.log("Error-", error));
    
    setData({ ...data, [property]: event.target.value });


  };
  //Reseting the Form
  const resetData = () => {
    setData({
      name: "",
      email: "",
      password: "",
    });
  };



  // submitting the Form
  const submitForm = (event) => {
    event.preventDefault();
    // console.log(data);

    //data validate

    //call server api for sending data
  };
  return (
    <div>
      <Container>
        <Row className="mt-5 outline">
          <Col sm={{ size: 6, offset: 5 }}>
            <Card
              className="my-2"
              color="light"
              outline
              style={{
                width: "25rem",
              }}
            >
              <CardHeader>
                <h3>Fill Information To Register </h3>
              </CardHeader>

              <CardBody>
                <Form >
                  {/* Name Field */}
                  <FormGroup>
                    <Label for="name">Enter Your Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="name"
                      onChange={(e) => handleChange(e, "name")}
                      value={data.name}
                    />
                  </FormGroup>

                  {/* Email Field */}
                  <FormGroup>
                    <Label for="email">Enter Your Email-Id</Label>
                    <Input
                      type="email"
                      placeholder="Enter here"
                      id="email"
                      onChange={(e) => handleChange(e, "email")}
                      value={data.email}
                    />
                  </FormGroup>

                  {/* Password  */}
                  <FormGroup>
                    <Label for="password">Create Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter here"
                      id="password"
                      onChange={(e) => handleChange(e, "password")}
                      value={data.password}
                    />
                  </FormGroup>

                  {/* Text Area  */}
                  {/* <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup> */}
                  <Container className="text-center">
                    <button
                      onSubmit={submitForm}
                      color="primary"
                      size="lg">
                      Sign Up
                    </button>
                    <button
                      onClick={resetData}
                      color="darkGrey"
                      type="reset"
                      className="ms-2"
                    >
                      Reset
                    </button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Home/>
    </div>
  );
};

{/* <form className="d-flex" role="search" onSubmit={searchMovie}>
           <input
             className="form-control me-2"
             type="search"
             placeholder="Movie Search"
                aria-label="Search"
                name='query'
                value={query}
                onChange={changeHandler}
           />
           <button className="btn btn-outline-success" type="submit">
             Search
           </button>
         </form> */}

            {/* <form className="d-flex" onSubmit={changeHandler} autoComplete="off">
              <FormControl
              type="search"
              placeholder="Movie Search"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}></FormControl>
              <Button variant="secondary" type="submit">Search</Button>
            </form> */}
            
export default Signup;
