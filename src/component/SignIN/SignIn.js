import React,{useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import './Signin.css';
const axios = require('axios');

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    var handleSubmit=(event)=>{
        event.preventDefault();
        if(email!==''&&!email!==undefined&&password!==''&&!password!==undefined)
        {
            axios.post('https://instaserver.herokuapp.com/user/signin', 
            {
                "email":email,
                "password":password
            }
          )
          .then(function (response) {
              if(response.status==200)
              {
                setPassword('');
                setEmail('');
                 return alert('User Sign Successfully')
              }
              else
              {
                return alert(response.data)
              }

          })
          .catch(function (error) {
                console.log(error);
          })
         
        }
        else
        {
            alert('Enter Email,Password')
        }
        
    }

    return (
        <div>
            <div className="row d-flex align-items-center justify-content-center shadowNew" >
                <div className="col-sm-12 col-lg-7 m-sm-5 rounded shadow-lg p-4">
                    <div className="col-sm-12 text-center font-weight-bold  mb-4" style={{fontSize:25}}>SignIn and Continue</div>
                <Form className="w-75 mx-auto">
                    <Form.Group  className="mt-2" controlId="formBasicEmail">
                        <Form.Label className="font-weight-bold">Email address</Form.Label>
                        <Form.Control 
                        type="email"
                         placeholder="Enter email" 
                         value={email}
                        style={{ background: 'rgba(255,255,255,0.4)' }}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        } }
                        />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label className="font-weight-bold">Password</Form.Label>
                        <Form.Control 
                        type="password" 
                        placeholder="Password"
                         value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    } }
                    style={{ background: 'rgba(255,255,255,0.4)' }}/>
                    </Form.Group>
                    
                    <div className="">
                    {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check style={{color:'green'}} className="btn w-50 btn-block mx-auto font-weight-bold" type="checkbox" label="Remember my login" />
                    </Form.Group> */}
                    <Button
                     className="btn w-50 btn-block mx-auto 
                     "variant="primary" 
                     type="submit"
                     onClick={handleSubmit}>
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
