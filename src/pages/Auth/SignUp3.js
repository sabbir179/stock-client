import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Col, Form, Row, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./SignUp.css";

import { fetchAuthUser } from "../../redux/slices/auth.slice";
import { API } from "../../api";

const SignUp3 = (props) => {

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();



  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  }

  const onSubmit = e => {
    e.preventDefault();
    let userInfo = props.state;
    delete userInfo.step;

    setIsLoading(true);
    API.signUp(userInfo)
      .then((res) => {
        dispatch(fetchAuthUser());
      })
      .finally(() => setIsLoading(false));

  }

  return (
    <Row className="mx-0 text-white sign-up-right">
      <Col md={3} className=" sign-up-left"></Col>
      <Col md={9} className=" pt-5 text-center">
        <var className="py-5">
          <p className="my-auto d-inline">1 </p>
          <hr width="100px" className="d-inline-block border my-auto" />
          <p className="my-auto d-inline"> 2</p>
          <hr width="100px" className="d-inline-block border my-auto" />
          <p className="my-auto d-inline  border rounded-circle px-1"> 3 </p>
        </var>
        <Form className="m-5" onSubmit={onSubmit}>
          <Form.Group className="mb-3 mt-5" controlId="formGridAddress1">
            <Form.Control type="number" placeholder="Enter your card number" />
          </Form.Group>
          <Row className="mb-3 mt-5">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="text" placeholder="Enter expiry date" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail"></Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="password" placeholder="Enter CVV" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3 mt-4" controlId="formGridAddress2">
            <Form.Control type="email" placeholder="Enter mane of card" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Row className="mb-3 my-5">
              <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Button
                  onClick={back}
                  variant="primary"
                  type="submit"
                  className="form-control bg-warning rounded-pill py-2"
                >
                  Previous
                </Button>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Button
                  variant="primary"
                  type="submit"
                  className="form-control bg-warning rounded-pill py-2"
                >
                  {isLoading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : null}
                  Submit
                </Button>
              </Form.Group>
            </Row>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default SignUp3;
