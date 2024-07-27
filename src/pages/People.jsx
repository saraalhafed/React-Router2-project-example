import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function People() {
  // todo : fetch people data from "https://reqres.in/api/users" url
  // todo : list all the fetched people data in cards
  // todo : once any person clicked navigate that person details page

  const [people, setPeople] = useState([]); /* to stor our data in array */

  const getPeople = async () => {
    const res = await axios.get('https://reqres.in/api/users');

    setPeople(res.data.data);   /* first data com from api but it is an obj includ data  the secon one */
  };

  useEffect(() => {
    getPeople();       /* we need just once to get our data from api */
  }, []);

  console.log(people);

  const navigate = useNavigate(); /* when i click on one person i go the page for this person in url i see people/id  */

  return (
    <div className="text-center">
      <h1>People LIST</h1>
      <Row>
        {/*  placeholder for people data */}

        {people.map((item) => (
          <Col
            key={item.id}
            sm={12}
            md={6}
            lg={4}
            type="button"
            className="mb-2"
            onClick={() => {
              navigate(`/people/${item.id}`);  /* go to this person page (Person) */
            }}
          >
            <img src={item.avatar} alt="person" />
            <h6>
              {item.first_name} {item.last_name}
            </h6>
          </Col>
        ))}
      </Row>
    </div>
  );
}
