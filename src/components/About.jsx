import { Col, Row } from 'react-bootstrap';
import { about as aboutList } from '../data';

export default function About() {
  // todo : import about info and list them
  return (
    <article className="p-3">
      <h1 className="text-center mb-4 text-primary">ABOUT US</h1>
      <Row className="text-center justify-content-center ">
        {/* placeholder for about info */}
        {aboutList.map((item) => (
          <Col key={item.id} sm={12} md={6} lg={3}>
            {item.icon}
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </Col>
        ))}
      </Row>
    </article>
  );
}