import React, { Component } from 'react';
import SignUp1 from './SignUp1';
import SignUp2 from './SignUP2';
import SignUp3 from './SignUp3';

class MultiStepSignUp extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = (event) => {
        console.log(this.state)
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { step, firstName, lastName, phoneNumber, email, password } = this.state;
        const inputValues = { firstName, lastName, phoneNumber, email, password };
        // eslint-disable-next-line default-case
        switch (step) {
            case 1:
                return <SignUp1
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    inputValues={inputValues}
                />
            case 2:
                return <SignUp2
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    inputValues={inputValues}
                />
            case 3:
                return <SignUp3
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputValues={inputValues}
                    state={this.state}
                />
        }
    }
}

export default MultiStepSignUp;