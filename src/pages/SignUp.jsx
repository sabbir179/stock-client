import React , { useState } from 'react';
import FromInput from '../components/SignUp/FromInput';
import { Form,  Row, Col, Button, input, label} from 'react-bootstrap';


const SignUp = () => {

   const [values, setValues] = useState({
       username: "",
       email: "",
       phone: "",
       address: "",
       password: "",
       confirmPassword: "",
       
   })
   

   const inputs = [
       {
           id:1,
           name:"username",
           type:"text",
           placeholder:"Username",
           label:"Username"
       },
       {
           id:2,
           name:"email",
           type:"text",
           placeholder:"Email",
           label:"Email"
       },
       {
           id:3,
           name:"phone",
           type:"text",
           placeholder:"Phone",
           label:"Phone"
       },
       {
           id:4,
           name:"address",
           type:"text",
           placeholder:"Address",
           label:"Address"
       },
       {
           id:5,
           name:"password",
           type:"password",
           placeholder:"Password",
           label:"Password"
       },
       {
           id:6,
           name:"confirmpassword",
           type:"password",
           placeholder:"Confirm Password",
           label:"Confirm Password"
       },
   ]


   const handleSubmit = (e) => {
       e.preventDefault();
       
   }


   const onChange = (e) => {
       setValues({...values, [e.target.name]: e.target.value})
   }

   console.log(values)

    return (
        <div className="align-self-center " style={{backgroundColor:"#1C75BA", height:"600px", marginBottom:"50px", color:"#fff"}}>
            <Row className= "d-flex ">
                <Col className="text-center">
                   
                    <h1 className=" col-6 col-md-4 mt-5 pt-5  p-5 " style= {{writingMode: "vertical-rl", }} >Sign up</h1>
                </Col>
                <Col className="col-sm-6 mt-5 pt-5 col-md-8 container" >
                    <Form.Group className="m-2  rounded " style={{width:"500px"}} controlId="blogForm.ControlInput1" onSubmit={handleSubmit} >
                        {inputs.map((input) =>(
                            <Form.Control className="p-2 m-3 mt-3 shadow  " 
                                    key={input.id} {...input} 
                                    value={values[input.name]} 
                                    onChange={onChange} 
                       />
                        ))}
                       <div className="d-flex form-check form-check-inline " >
                            <input className="form-check-input shadow " type="checkbox" value="" id="inlineCheckbox1"  />
                            <label className="form-check-label m-2" for="flexCheckChecked">
                            I am agree all Terms & Condition
                            </label>
                       
                       <Button variant="warning" type="submit" className="px-5 m-2 py-3 fw-bold shadow rounded ">Submit</Button>
                       </div>
                    </Form.Group>
                </Col>
            </Row>
        </div>
    );
};

export default SignUp;