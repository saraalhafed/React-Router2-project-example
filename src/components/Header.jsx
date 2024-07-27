import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../img/logo.png';

export default function Header({ user, setUser }) {
  return (
    <Navbar expand="md" className="bg-body-tertiary px-2">
      <Link to="/" className="navbar-brand">
        <img src={logo} />
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link className="nav-link " to="/">
            Home
          </Link>
          <Link className="nav-link " to="/paths">
            Paths
          </Link>
          <Link className="nav-link " to="/contact">
            Contact
          </Link>

              {/* to protect people link ,it willnot apear without login, user: there is user ,user shoud make login than cann see and use the people link*/}
          {user && (
            <Link className="nav-link " to="/people">
              People
            </Link>
          )}

          {/* contidional rendering */}
          {user ? (
            <Button
              className="nav-link btn btn-warning btn-sm "
              onClick={() => {
                localStorage.clear();   /* by logout: we need to remove all the user data in everywhere  */
                setUser(null);       
              }}
            >
              Logout
            </Button>      /* here we use button instead of Link just for css styling to look like  yellow btn  but it work as Link */
          ) : (
            <Link className="nav-link " to="/login">
              Login
            </Link>
          )}

          {/* // todo: links for paths, contact, people, login, logout, make conditional rendering for login and logout  */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
 /*1-creat Link for each pag:
  we need in header links for paths, contact, people, login, logout, just to see them in header
 but it will be not work without router so in AppRoutes we give  them the functionality  */
 /* 2- protect the people link : with user login here is the condition but in AppRoutes we cann see the privatRouter which say to the user go to the login or you can use people lnik*/
 /* 3-contidional rendering  login or logout pag :
        if user make login than apear just Logout like yellow btn and login link will be gone
        if user       logout                login  */