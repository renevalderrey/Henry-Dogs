import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getTemperaments,
  filterTemperament,
  filterCreate,
  orderAlphabetic,
  orderByWeight,
} from "../redux/actions";
import SearchBar from "./SearchBar";
import style from "../styles/Filter.module.css";

const Filter = ({ setRefresh, setCurrentPage }) => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  const handleChangeTemperaments = (e) => {
    e.preventDefault();
    dispatch(filterTemperament(e.target.value));
    setCurrentPage(1);
  };

  const handleChangeBreeds = (event) => {
    event.preventDefault();
    dispatch(filterCreate(event.target.value));
    setCurrentPage(1);
  };

  const handleChangeOrderAlphabetic = (event) => {
    event.preventDefault();
    dispatch(orderAlphabetic(event.target.value));
    setRefresh(event.target.value);
    setCurrentPage(1);
  };

  const handleOrderByWeight = (event) => {
    event.preventDefault();
    dispatch(orderByWeight(event.target.value));
    setRefresh(event.target.value);
    setCurrentPage(1);
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className={style.filter}>
      <SearchBar setCurrentPage={setCurrentPage} setRefresh={setRefresh} />

      <Link to="/createDog">
        <button className={style.button}>Create Dog</button>
      </Link>

      <select className={style.select} onChange={handleOrderByWeight}>
        <option hidden>Weight</option>
        <option value="min weight">Min. Weight</option>
        <option value="max weight">Max. Weight</option>
      </select>

      <select className={style.select} onChange={handleChangeOrderAlphabetic}>
        <option hidden>Alphabetical order</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>

      <select className={style.select} onChange={handleChangeTemperaments}>
        <option hidden>All temperaments</option>
        {temperaments &&
          temperaments.map((t) => (
            <option value={t.name} key={t.id}>
              {t.name}
            </option>
          ))}
      </select>

      <select className={style.select} onChange={handleChangeBreeds}>
        <option hidden>All breeds</option>
        <option value="all dogs">All dogs</option>
        <option value="dogs from API">API</option>
        <option value="dogs from database">DB</option>
      </select>

      <button className={style.button} onClick={refresh}>
        Refresh
      </button>
      <hr />
    </div>
  );
};

export default Filter;
