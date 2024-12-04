import React from "react";
import { FcNext, FcPrevious } from "react-icons/fc";

const Pagination = ({
  updateFetchUrl,
  links: { prev, next },
  meta: { from, to, total },
}) => {
  const nextPage = () => {
    updateFetchUrl(next);
  };

  const prevPage = () => {
    updateFetchUrl(prev);
  };

  return (
    <div className="flex items-center justify-between py-4 px-6 bg-white border-t border-gray-200">
      {/* Pagination Information */}
      <div className="text-sm text-gray-600">
        Showing <b>{from}</b> to <b>{to}</b> of <b>{total}</b> Entries
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center space-x-3">
        <button
          onClick={prevPage}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition ${
            !prev
              ? "border bg-gray-200 text-gray-400 cursor-not-allowed"
              : "border border-gray-300 hover:bg-gray-200"
          }`}
          disabled={!prev}
        >
          <FcPrevious size={20} />
          Previous
        </button>

        <button
          onClick={nextPage}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition ${
            !next
              ? "border bg-gray-200 text-gray-400 cursor-not-allowed"
              : "border border-gray-300 hover:bg-gray-200"
          }`}
          disabled={!next}
        >
          Next
          <FcNext size={20} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
