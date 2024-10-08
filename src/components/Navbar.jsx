import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";
import LogoImage from "../image/logo.jpg";
// import { useState } from "react";
// import axios from "axios";

function Navbar() {
  // const [searchValue, setSearchValue] = useState();

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:3000/search", { search: searchValue })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, [searchValue]);

  return (
    //fixed w-full
    <main className="h-24 flex items-center  mb-10 shadow  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  ">
      <section className=" w-1/3">
        <Link to="/">
          <img className="w-20  h-20  ms-28 " src={LogoImage} alt="not found" />
        </Link>
      </section>
      <section className=" w-1/3">
        <input
          className="h-12 w-full bg-gray-200 text-xl rounded-sm ps-4 "
          placeholder="search"
          // onChange={(e) => setSearchValue(e.target.value)}
        />
      </section>
      <section className="flex  w-1/3 h-12 items-center  gap-20 justify-center">
        <div>
          <Link to="/login" className="">
            <PersonOutlineIcon />
          </Link>
        </div>
        <div>
          <Link>
            <FavoriteBorderIcon />
          </Link>
        </div>
        <div>
          <Link to={`/cart`}>
            <LocalMallIcon />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Navbar;
