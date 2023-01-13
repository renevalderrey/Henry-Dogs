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
import iconRefresh from "../icons/refresh.png"
import s from "styled-components";

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

  const handleChangeBreeds = (e) => {
    e.preventDefault();
    dispatch(filterCreate(e.target.value));
    setCurrentPage(1);
  };

  const handleChangeOrderAlphabetic = (e) => {
    e.preventDefault();
    dispatch(orderAlphabetic(e.target.value));
    setRefresh(e.target.value);
    setCurrentPage(1);
  };

  const handleOrderByWeight = (e) => {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setRefresh(e.target.value);
    setCurrentPage(1);
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <Container>
      <SearchBar setCurrentPage={setCurrentPage} setRefresh={setRefresh} />
      <Filters>
        <Link to="/createDog">
          <ButtonCreate>Create a dog</ButtonCreate>
        </Link>

        <SelectW onChange={handleOrderByWeight}>
          <Option hidden>Weight</Option>
          <Option value="min weight">Min. Weight</Option>
          <Option value="max weight">Max. Weight</Option>
        </SelectW>

        <SelectA onChange={handleChangeOrderAlphabetic}>
          <Option hidden>Alphabetical order</Option>
          <Option value="A-Z">A-Z</Option>
          <Option value="Z-A">Z-A</Option>
        </SelectA>

        <SelectT onChange={handleChangeTemperaments}>
          <Option hidden>All temperaments</Option>
          {temperaments &&
            temperaments.map((t) => (
              <Option value={t.name} key={t.id}>
                {t.name}
              </Option>
            ))}
        </SelectT>

        <SelectB onChange={handleChangeBreeds}>
          <Option hidden>All breeds</Option>
          <Option value="all dogs">All dogs</Option>
          <Option value="dogs from API">API</Option>
          <Option value="dogs from database">DB</Option>
        </SelectB>

        <Button onClick={refresh}>
          <Img src={iconRefresh} />
        </Button>
      </Filters>
    </Container>
  );
};

const Container = s.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: black;
  position: fixed;
  top: 0;
  width: 100%;
  height: 10%;
`
const Filters = s.div`
  position: absolute;
  top: 15px;
  left: 20px;
`
const ButtonCreate = s.button`
  width: 150px;
  height: 36px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  color: white;
  background: transparent;
  :hover {
    outline-color: rgba(49, 138, 172, 0);
    outline-offset: 80px;
    text-shadow: 1px 1px 6px #fff;
    border-shadow: 
  }
`
const SelectW = s.select`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  background: transparent;
  color: white;
  border: none;
  width: 80px;
  margin: 10px;
  cursor: pointer;
  :hover {
    outline-color: rgba(49, 138, 172, 0);
    outline-offset: 80px;
    text-shadow: 1px 1px 6px #fff;
    border-shadow: 
  }
`
const SelectA = s.select`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  background: transparent;
  color: white;
  border: none;
  width: 170px;
  margin: 10px;
  cursor: pointer;
  :hover {
    outline-color: rgba(49, 138, 172, 0);
    outline-offset: 80px;
    text-shadow: 1px 1px 6px #fff;
    border-shadow: 
  }
`
const SelectT = s.select`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  background: transparent;
  color: white;
  border: none;
  width: 170px;
  margin: 10px;
  cursor: pointer;
  :hover {
    outline-color: rgba(49, 138, 172, 0);
    outline-offset: 80px;
    text-shadow: 1px 1px 6px #fff;
    border-shadow: 
  }
`
const SelectB = s.select`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
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
`
const Option = s.option`
  background-color: black;
`
const Img = s.img`
  width: 20px;
  height: 20px;
`
const Button = s.button`
  width: 40px;
  height: 36px;
  border: 1px solid white;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 500px;
  position: absolute;
`

export default Filter;
