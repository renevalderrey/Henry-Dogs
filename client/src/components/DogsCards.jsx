import React from "react";
import s from "styled-components";
import { Link } from "react-router-dom";

const DogsCards = ({ id, image, name, min_weight, max_weight, temperament }) => {
  return (
    <Container>
      <Card>
        <Link to={`/dogs/${id}`}>
          <Img src={image} />
        </Link>
        <Content>
          <Title>{name}</Title>
          <p>{min_weight} kg to {max_weight} kg</p>
          <p>{temperament}</p>
        </Content>
      </Card> 
    </Container>
  );
};

const Container = s.div`
  margin-top: 50px;
`
const Card = s.div`
  margin: 10px;
  background-color: #ffffffca;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`
const Img = s.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`
const Content = s.div`
  min-height: 200px;
`
const Title = s.h2`
  background-color: black;
  color: white;
`

export default DogsCards;
