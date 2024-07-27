import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
/* to understand wher we are */

const recipe = {
  label: 'Pizza',
  img: 'kasdjfkj',
  ingredents: '',
};

 // location is a hook that returns an object which contains url location as pathname, search as url queries, state to receive incoming information

 /* wher was the user what  prev page    */
const PrivateRoutes = ({ user }) => {
  const location = useLocation()
                                /* wher he try to raech ,we tell the url wher the user try to go  */                 /* my current path */
 return user ? (  <Outlet /> ) : (
                                  <Navigate
                                    to={`/login?next=${location.pathname}`}
                                    // state is to send the address which we need to  to the path component
                                    state={{ from: location.pathname, message: 'user needs authentication' ,
                                    recipe: recipe,}}
                                    />

                                  // <Navigate to={`/login`} />
                                );
};

export default PrivateRoutes;
/* if ther is user , the user can see people link and can reach it also in url ,
but when there is no user the user can not see people link and when the user try  to typ people in url it take him to login page*/
/* <Navigate to="/login" /> is component is work the same as useNavigate */