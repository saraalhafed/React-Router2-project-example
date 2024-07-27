import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Login({ setUser }) {
  // todo : make inputs controlled components
  // todo : handle form submit
  // todo : store user information in localstorage
  // todo : navigate user to home page after submit

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);
  /* content objc info  */
  /* urlbase clarusway.com/logic?                         path/?id 
                             to set the parameter query    in js api  */

  const handleSubmit = (e) => {
    e.preventDefault();          /* stop refrishing the page and take the data */
    setUser({ email, password }); /* give  the data for user objc  */
    localStorage.setItem('user', JSON.stringify({ email, password }));  /* we stor this obj { email, password } inside "user" in localstorage in the browser ,this user dont need to make login everytime he open this App */
    
    /* if (location.search) {
      console.log(location.search.slice(6));
      navigate(location.search.slice(6));
    } else navigate('/'); */

      // with using search parameter
    //if (location.search) {
     // const pos = location.search.indexOf('=');
     // console.log(location.search.slice(pos + 1));/* to get querys we have to use uselocation */
    //  navigate(location.search.slice(pos + 1));  /* location.search: to reach this information , after qmark it return objc pathname and serch  */
    //} else navigate('/');
 

    // with state information
    if (location.state?.from) {
      navigate(location.state.from); /* to take the user where he want  */
    } else navigate('/');
  
 
    //navigate('/');  /* after storing data go to the home  */
    /* but we need to send the user to people page  */
  };

  return (
    <Row className="justify-content-center">
      <Col sm={12} md={10} lg={6}>
        <Card className="mt-4">
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <h1 className="text-center">Login</h1>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="john@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="******"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <div className="text-center">
                <Button type="submit" variant="primary">
                  Login
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

/* 1- todo : make inputs controlled components:
           we need usestate(email,password) and eventhandler(handleSubmit)for the form ,and for each form.controle weneed  onchange
   todo : handle form submit
   todo : store user information in localstorage
   todo : navigate user to home page after submit
 */