import React from 'react'
import { Form,Button } from 'react-bootstrap'
import './Signin.css';
const SignIn = () => {
    return (
        <div>
            <div className="row d-flex align-items-center justify-content-center shadowNew" >
                <div className="col-sm-12 col-lg-7 m-sm-5 rounded shadow-lg p-4">
                    <div className="col-sm-12 text-center font-weight-bold  mb-4" style={{fontSize:25}}>SignIn and Continue</div>
                <Form className="w-75 mx-auto">
                    <Form.Group  className="mt-2" controlId="formBasicEmail">
                        <Form.Label className="font-weight-bold">Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" style={{background: 'rgba(255,255,255,0.4)'}}/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="font-weight-bold">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" style={{background: 'rgba(255,255,255,0.4)'}}/>
                    </Form.Group>
                    
                    <div className="">
                    {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check style={{color:'green'}} className="btn w-50 btn-block mx-auto font-weight-bold" type="checkbox" label="Remember my login" />
                    </Form.Group> */}
                    <Button className="btn w-50 btn-block mx-auto "variant="primary" type="submit">
                        Submit
                    </Button>
                    </div>
                   
                </Form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
