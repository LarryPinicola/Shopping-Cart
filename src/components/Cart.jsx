import React from "react";
import { FaTrash } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  addItemQuantity,
  removeFromCart,
  subtractItemQuantity,
} from "../feature/services/cartSlice";

const Cart = (props) => {
  const { title, price, image, quantity } = props;

  const singleItemPrice = price * quantity;

  const dispatch = useDispatch();

  return (
    <div className=" flex p-3 items-center mt-8 shadow shadow-yellow-400 justify-around bg-indigo-500 rounded-lg">
      <div className=" flex items-center gap-5">
        <img src={image} className=" max-w-[100px] h-[100px] rounded " alt="" />
        <div className=" flex flex-col gap-1">
          <h1 className=" font-bold text-white">{title.substring(0, 15)}..</h1>
          <p className=" text-green-400 font-semibold">
            ${singleItemPrice.toFixed(2)}
          </p>
          <p
            onClick={() => dispatch(removeFromCart(props))}
            className=" mt-3 cursor-pointer select-none"
          >
            <FaTrash className=" text-sm text-red-500 select-none" />
          </p>
        </div>
      </div>
      <div className=" flex flex-col lg:gap-3 items-center text-white">
        <p className="">
          <MdKeyboardDoubleArrowUp
            onClick={() => dispatch(addItemQuantity(props))}
            className=" text-sm lg:text-base select-none cursor-pointer"
          />
        </p>
        <p className=" font-semibold select-none">{quantity}</p>
        <p className="">
          <MdKeyboardDoubleArrowDown
            onClick={() =>
              quantity > 1 && dispatch(subtractItemQuantity(props))
            }
            className=" text-sm lg:text-base select-none cursor-pointer"
          />
        </p>
      </div>
    </div>
  );
};

export default Cart;
