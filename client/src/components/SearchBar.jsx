import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDogs } from "../redux/actions";
import iconSearch from "../icons/simbolo-de-la-interfaz-de-busqueda.png"
import s from "styled-components";

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
    <Container>
      <Search>
        <Input
          type="text"
          name="search"
          placeholder="Search a dog..."
          value={name}
          onChange={(e) => handleChange(e)}
        />
        <Button
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          <Img src={iconSearch} />
        </Button>
      </Search>
    </Container>
  );
};

const Container = s.div`
  width: 30%;
  left: 63%;
  position: relative;
  margin-top: 15px;
`
const Search = s.div`
  width: 100%;
  display: flex;
`
const Input = s.input`
  width: 100%;
  border: 3px solid white;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
`
const Button = s.button`
  width: 40px;
  height: 36px;
  border: 1px solid white;
  text-align: center;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
`
const Img = s.img`
  width: 20px;
  height: 20px;
`

export default SearchBar;
