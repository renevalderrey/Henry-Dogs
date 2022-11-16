import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDog, getTemperaments, getDogs } from "../redux/actions";
import { Link } from "react-router-dom";
import style from "../styles/Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const dogs = useSelector((state) => state.dogs);
  const dogsName = dogs.map((d) => d.name);

  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
  }, [dispatch]);

  const [name, setName] = useState("");
  const [height, setHeight] = useState({
    min: "",
    max: "",
  });
  const [weight, setWeight] = useState({
    min: "",
    max: "",
  });
  const [life_span, setLifeSpan] = useState("");
  const [image, setImage] = useState("");
  const [temp, setTemps] = useState([]);
  const [error, setError] = useState("");

  const validateName = (name) => {
    let error = "";
    if (!name) {
      error = "Name is required";
    } else if (!name.match(/^[A-Za-z]+$/)) {
      error = "Name must contain only letters";
    } else if (dogsName.includes(name)) {
      error = `The name ${name} already exists`;
    }
    return error;
  };
  const validateHeight = (height) => {
    let error = "";
    if (parseFloat(height.min) === 0 || parseFloat(height.max) === 0) {
      error = "The height can't be 0";
    } else if (parseFloat(height.min) > parseFloat(height.max)) {
      error = "The min height can't be greater than the max height";
    }
    return error;
  };
  const validateWeight = (weight) => {
    let error = "";
    if (parseFloat(weight.min) === 0 || parseFloat(weight.max) === 0) {
      error = "The weight can't be 0";
    } else if (parseFloat(weight.min) > parseFloat(weight.max)) {
      error = "The min weight can't be greater than the max weight";
    }
    return error;
  };
  const validateLifeSpan = (life_span) => {
    let error = "";
    if (parseFloat(life_span) === 0) {
      error = "The life span can't be 0";
    }
    return error;
  };

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    setError(validateName(e.target.value));
  };
  const heightMinChangeHandler = (e) => {
    setHeight({ ...height, min: e.target.value });
    setError(validateHeight({ ...height, min: e.target.value }));
  };
  const heightMaxChangeHandler = (e) => {
    setHeight({ ...height, max: e.target.value });
    setError(validateHeight({ ...height, max: e.target.value }));
  };
  const weightMinChangeHandler = (e) => {
    setWeight({ ...weight, min: e.target.value });
    setError(validateWeight({ ...weight, min: e.target.value }));
  };
  const weightMaxChangeHandler = (e) => {
    setWeight({ ...weight, max: e.target.value });
    setError(validateWeight({ ...weight, max: e.target.value }));
  };
  const lifeSpanChangeHandler = (e) => {
    setLifeSpan(e.target.value);
    setError(validateLifeSpan(e.target.value));
  };
  const imageChangeHandler = (e) => setImage(e.target.value);
  const tempChangeHandler = (e) => setTemps([...temp, e.target.value]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const dataDog = {
      name: name,
      min_height: height.min,
      max_height: height.max,
      min_weight: weight.min,
      max_weight: weight.max,
      life_span: life_span,
      image: image,
      temperament: temp,
    };
    dispatch(postDog(dataDog));
    setName("");
    setHeight({ min: "", max: "" });
    setWeight({ min: "", max: "" });
    setLifeSpan("");
    setImage("");
    setTemps([]);
  };

  return (
    <>
      <Link to="/home">
        <button className={style.button}>Back</button>
      </Link>
      <h2>CREATE A DOG</h2>
      <form onSubmit={handlerSubmit}>
        <div>
          <label>Name: </label>
          <input
            className={style.input}
            type="text"
            onChange={nameChangeHandler}
            value={name}
          />
        </div>
        <div>
          <label>Height min: </label>
          <input
            className={style.input}
            type="number"
            onChange={heightMinChangeHandler}
            value={height.min}
          />
          <div>
            <label>Height max: </label>
            <input
              className={style.input}
              type="number"
              onChange={heightMaxChangeHandler}
              value={height.max}
            />
          </div>
        </div>
        <div>
          <label>Weight min: </label>
          <input
            className={style.input}
            type="number"
            onChange={weightMinChangeHandler}
            value={weight.min}
          />
        </div>
        <div>
          <label>Weight max: </label>
          <input
            className={style.input}
            type="number"
            onChange={weightMaxChangeHandler}
            value={weight.max}
          />
        </div>
        <div>
          <label>Life Span: </label>
          <input
            className={style.input}
            type="number"
            onChange={lifeSpanChangeHandler}
            value={life_span}
          />
        </div>
        <div>
          <label>Image: </label>
          <input
            className={style.input}
            type="text"
            onChange={imageChangeHandler}
            value={image}
          />
        </div>
        <div>
          <label>Temperaments: </label>
          <select className={style.select} onChange={tempChangeHandler}>
            <option hidden>All temperaments</option>
            {temperaments &&
              temperaments.map((t) => (
                <option value={t.name} key={t.id}>
                  {t.name}
                </option>
              ))}
          </select>
        </div>
        <div className={style.error}>{error}</div>
        <button
          className={style.button2}
          submit="submit"
          disabled={
            !name ||
            !height.min ||
            !height.max ||
            !weight.min ||
            !weight.max ||
            !life_span ||
            !image ||
            !temp ||
            error
          }
        >
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default Form;
