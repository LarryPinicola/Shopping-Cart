import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../feature/services/cartSlice";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { id, title, price, image } = props;

  const dispatch = useDispatch();

  return (
    <div className=" flex flex-col w-64 shadow-lg shadow-indigo-200 p-5 rounded-lg bg-cyan-300">
      <img
        src={image}
        alt=""
        className=" max-w-[150px] h-[150px] rounded-lg object-cover mx-auto shadow border-2 border-indigo-400 p-2"
      />
      <div className=" flex flex-col gap-1">
        <h1 className=" text-xl font-semibold mt-3">
          {title.substring(0, 16)}...
        </h1>
        <p className=" text-green-800 font-bold">${price}</p>
        <div className=" flex justify-around">
          <button
            onClick={() => dispatch(addToCart(props))}
            className="bg-indigo-600 rounded shadow text-white font-semibold px-3 py-1"
          >
            Add Product{" "}
          </button>
          <Link to={`/detail/${id}`}>
          <button className="bg-indigo-600 rounded shadow text-white font-semibold px-3 py-1">
            Detail
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
