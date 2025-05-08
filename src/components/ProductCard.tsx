import { Link } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded p-4">
      <img src={product.image} alt={product.title} className="h-48 mx-auto" />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-green-600 font-bold">${product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
