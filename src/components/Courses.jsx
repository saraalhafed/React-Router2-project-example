import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import {data as courses} from "../data";

export default function Courses() {
  return (
    <div className="text-center mt-4 p-4">
      <h1 className="text-warning">OUR COURSES</h1>
      <Row className="justify-content-center gap-4 align-items-center mt-4">
        {courses.map((course) => (
          <Col key={course.id}>
            <Card >
              <Card.Img variant="top" src={course.img}  className="img-fluid"/>
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text>
                    {course.text}
                </Card.Text>
                <Button variant="danger">Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
