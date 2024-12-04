import React, { useState, useEffect, useRef } from "react";
import useSWR from "swr";
import ProductItem from "./ProductItem";
import { FiSearch } from "react-icons/fi";
import { fetchProduct } from "../../../services/product";
import ProductLoading from "./ProductLoading";
import { useLocation, useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";

const ProductTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Option");

  const dropdownRef = useRef(null);

  const location = useLocation();
  const [param, setParam] = useSearchParams();

  const [fetchUrl, setFetchUrl] = useState(
    `${import.meta.env.VITE_API_URL}/products` + location.search
  );
  const { data: products, isLoading } = useSWR(fetchUrl, fetchProduct);

  const skeletons = Array.from({ length: 5 }, (_, index) => index + 1);

  const handleSearch = (e) => {
    if (e.target.value) {
      setParam({ q: e.target.value });
      setFetchUrl(
        `${import.meta.env.VITE_API_URL}/products?q=${e.target.value}`
      );
    } else {
      setParam({});
      setFetchUrl(`${import.meta.env.VITE_API_URL}/products`);
    }
  };

  const updateFetchUrl = (url) => {
    const newURL = new URL(url);
    const newParam = new URLSearchParams(newURL.search);

    setParam(newParam);
    setFetchUrl(url);
  };

  const handleSort = (sort, label) => {
    // Construct the updated fetch URL immediately
    const updatedParams = new URLSearchParams({
      ...Object.fromEntries(param),
      ...sort,
    });
    const updatedUrl = `${
      import.meta.env.VITE_API_URL
    }/products?${updatedParams}`;

    setParam(updatedParams);
    setFetchUrl(updatedUrl);
    setSelectedOption(label);

    setIsOpen(false);
    setSelectedOption(label);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mx-auto px-6 py-8">
      <div className="flex justify-between">
        {/* Search Input */}
        <div className="mb-6 flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-[300px] px-10 py-3 border border-gray-300 rounded-full shadow-sm text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
              onChange={handleSearch}
            />
          </div>
        </div>

        {/* Sorting Dropdown */}
        <div className="mb-6 flex items-center justify-start gap-4">
          <span className="text-sm font-medium text-gray-600">Sort by:</span>

          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              id="menu-button"
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              {selectedOption}
              <svg
                className="w-5 h-5 ml-2 -mr-1 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isOpen && (
              <div
                className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="py-1">
                  <button
                    onClick={() =>
                      handleSort(
                        { sort_by: "name", sort_direction: "asc" },
                        "Name (A-Z)"
                      )
                    }
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    role="menuitem"
                  >
                    Name (A-Z)
                  </button>
                  <button
                    onClick={() =>
                      handleSort(
                        { sort_by: "name", sort_direction: "desc" },
                        "Name (Z-A)"
                      )
                    }
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    role="menuitem"
                  >
                    Name (Z-A)
                  </button>
                  <button
                    onClick={() =>
                      handleSort(
                        { sort_by: "price", sort_direction: "asc" },
                        "Price (Low to High)"
                      )
                    }
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    role="menuitem"
                  >
                    Price (Low to High)
                  </button>
                  <button
                    onClick={() =>
                      handleSort(
                        { sort_by: "price", sort_direction: "desc" },
                        "Price (High to Low)"
                      )
                    }
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    role="menuitem"
                  >
                    Price (High to Low)
                  </button>
                  <button
                    onClick={() =>
                      handleSort(
                        { sort_by: "date", sort_direction: "asc" },
                        "Date (Oldest First)"
                      )
                    }
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    role="menuitem"
                  >
                    Date (Oldest First)
                  </button>
                  <button
                    onClick={() =>
                      handleSort(
                        { sort_by: "date", sort_direction: "desc" },
                        "Date (Newest First)"
                      )
                    }
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    role="menuitem"
                  >
                    Date (Newest First)
                  </button>
                  <button
                    onClick={() =>
                      handleSort(
                        { sort_by: "id", sort_direction: "asc" },
                        "ID (Ascending)"
                      )
                    }
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    role="menuitem"
                  >
                    ID (Ascending)
                  </button>
                  <button
                    onClick={() =>
                      handleSort(
                        { sort_by: "id", sort_direction: "desc" },
                        "ID (Descending)"
                      )
                    }
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    role="menuitem"
                  >
                    ID (Descending)
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="min-w-full border-collapse bg-gray-50 shadow-sm rounded-lg">
          <thead className="sticky top-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold">ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Price
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold">
                Created At
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {isLoading
              ? skeletons.map((_, index) => <ProductLoading key={index} />)
              : products?.data?.map((product) => (
                  <ProductItem
                    key={product.id}
                    product={product}
                    updateFetchUrl={updateFetchUrl}
                  />
                ))}
            {products?.data?.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {!isLoading && (
        <Pagination
          updateFetchUrl={updateFetchUrl}
          links={products?.links}
          meta={products?.meta}
        />
      )}
    </div>
  );
};

export default ProductTable;
