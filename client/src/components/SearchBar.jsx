import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDogs } from "../redux/actions";
import style from "../styles/SearchBar.module.css";

const SearchBar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNameDogs(name));
    setCurrentPage(1);
  };

  return (
    <div>
      <input
        className={style.search}
        type="text"
        name="search"
        placeholder="Search a dog..."
        value={name}
        onChange={(e) => handleChange(e)}
      />
      <button
        className={style.button}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
