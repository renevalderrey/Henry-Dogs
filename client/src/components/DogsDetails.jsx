import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDogsDetail } from "../redux/actions";
import { Link } from "react-router-dom";
import style from "../styles/DogsDetails.module.css";

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
    <div>
      <Link to="/home">
        <button className={style.button}>Back</button>
      </Link>

      <h1>DOG</h1>
      {dogsDetail[0] && (
        <div className={style.dog}>
          <img src={dogsDetail[0].image} className={style.img} />
          <div className={style.description}>
            <p>Name: {dogsDetail[0].name}</p>
            <p>Temperament: {dogsDetail[0].temperament}</p>
            <p>Max Height: {dogsDetail[0].max_height}</p>
            <p>Max Weight: {dogsDetail[0].max_weight}</p>
            <p>Life Span: {dogsDetail[0].life_span}</p>
          </div>
        </div>
      )} 
    </div>
  );
};

export default DogsDetail;
