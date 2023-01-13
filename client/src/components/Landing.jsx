import React from "react";
import { Link } from "react-router-dom";
import s from "styled-components"

const Landing = () => {
  return (
    <Background>
      <Container>
        <Title>Project Single of the bootcamp Soy Henry</Title>
        <Link to="/home">
          <Button>ENTER</Button>
        </Link>
      </Container>
    </Background>
  );
};

const Background = s.div`
  background-image: url('https://images.alphacoders.com/458/45831.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  position: relative;
  `
const Container = s.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  `
const Title = s.h1`
  color: white;
  font-family: Arial, sans-serif;
`
const Button = s.button`
  display: inline-block;
  padding: 6px 12px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  line-height: 1.5;
  color: white;
  background-color: #6c757d;
  border: none;
  border-radius: 4px;

  :not(:disabled) {
    cursor: pointer;
  }

  :hover {
    background-color: #5a6268;
  }
`;

export default Landing;
