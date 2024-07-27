## React Router Class Notes

### Introduction to React Router

- **React Router** is a standard library for routing in React.
- It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

### Installation

To use React Router in your project, you need to install it via npm:

```bash
npm install react-router-dom
```

### Basic Concepts

#### BrowserRouter

- **BrowserRouter** is a router implementation that uses the HTML5 history API (pushState, replaceState, and the popstate event) to keep your UI in sync with the URL.
- It is generally used at the root of your component hierarchy.

#### Routes and Route

- **Routes** is a container for a list of **Route** elements.
- **Route** is used to define a path and the component that should be rendered when the path is matched.

Example:

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
```

### Navigation

#### Link

- **Link** is used to create navigational links.
- It prevents full page reloads and allows for a smoother user experience.

Example:

```jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
```

### Nested Routes

- Routes can be nested, allowing you to define layouts that change based on deeper routes.

Example:

```jsx
import { Outlet, Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="dashboard/*" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}
```

### Redirects and NotFound

- Use the `<Navigate />` component to redirect to another route.
- A catch-all route can be defined to handle 404 Not Found pages.

Example:

```jsx
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/old-path" element={<Navigate to="/new-path" />} />
        <Route path="/new-path" element={<NewPath />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
```

### URL Parameters

- **Route parameters** are dynamic values that can be passed to the component via the URL.

Example:

```jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  let { userId } = useParams();
  return <div>User ID: {userId}</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="user/:userId" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}
```

### Query Parameters

- Query parameters can be accessed using the `useSearchParams` hook.

Example:

```jsx
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  let [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get("query");

  return <div>Search Query: {query}</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}
```

### Programmatic Navigation

- You can navigate programmatically using the `useNavigate` hook.

Example:

```jsx
import { useNavigate } from 'react-router-dom';

function HomePage() {
  let navigate = useNavigate();

  function handleClick() {
    navigate('/about');
  }

  return (
    <div>
      <button onClick={handleClick}>Go to About</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

### useLocation Hook

- The **useLocation** hook returns the current location object, which represents where the app is now, where you can get information about the current URL.

Example:

```jsx
import { useLocation } from 'react-router-dom';

function LocationDisplay() {
  let location = useLocation();
  return <div>Current location: {location.pathname}</div>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<LocationDisplay />} />
      </Routes>
    </Router>
  );
}
```

### Private Route

- A **PrivateRoute** component is used to protect routes from users who are not authenticated.

Example:

```jsx
import { Navigate, useLocation } from 'react-router-dom';
                        /*    page , props:can be anything                    */
function PrivateRoute({ element: Element, ...rest }) {
  let isAuthenticated = false; // Replace with actual authentication logic
  let location = useLocation();

  return (
    isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" state={{ from: location }} />
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
      </Routes>
    </Router> 
  );
}
```

### 