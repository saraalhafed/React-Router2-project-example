import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Paths() {
  // todo : add links to navigate fullstack or aws
  // todo : This is a nested route. Do something to display its children components
  return (
    <div>
      <h1>
        Online IT Courses to Become a Qualified IT Professional with Clarusway{' '}
      </h1>
      <p className="fs-5">
        Join outstanding companies with rewarding salaries. We offer the
        highest-demand IT skills YOU need for success! CHOOSE THE BEST COURSE
        FOR YOU Upgrade your career with the best online training led by top IT
        experts!
      </p>
      <div>
        {/* // todo : add links to navigate fullstack or aws */}

        <Link to="fullstack" className="btn btn-success me-2">
          FullStack
        </Link>
        <Link to="aws" className="btn btn-warning">
          AWS
        </Link>  
      </div>
      <Outlet />  {/* allthe childern ( FullStack,AWS) will apear in the same path in url :http://localhost:3000/paths/fullstack, or AWS*/}
    </div>
  );
}
/* to see what inside this component or anz component we need to render the design Router in AppRouter */