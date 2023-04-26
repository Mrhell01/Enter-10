import React, { useContext, useState } from 'react'
import Home from './Home'
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
import { useNavigate } from 'react-router-dom';
import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import { Link } from 'react-router-dom';


const Login = () => {

  // const submitForm = (event) => {
  //   event.preventDefault();
  // };


  const navigate = useNavigate();

    const [data, setdata] = useState({
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [submitButtonDisable, setSubmitButtonDisable] = useState(false);


    const handleSubmit = () => {
        if (!data.email || !data.password) {
            setErrorMessage("Please Enter all details");
            return;
        }

        setErrorMessage("");
        setSubmitButtonDisable(true)
        signInWithEmailAndPassword(auth, data.email, data.password).then((res) => {
            navigate("/");
            setSubmitButtonDisable(false)
        })
            .catch((err) => {
                setSubmitButtonDisable(false)
                setErrorMessage(err.message);
            });

    }

  return (
      <div>
      <Container>
        <Row className="mt-5">
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
                <h3>Enter Details to Log-In </h3>
              </CardHeader>

              <CardBody>
                <Form onSubmit={handleSubmit}>
                  {/* Email Field */}
                  <FormGroup>
                    <Label for="email">Enter Your Email-Id</Label>
                    <Input type="email" placeholder="Enter here" id="email" />
                  </FormGroup>

                  {/* Password  */}
                  <FormGroup>
                    <Label for="password">Enter your Password</Label>
                    <Input
                      type="password"
                      placeholder="Enter here"
                      id="password"
                    />
                  </FormGroup>
                  {/* Text Area  */}
                  {/* <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup> */}
                  <Container className="text-center">
                    <button  color="primary" size="lg">
                      Submit
                    </button>
                    {/* <button color="darkGrey" type="reset" className="ms-2">
                      Reset
                    </button> */}
                    <p>
                    Don't have an account ? {" "} 
                    <span>
                        <Link to="/SignUp">Signup </Link>
                        </span>
                </p>

                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Home />
    </div>
    

  )
}

export default Login
