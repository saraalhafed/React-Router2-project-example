import React from 'react';
import errorImg from '../img/404.png';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  // todo : handle button functionalities to navigate
  //! added this part after the lesson
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <img src={errorImg} className="w-50" />
      <div>
        <Button
          className="me-2"
          variant="success"
          //! added this part after the lesson
          onClick={() => navigate('/')}
        >
          Home
        </Button>
        <Button
          variant="warning"
          //! added this part after the lesson
          onClick={() => navigate(-1)}    /* allowes to us to go back 1 page  ,we can -2   to go 2 page back */
        >
          Back
        </Button>
      </div>
    </div>
  );
}