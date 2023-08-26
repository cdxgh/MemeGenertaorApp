import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MemeCard = props => {
  return (
    <Card style={{ width: "18rem" , margin: '25px' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="primary">EDIT</Button>
      </Card.Body>
    </Card>
  );
};
export default MemeCard;
