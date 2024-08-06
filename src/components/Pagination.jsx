import React, { useState } from "react";

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 3;
    let startPage = Math.max(
      currentPage - Math.floor(maxPageNumbersToShow / 2),
      1
    );
    let endPage = Math.min(startPage + maxPageNumbersToShow - 1, totalPages);

    if (endPage - startPage < maxPageNumbersToShow - 1) {
      startPage = Math.max(endPage - maxPageNumbersToShow + 1, 1);
    }

    if (startPage > 1) {
      pageNumbers.push(
        <span
          key={1}
          onClick={() => handlePageClick(1)}
          className={`cursor-pointer px-2 ${
            currentPage === 1 ? "bg-orange-500 text-white rounded-full" : ""
          }`}
        >
          1
        </span>
      );
      if (startPage > 2) {
        pageNumbers.push(
          <span key="start-ellipsis" className="px-2">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <span
          key={i}
          onClick={() => handlePageClick(i)}
          className={`cursor-pointer px-2 ${
            currentPage === i ? "bg-orange-500 text-white rounded-full" : ""
          }`}
        >
          {i}
        </span>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <span key="end-ellipsis" className="px-2">
            ...
          </span>
        );
      }
      pageNumbers.push(
        <span
          key={totalPages}
          onClick={() => handlePageClick(totalPages)}
          className={`cursor-pointer px-2 ${
            currentPage === totalPages
              ? "bg-orange-500 text-white rounded-full"
              : ""
          }`}
        >
          {totalPages}
        </span>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="space-y-4 items-center my-0 mx-auto ">
        <div className="flex items-center justify-center space-x-5 max-lg:space-x-2 max-sm:space-x-1" >
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`h-8 w-8 rounded-full center text-white ${currentPage === 1 ? 'bg-gray-500' : 'bg-orange-500'}`}
          >
            ←
          </button>
          {renderPageNumbers()}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`h-8 w-8 rounded-full center text-white ${currentPage === totalPages ? 'bg-gray-500' : 'bg-orange-500'}`}
          >
            →
          </button>
        </div>
        <center> Showing results 1-10 of 45 </center>

    </div>
  );
};

export default Pagination;
