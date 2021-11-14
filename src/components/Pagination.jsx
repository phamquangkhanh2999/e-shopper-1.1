import React from "react";

const Pagination = ({ postsPrePage, totalPosts, pagination }) => {
  const pageNembers = [];

  for (let i = 1; i < Math.ceil(totalPosts / postsPrePage); i++) {
    pageNembers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNembers.map((number) => (
          <li key={number} className='pagination__page-item'>
            <span
              onClick={() => pagination(number)}
              className='pagination__page-item__page-link'
            >
              {number}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
