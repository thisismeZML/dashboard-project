import React from "react";

const ProductFormLoading = () => {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Skeleton for Form Header */}
      <div className="h-6 w-1/3 bg-gray-300 rounded-md"></div>

      {/* Skeleton for Product Name Input */}
      <div className="space-y-2">
        <div className="h-5 w-1/4 bg-gray-300 rounded-md"></div>
        <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
      </div>

      {/* Skeleton for Price Input */}
      <div className="space-y-2">
        <div className="h-5 w-1/4 bg-gray-300 rounded-md"></div>
        <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
      </div>

      {/* Skeleton for Checkbox */}
      <div className="flex items-center space-x-4">
        <div className="h-6 w-6 bg-gray-200 rounded-md"></div>
        <div className="h-5 w-1/2 bg-gray-300 rounded-md"></div>
      </div>

      {/* Skeleton for Action Buttons */}
      <div className="flex justify-end space-x-4 mt-8">
        <div className="h-10 w-24 bg-gray-300 rounded-lg"></div>
        <div className="h-10 w-32 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ProductFormLoading;