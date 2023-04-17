import { GiDeathStar } from "react-icons/gi";
import { Input } from "@mantine/core";
import { GrFormSearch } from "react-icons/gr";
import { MdShoppingBasket } from "react-icons/md";
import { Badge } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  //   console.log(cartItems);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProducts(data);
    setIsLoading(false);
  };

  const filterProduct = products.filter((item) =>
    item.title.toLowerCase().includes(search)
  );
  // console.log(filterProduct);

  const searchHandler = (e) => {
    e.preventDefault();
    navigate("/search", { state: { filterProduct } });
  };

  return (
    <div className=" flex justify-around p-5 shadow-lg bg-indigo-500 items-center nav">
      <Link to={"/"}>
        <div className="">
          <GiDeathStar className=" text-4xl text-cyan-400 hover:text-cyan-200" />
        </div>
      </Link>
      <div className=" flex items-center gap-2 lg:gap-5">
        <form action="" onSubmit={searchHandler}>
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            icon={<GrFormSearch />}
            placeholder="Search"
            radius="lg"
            className="outline-none w-28 lg:w-48"
          />
        </form>
        <Link to={"/addtocart"}>
          <div className="relative">
            <MdShoppingBasket className=" text-3xl text-cyan-400 relative" />
            <Badge
              variant="gradient"
              className="absolute bottom-5 left-4"
              gradient={{ from: "indigo", to: "cyan" }}
            >
              {cartItems.length}
            </Badge>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
