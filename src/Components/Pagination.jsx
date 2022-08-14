import React from "react";

const Pagination = ({ page, setPage, data }) => {
  return (
    <div>
      <button
        className="paginationBtn"
        disabled={page === 1}
        onClick={() => setPage((page) => page - 1)}
      >
        Prev
      </button>
      <span className="paginationPageNumber">{page}</span>
      <button
        className="paginationBtn"
        disabled={data.length === 0}
        onClick={() => setPage((page) => page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
