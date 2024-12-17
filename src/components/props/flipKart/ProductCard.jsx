import React from "react";
import toast from "react-hot-toast";
export let cartItems = [];

const ProductCard = (props) => {
//   console.log(props.data);

  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md hover:shadow-slate-500 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <img
        src={props.data.image}
        alt="Product"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-200">
          {props.data.name}
        </h2>
        <p className="mt-2 text-sm text-gray-600">{props.data.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-800">
            {"Rs. " + props.data.price}
          </span>
          <button
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            onClick={() => {
              toast.success("Item added to cart");
              cartItems.push(props.data);
              console.log(cartItems);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
