import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDogsDetail } from "../redux/actions";
import { Link } from "react-router-dom";
import s from "styled-components";

const DogsDetail = (props) => {
  const dogsId = props.match.params.id;
  const dispatch = useDispatch();
  const dogsDetail = useSelector((state) => state.dogsDetail);

  useEffect(() => {
    dispatch(getDogsDetail(dogsId));

    return function () {
      dispatch(cleanDetail());
    };
  }, [dispatch, dogsId]);

  return (
    <Container>
      <Link to="/home">
        <Button>Back</Button>
      </Link>
      {dogsDetail[0] && (
          <Card>
            <Img src={dogsDetail[0].image} />
            <Content>
              <Title>{dogsDetail[0].name}</Title>
              <hr />
              <p>{dogsDetail[0].temperament}</p>
              <p>Max Height: {dogsDetail[0].max_height}</p>
              <p>Max Weight: {dogsDetail[0].max_weight}</p>
              <p>Life Span: {dogsDetail[0].life_span}</p>
            </Content>
          </Card>
      )}
    </Container>
  );
};

const Container = s.div`
  background-color: #464646;
`
const Button = s.button`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  background: transparent;
  color: white;
  border: none;
  width: 105px;
  margin: 10px;
  cursor: pointer;
  :hover {
    outline-color: rgba(49, 138, 172, 0);
    outline-offset: 80px;
    text-shadow: 1px 1px 6px #fff;
    border-shadow: 
  }
  position: absolute;
  left: 40px;
  top: 10px;
  `
const Img = s.img`
  width: 60%;
  height: 100%;
  object-fit: cover;
`
const Title = s.h2`
  background-color: black;
  color: white;
`
const Card = s.div`
  display: inline-flex;
  text-align: left;
  margin: 100px;
  width: 1000px;
  height: 500px;
  background-color: #ffffffca;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  font-family: 'Montserrat', sans-serif;
`
const Content = s.div`
  min-height: 1000px;
  min-width: 400px;
  text-align: center;
  position: relative;
  top: 20px;
`

export default DogsDetail;
