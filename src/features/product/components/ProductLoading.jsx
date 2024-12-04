import React from 'react';

const ProductLoading = () => {
  return (
    <tr className="hover:bg-gray-100">
      {/* ID Skeleton */}
      <td className="px-6 py-4">
        <div className="w-20 h-4 bg-gray-300 rounded-lg animate-pulse"></div>
      </td>
      
      {/* Product Name Skeleton */}
      <td className="px-6 py-4">
        <div className="w-32 h-4 bg-gray-300 rounded-lg animate-pulse"></div>
      </td>
      
      {/* Price Skeleton */}
      <td className="px-6 py-4">
        <div className="w-24 h-4 bg-gray-300 rounded-lg animate-pulse"></div>
      </td>
      
      {/* Created At Skeleton */}
      <td className="px-6 py-4">
        <div className="w-32 h-4 bg-gray-300 rounded-lg animate-pulse"></div>
      </td>
      
      {/* Action Buttons Skeleton */}
      <td className="px-6 py-4 flex justify-center gap-4">
        <div className="w-16 h-8 bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="w-16 h-8 bg-gray-300 rounded-lg animate-pulse"></div>
      </td>
    </tr>
  );
};

export default ProductLoading;
