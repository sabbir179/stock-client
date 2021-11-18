import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp2 = () => {
  return (
    <Row className="mx-0 text-white sign-up-right">
      <Col md={3} className=" sign-up-left"></Col>
      <Col md={9} className=" pt-5 text-center">
        <var className="py-5">
          <p className="my-auto d-inline">1 </p>
          <hr width="100px" className="d-inline-block border my-auto" />
          <p className="my-auto d-inline  border rounded-circle px-1"> 2</p>
          <hr width="100px" className="d-inline-block border my-auto" />
          <p className="my-auto d-inline"> 3 </p>
        </var>
        <Form className="m-5">
          <Form.Group className="mb-3 mt-4" controlId="formGridAddress2">
            <Form.Control
              type="text"
              placeholder="Which trading account you are using"
              className="py-3"
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-4" controlId="formGridAddress2">
            <Form.Control
              type="text"
              placeholder="Add refereal code (is fill automatically)
"
              className="py-3"
            />
          </Form.Group>

          <Row className="mb-3 my-5">
            <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
            <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Link to="/signup3">
                <Button
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

export default SignUp2;
