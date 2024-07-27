import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import People from '../pages/People';
import PersonDetails from '../pages/PersonDetails';
import PrivateRoutes from "./PrivateRouters"
import Paths from '../pages/Paths';
import Fullstack from '../pages/Fullstack';
import ReactJS from '../pages/ReactJS';
import Next from '../pages/Next';
import AWS from "../pages/AWS"

const AppRoutes = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route element={<PrivateRoutes user={user} />}> {/* we need user to chick ther is user or not  */}
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetails />} />
      </Route>

      {/* ! added this part after the lesson. Example for nested routing */}
      <Route path="/paths" element={<Paths />}>

             <Route index element={<Fullstack />} />       {/* we need this line to see what inside the  2 component togather paths and fullstacke */}     {/* we render this component inside the parent paths  index used to see the child fullstack wich has no path */}
                           {/* without this line i can see just the fullstack link without content of component fullstack */}                                     {/* http://localhost:3000/paths/fullstack */}
             <Route path="fullstack" element={<Fullstack />}>           {/* here whn clickon fullstack we see: paths ,fullstack and  2 component (react and next  ) */}
                  <Route index element={<ReactJS />} />                  {/* whn i click on react i see what inside the component but react lik btn is not a link it has no path  becaus it has index in Route*/}
                  <Route path="next" element={<Next />} />                 {/* whn click on next i can see what insid the component next and also i see path  */}
                </Route>

            <Route path="aws" element={<AWS />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

 {/* we defind Router to see the commponent  */}

 /* In React Router, both path and index serve specific purposes:

++path Attribute:
-The path attribute specifies the URL path that triggers the rendering of a particular component.
-When the URL matches the specified path, the associated component is rendered.
-For example, <Route path="/paths" element={<Paths />} /> will render the Paths component when the URL path is “/paths”.
++index Attribute:
-An index route is a child route that does not have a path.
-It renders in the parent route’s outlet at the parent route’s path.
-In your example:
--<Route index element={<Fullstack />} /> means that when the parent route’s path (e.g., “/fullstack”) is matched, the Fullstack component will be rendered.
--Similarly, <Route index element={<ReactJS />} /> inside the nested /fullstack route will render the ReactJS component when the URL path matches “/fullstack”.
--The index route is useful for setting a default child route within a parent route.
So, in summary:

++path++ defines the URL path for a specific route.
++index++ specifies a child route without a path, rendering it at the parent route’s path. */