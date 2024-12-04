import { FiEdit, FiTrash } from "react-icons/fi";
import ShowDateTime from "../../../components/ShowDateTime";
import { deleteProduct } from "../../../services/product";
import toast from "react-hot-toast";
import { useSWRConfig } from "swr";
import { bouncy } from "ldrs";
import { useState } from "react";
import { Link } from "react-router-dom";

bouncy.register();

const ProductItem = ({ product: { id, product_name, price, created_at } }) => {
  const { mutate } = useSWRConfig();

  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    const res = await deleteProduct(id);
    const json = await res.json();

    if (res.status === 200) {
      toast.success("Product Deleted Successfully");
      mutate(`${import.meta.env.VITE_API_URL}/products`);
      setIsLoading(false);
    } else {
      toast.error("Fail To Delete");
      setIsLoading(false);
    }
  };

  return (
    <tr className="hover:bg-gray-100">
      <td className="px-6 py-4 text-sm text-gray-700">{id}</td>
      <td className="px-6 py-4 text-sm text-gray-700 font-medium">
        {product_name}
      </td>
      <td className="px-6 py-4 text-sm text-gray-700">${price}</td>
      <td className="px-6 py-4 text-sm text-gray-500">
        <ShowDateTime timestamp={created_at} />
      </td>
      <td className="px-6 py-4 flex justify-center gap-4">
        <Link
          to={`${id}`}
          className="size-10 flex items-center justify-center p-2 rounded-lg text-blue-700 bg-blue-100 hover:bg-blue-200 transition"
          title="Edit"
        >
          <FiEdit />
        </Link>
        <button
          onClick={handleDelete}
          className="size-10 flex items-center justify-center p-2 rounded-lg text-red-700 bg-red-100 hover:bg-red-200 transition"
          title="Delete"
        >
          {isLoading ? (
            <l-bouncy size="18" speed="1.75" color="white"></l-bouncy>
          ) : (
            <FiTrash />
          )}
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
