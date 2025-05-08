import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <button
        onClick={() => navigate("/")}
        className="mb-4 text-blue-600 underline"
      >
        &larr; Back to Products
      </button>
      <img src={product.image} alt={product.title} className="h-64 mx-auto" />
      <h2 className="text-2xl font-bold mt-4">{product.title}</h2>
      <p className="text-green-600 font-bold text-lg">${product.price}</p>
      <p className="mt-2">{product.description}</p>
      <p className="mt-1 text-sm text-gray-500">Category: {product.category}</p>
    </div>
  );
};

export default ProductDetail;
