import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { addToCart } from "../feature/services/cartSlice";

const Detail = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  // console.log(item);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const api = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await api.json();
    setItem(data);
    setIsLoading(false);
    // console.log(data);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" p-5 shadow-lg mt-10 mb-20 rounded-lg mx-auto bg-cyan-200 w-80 md:w-[600px] lg:w-[800px] gap-3">
      <div className=" flex justify-between">
        <img
          src={item.image}
          alt=""
          className=" max-w-[200px] h-[150px] rounded "
        />
        <p className=" bg-indigo-500 h-5 text-white rounded-lg align-middle px-2 text-xs">
          {item.category}
        </p>
      </div>
      <div className=" mt-3">
        <h1 className=" text-xl font-semibold">{item.title}</h1>
        <p className=" text-yellow-700 font-semibold my-2">${item.price}</p>
        <p className=" text-sm tracking-wide">#{item.description}</p>
        <button
          onClick={()=>dispatch(addToCart(item))}
          className=" bg-indigo-600 text-white px-5 py-1 rounded mt-3"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default Detail;
