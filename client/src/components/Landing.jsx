import React from "react";
import { Link } from "react-router-dom";
import s from "../styles/Landing.module.css";

const Landing = () => {
  return (
    <div className={s.landing}>
      <Link to="/home">
          <button className={s.button}>ENTER</button>
        </Link>
    </div>
  );
};

export default Landing;
