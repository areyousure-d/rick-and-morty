import React from 'react';
import PropTypes from 'prop-types';

import Pagination from 'react-bootstrap/Pagination';

const PaginationBar = ({ 
  currentPage, totalPages = 10, pageNeighbours = 1, onPaginationClick, 
}) => {

  const LEFT = 'LEFT';
  const RIGHT = 'RIGHT';

  const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };

  const getPageNumbers = () => {
    const totalNumbers = (pageNeighbours * 2) + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (totalPages - endPage) > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch(true) {
        case (hasLeftSpill && !hasRightSpill): {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT, ...extraPages, ...pages];
          break;
        }
        case (!hasLeftSpill && hasRightSpill): {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT];
          break;
        }
        case (hasLeftSpill && hasRightSpill):
        default: {
          pages = [LEFT, ...pages, RIGHT];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }
    
    return range(1, totalPages);
  };

  const paginationBlocks = getPageNumbers().map((item, idx) => {
    if (item === currentPage) {
      return (
        <Pagination.Item 
          key={idx} 
          active 
          onClick={() => onPaginationClick(item)}
        >
          { item }
        </Pagination.Item>
      );
    }
    if (item === LEFT) {
      return (
        <Pagination.First 
          onClick={() => onPaginationClick(currentPage - 3)} 
          key={idx} 
          title="-3"
        />
      );
    }
    if (item === RIGHT) {
      return (
        <Pagination.Last 
          onClick={() => onPaginationClick(currentPage + 3)}
          key={idx} 
          title="+3"
        />
      );
    }
    return (
      <Pagination.Item 
        onClick={() => onPaginationClick(item)}
        key={idx}
      >{ item }</Pagination.Item>
    );
  });

  return (
    <Pagination>
      {
        paginationBlocks
      }
    </Pagination>
  );
};

PaginationBar.propTypes = {
  totalRecords: PropTypes.number,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  currentPage: PropTypes.number,
  onPaginationClick: PropTypes.func.isRequired,
};

export default PaginationBar;

