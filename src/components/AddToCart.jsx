import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  if (cartItems.length === 0) {
    return (
      <div className=" w-72 mx-auto mt-20">
        <h1 className=" font-serif text-indigo-600 font-semibold">
          You haven't choose any product
        </h1>
        <Link to={"/"}>
          <button className=" bg-yellow-600 w-28 mt-3 text-white px-7 py-1 rounded shadow">
            Buy
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className=" mt-10 mb-10 w-[320px] md:w-[400px] lg:w-[450px] mx-auto ">
        {cartItems?.map((item) => {
          return <Cart key={item.id} {...item} />;
        })}
      </div>

      <hr className=" shadow w-[70%] mx-auto border-1 border-indigo-900" />

      <div className=" flex justify-around mt-5 items-center mb-20">
        <h1 className=" font-semibold text-indigo-500">SubTotal</h1>
        <p className=" font-semibold text-green-600">
          $ {totalAmount.toFixed(2)}
        </p>
      </div>
    </>
  );
};

export default AddToCart;
