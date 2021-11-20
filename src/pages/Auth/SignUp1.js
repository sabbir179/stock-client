import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";
import "./SignUp.css";

const SignUp1 = (props) => {

  const saveAndContinue = (e) => {
    e.preventDefault();
    props.nextStep();
  };

  return (
    <Row className="mx-0 text-white sign-up-right">
      <Col md={3} className=" sign-up-left"></Col>
      <Col md={9} className=" pt-5 text-center">
        <var className="py-5">
          <p className="my-auto d-inline  border rounded-circle px-1">1 </p>
          <hr width="100px" className="d-inline-block border my-auto" />
          <p className="my-auto d-inline"> 2</p>
          <hr width="100px" className="d-inline-block border my-auto" />
          <p className="my-auto d-inline"> 3 </p>
        </var>
        <Form className="m-5">
          <Row className="mb-3 mt-5">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control onChange={props.handleChange} name="firstName" required type="text" placeholder="First name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control onChange={props.handleChange} name="lastName" required type="text" placeholder="Last name" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3 mt-5" controlId="formGridAddress1">
            <Form.Control onChange={props.handleChange} name="phoneNumber" required type="number" placeholder="Phone Number" />
          </Form.Group>

          <Form.Group className="mb-3 mt-4" controlId="formGridAddress2">
            <Form.Control onChange={props.handleChange} name="email" required type="email" placeholder="Email Address" />
          </Form.Group>

          <Form.Group className="mb-3 mt-4" controlId="formGridAddress2">
            <Form.Control onChange={props.handleChange} name="password" required type="password" placeholder="Password" />
          </Form.Group>

          <Row className="mb-3 my-5">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Check
                className="text-start"
                type="checkbox"
                required
                label="I am agree all Terms & Condition"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Link to={Routes.SIGN_UP2}>
                <Button
                  onClick={saveAndContinue}
                  variant="primary"
                  type="submit"
                  className="form-control bg-warning rounded-pill py-2"
                >
                  Next
                </Button>
              </Link>
            </Form.Group>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default SignUp1;
