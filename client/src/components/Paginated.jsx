import React from "react";
import style from "../styles/Paginated.module.css";

const Paginated = ({ currentPage, dogsPerPage, allDogs, pagination }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
    <div>{currentPage}</div>
    <ul className={style.pagination}>
      {currentPage > 1 && (
        <li>
          <a onClick={() => pagination(currentPage - 1)}>
            <button className={style.button}>Prev</button>
          </a>
        </li>
      )}
      {pageNumbers &&
        pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => pagination(number)}>
              <button className={style.button}>{number}</button>
            </a>
          </li>
        ))}
      {currentPage < allDogs / dogsPerPage && (
        <li>
          <a onClick={() => pagination(currentPage + 1)}>
            <button className={style.button}>Next</button>
          </a>
        </li>
      )}
    </ul>
    </>
  );
};

export default Paginated;
