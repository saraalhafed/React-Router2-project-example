import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

export default function Fullstack() {
  // todo : add links to navigate React.js or Next.js
  // todo : This is a nested route. Do something to display its children components

  return (
    <div className="text-center">
      <h1>Full Stack Path</h1>
      <p>
        Become a software and application developer, well-equipped with both
        front-end and back-end.
      </p>
      <img
        src="https://clarusway.com/wp-content/uploads/elementor/thumbs/v1-Fullstack-developer-pqnf31gbxlt9gholzgwtsxya1abhwiwulezoqna3wo.jpg"
        alt=""
      />
      <div>
        <Button variant="success" className="mt-2">
          Learn More
        </Button>
      </div>
      <div className="mt-4">
        {/* // todo : add links to navigate React.js or Next.js */}

        {/* //! added this part after the lesson */}
        <Link className="btn btn-success me-2" to="">
          React.JS
        </Link>
        <Link className="btn btn-warning " to="next">
          Next.JS
        </Link>
      </div>

      {/* //! added this part after the lesson */}
      <Outlet /> {/* allowes for us to see both children(  React.JS,Next.JS) in the browser */}
    </div>
  );
}