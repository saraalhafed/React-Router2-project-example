import React from 'react';
import { Button } from 'react-bootstrap';

export default function AWS() {
  return (
    <div className="text-center">
      <h1>AWS/DevOps Path</h1>
      <p>
        We prepare you for AWS DevOps certifications. Our graduates land the
        best IT jobs!
      </p>
      <img
        alt="aws-image"
        src="https://clarusway.com/wp-content/uploads/elementor/thumbs/Aws-Solution-Architech-1-pmxc3z6r0ibsy5uixyzfrgrdilrq8nu5yid937d8w8.jpg"
      />
      <div>
        <Button variant="success" className="mt-2">
          Learn More
        </Button>
      </div>
    </div>
  );
}
