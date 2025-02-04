import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setPage: (page: number | ((prev: number) => number)) => void; // Accepts either a number or a function
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, setPage }) => {
  const range = 2; // Show range of pages around current page
  const pageNumbers: number[] = [];
  for (let i = Math.max(1, currentPage - range); i <= Math.min(totalPages, currentPage + range); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='flex flex-wrap justify-center items-center mt-6 gap-2 p-4 border-t'>
      <button className='px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50' onClick={() => setPage(1)} disabled={currentPage === 1}>
        ⏮ First
      </button>

      <button
        className='px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50'
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}>
        ◀ Prev
      </button>

      {pageNumbers.map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => setPage(pageNum)}
          className={`px-4 py-2 border rounded-lg ${currentPage === pageNum ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
          {pageNum}
        </button>
      ))}

      <button
        className='px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50'
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage >= totalPages}>
        Next ▶
      </button>

      <button className='px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50' onClick={() => setPage(totalPages)} disabled={currentPage === totalPages}>
        Last ⏭
      </button>
    </div>
  );
};

export default Pagination;
