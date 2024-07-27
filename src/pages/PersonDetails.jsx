import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import NotFound from './NotFound';
import spinner from '../img/Spinner-2.gif';
import { Button } from 'react-bootstrap';


export default function PersonDetails() {
  // todo : check dynamic parameter
  /*   onClick={() => {  when we click op any person in people page:
              navigate(`/people/${item.id}`) from this click we go to this page (personpage) so we need get this id from url throw useParam   */
  const { id } = useParams(); /* to get id from url and send it to backend to get the correct data about this person  (fetshing the data)*/
  /*  the name for this params shoud the same in AppRouts (id) */
  /*  <Route path="/people/:id" element={<PersonDetails />} /> it called dynamic routing */
  // todo : fetch user data for that person from "https://reqres.in/api/users/${id}" url
  const [person, setPerson] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);/* to creat better experience for user   tell the user ther is loading now */
  // todo : handle errors for not existing users
  // todo : add a spinner while loading 
  // todo : handle button functionalities for navigation
  const navigate = useNavigate();
  const getPerson = async () => {
    try {
      setLoading(true);/* loading is starting */
      const res = await axios.get(`https://reqres.in/api/users/${id}`);/* whn i click on person it take me to personDetails page but it apear in url people/2 for janet  */
      setPerson(res.data.data);
    } catch (error) {
      setError(true);/* i have an error */
      console.log(error);
    } finally {
      setLoading(false);/* it take time to louding ,when fetch is finish we mke that false */
    }
  };
  useEffect(() => {
    getPerson();
  }, []);

  if (error) return <NotFound />;
  if (loading) {
    return (             /*  to create   frindly user page: to tell the user there is progress now (loading) */
      <div className="text-center mt-4">
        <img src={spinner} alt="spinner" /> {/* to see this img loading */}
      </div>
    );
  }

 

  return (
    <div className="text-center">
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>

      <img className="rounded" src={person?.avatar} alt="person-image" />
      <div className="mt-4">
        <Button className="me-2" variant="success" onClick={() => {
              navigate(`/`)}} >
          Home
        </Button>
        <Button variant="warning" onClick={() => {
              navigate(`/people`)}}>Back</Button>
      </div>
    </div>
  );
}