import React, { useState } from 'react';
import { Form, Row, Col, Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { API } from '../../api';
import { Routes } from '../../constants';
import "./SignUp.css";

const SignUp = () => {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
    })

    const [step, setStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const history = useHistory()


    const isValidForm = () => {
        const { firstName, lastName, email, phone, password } = values
        return firstName && lastName && email && phone && password
    }
    const onSubmit = async () => {
        try {
            if (isValidForm()) {
                setIsSubmitting(true)
                console.log(values)
                await API.signUp(values)
                setIsSubmitting(false)
                history.push(Routes.SIGN_UP_SUCCESS)
            }
        } catch (error) {
            // TODO: handle error here...
            console.error(error)
            alert(error.message)
            setIsSubmitting(false)
        }
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onNextClick = () => {
        if (step < 3) {
            setStep((prevStep) => prevStep + 1)
        }
    }

    const onPreviousClick = () => {
        if (step > 1) {
            setStep((prevStep) => prevStep - 1)
        }
    }

    const renderStepper = () => {
        switch (step) {
            case 1:
                return (
                    <var className="py-5">
                        <p className="my-auto d-inline  border rounded-circle px-1">1 </p>
                        <hr width="100px" className="d-inline-block border my-auto" />
                        <p className="my-auto d-inline"> 2</p>
                        <hr width="100px" className="d-inline-block border my-auto" />
                        <p className="my-auto d-inline"> 3 </p>
                    </var>
                )
            case 2:
                return (
                    <var className="py-5">
                        <p className="my-auto d-inline">1 </p>
                        <hr width="100px" className="d-inline-block border my-auto" />
                        <p className="my-auto d-inline  border rounded-circle px-1"> 2</p>
                        <hr width="100px" className="d-inline-block border my-auto" />
                        <p className="my-auto d-inline"> 3 </p>
                    </var>
                )
            case 3:
                return (
                    <var className="py-5">
                        <p className="my-auto d-inline">1 </p>
                        <hr width="100px" className="d-inline-block border my-auto" />
                        <p className="my-auto d-inline"> 2</p>
                        <hr width="100px" className="d-inline-block border my-auto" />
                        <p className="my-auto d-inline  border rounded-circle px-1"> 3 </p>
                    </var>
                )
            default:
                return null
        }
    }

    const renderUserForm = () => {
        return (
            <Form className="m-5">
                <Row className="mb-3 mt-5">
                    <Form.Group as={Col}>
                        <Form.Control onChange={onChange} name="firstName" required type="text" placeholder="First name" />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control onChange={onChange} name="lastName" required type="text" placeholder="Last name" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3 mt-5">
                    <Form.Control onChange={onChange} name="phone" required type="text" placeholder="Phone Number" />
                </Form.Group>

                <Form.Group className="mb-3 mt-4">
                    <Form.Control onChange={onChange} name="email" required type="email" placeholder="Email Address" />
                </Form.Group>

                <Form.Group className="mb-3 mt-4">
                    <Form.Control onChange={onChange} name="password" required type="password" placeholder="Password" />
                </Form.Group>

                <Row className="my-4">
                    <Form.Group as={Col}>
                        <Form.Check
                            className="text-start"
                            type="checkbox"
                            required
                            label="I am agree all Terms & Condition"
                        />
                    </Form.Group>
                </Row>
            </Form>
        )
    }

    const renderReferralForm = () => {
        return (
            <Form className="m-5">
                <Form.Group
                    className='mb-3 mt-4'
                >
                    <Form.Control
                        onChange={() => { }}
                        name='tradingAccount'
                        type='text'
                        placeholder='Which trading account you are using'
                        className='py-3'
                    />
                </Form.Group>

                <Form.Group
                    className='mb-3 mt-4'
                >
                    <Form.Control
                        onChange={() => { }}
                        value={''}
                        name='referral'
                        type='text'
                        placeholder='Add referral code (is fill automatically)'
                        className='py-3'
                    />
                </Form.Group>
            </Form>
        )
    }

    const renderPaymentCardForm = () => {
        return (
            <Form className="m-5">
                <Form.Group className="mb-3 mt-5">
                    <Form.Control type="text" placeholder="Enter your card number" />
                </Form.Group>
                <Row className="mb-3 mt-5">
                    <Form.Group as={Col}>
                        <Form.Control type="text" placeholder="Enter expiry date" />
                    </Form.Group>
                    <Form.Group as={Col} ></Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control type="password" placeholder="Enter CVV" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3 mt-4">
                    <Form.Control type="text" placeholder="Enter mane of card" />
                </Form.Group>
            </Form>
        )
    }

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return renderUserForm()
            case 2:
                return renderReferralForm()
            case 3:
                return renderPaymentCardForm()
            default:
                return null
        }
    }

    const renderStepActions = () => {
        return (
            <Row className="mb-3 my-5 px-5">
                <Col md={4}>
                    {
                        step > 1 ?
                            <Button
                                onClick={onPreviousClick}
                                variant='primary'
                                type='submit'
                                className='form-control bg-warning rounded-pill py-2'
                            >
                                Previous
                            </Button> : null
                    }
                </Col>
                <Col md={{ span: 4, offset: 4 }}>
                    {
                        step === 3 ?
                            <Button
                                onClick={onSubmit}
                                variant="primary"
                                type="submit"
                                className="form-control bg-warning rounded-pill py-2"
                            >
                                {
                                    isSubmitting ? (
                                        <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                    ) : null
                                }
                                Submit
                            </Button>
                            :
                            <Button
                                onClick={onNextClick}
                                variant="primary"
                                type="submit"
                                className="form-control bg-warning rounded-pill py-2"
                            >
                                Next
                            </Button>
                    }
                </Col>
            </Row>
        )
    }


    return (
        <Row className="mx-0 text-white sign-up-right">
            <Col md={5} className="sign-up-left"></Col>
            <Col md={7} className="pt-5 text-center">
                {renderStepper()}
                {renderStepContent()}
                {renderStepActions()}
            </Col>
        </Row>
    );
};

export default SignUp;