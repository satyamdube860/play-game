import React from "react";

const Pagination = ({ postPerPage, totalPost, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav
      style={{
        margin: 30,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <div onClick={() => paginate(number)} className="page-link">
              {number}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination;
