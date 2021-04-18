import React,{useState} from 'react'
import { Form,Button,Col } from 'react-bootstrap'
const axios = require('axios');
const SignUp = props => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    var handleSubmit=(event)=>{
        event.preventDefault();
        if(email!==''&&!email!==undefined&&password!==''&&!password!==undefined&&username!==''&&!username!==undefined)
        {
            axios.post('https://instaserver.herokuapp.com/user/addUser', 
            {
                "username":username,
                "email":email,
                "password":password
            }
          )
          .then(function (response) {
              if(response.status==200)
              {
                setPassword('');
                setEmail('');
                setUsername('');
                 return alert('User Register Successfully')
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
            alert('Enter Email,Password and Username')
        }
        
    }
    return (
    <div className="row d-flex align-items-center justify-content-center">
        <div className="col-lg-8 my-5  rounded shadow-lg p-4 ">
            <div className="col-sm-12 text-center font-weight-bold mb-4" style={{ fontSize: 25 }}>SignUp in Few Step</div>
           
            <Form className="w-75 mx-auto">
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label className="font-weight-bold">Username</Form.Label>
                        <Form.Control
                        value={username}
                        style={{ background: 'rgba(255,255,255,0.4)' }}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        } }
                         placeholder="Jone Willson Mike" 
                         />
                    </Form.Group>
                </Form.Row>
                <Form.Group className="mt-2" controlId="formBasicEmail">
                    <Form.Label className="font-weight-bold">Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        style={{ background: 'rgba(255,255,255,0.4)' }}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        } } />
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
                    style={{ background: 'rgba(255,255,255,0.4)' }} />
                </Form.Group>
                <div className="col-12 ">
                    <Button className="btn btn-block w-50 mx-auto "
                     variant="primary" 
                     type="submit"
                     onClick={handleSubmit}>
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    </div>
    )
 }

export default SignUp
