import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  // todo : render Header and Footer
  // todo : implement routing

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  ); /* to stor the login for user data ,if the user login we see data in local put when user make logout it will be remove from local */
        /* user is objc  to stor the user data */
  return (
    <div
      className="d-flex flex-container flex-column"
      style={{ height: '100vh' }}
    >
      <Header user={user} setUser={setUser} />

      <main className="flex-grow-1 mt-4">
        <Container>
          <AppRoutes user={user} setUser={setUser} />
        </Container>
      </main>

      {/* normaly we add the router here but in reallif we creat specific folder for all the Routes (AppRoutes.jsx) */}


      <Footer />
    </div>
  );
}