import React, { useState } from "react";
import { useSelector } from "react-redux";
import Dogs from "./Dogs";
import Filter from "./Filter";
import Paginated from "./Paginated";
import s from "styled-components";

const Home = () => {
  const [refresh, setRefresh] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const pagination = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };
  const allDogs = useSelector((state) => state.dogs);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  return (
    <Container>
      <Filter setRefresh={setRefresh} setCurrentPage={setCurrentPage} />
      <Dogs refresh={refresh} currentDogs={currentDogs} />
      <Paginated
        currentPage={currentPage}
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        pagination={pagination}
      />
    </Container>
  );
};

const Container = s.div`
  background-color: #464646;
  position: absolute;
`

export default Home;
