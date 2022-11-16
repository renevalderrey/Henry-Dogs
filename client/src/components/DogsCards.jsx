import React from "react";
import style from "../styles/DogsCards.module.css";
import { Link } from "react-router-dom";

const DogsCards = ({id, image, name, min_weight, max_weight, temperament}) => {
  return (
    <div className={style.dogs}>
      <Link to={`/dogs/${id}`}>
        <img className={style.img} src={image} />
      </Link>
      <div className={style.body}>
        <h3>{name}</h3>
        <p>min weight: {min_weight} kg</p>
        <p>max weight: {max_weight} kg</p>
        <p>{temperament}</p>
        </div>
    </div>
  );
};

export default DogsCards;
