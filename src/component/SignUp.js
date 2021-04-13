import React from 'react'
import { Form,Button,Col } from 'react-bootstrap'

const SignUp = props => {
    return (
        <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-8 my-5  rounded shadow-lg p-4 ">
            <div className="col-sm-12 text-center font-weight-bold mb-4" style={{fontSize:25}}>SignUp in Few Step</div>
            <Form className="w-75 mx-auto">
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label className="font-weight-bold">Username</Form.Label>
                    <Form.Control  placeholder="Jone Willson Mike" style={{background: 'rgba(255,255,255,0.4)'}}/>
                    </Form.Group>
                </Form.Row>
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
                <div className="col-12 ">
                    <Button className="btn btn-block w-50 mx-auto "variant="primary" type="submit">
                        Submit
                    </Button>
                </div>
                </Form>
            </div>
        </div>
    )
}


export default SignUp
