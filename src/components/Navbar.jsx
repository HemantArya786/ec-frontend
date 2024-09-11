import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Logo from "../../src/image/cartLogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    //fixed w-full
    <main className="h-24 flex items-center  mb-10 shadow   ">
      <section className=" w-1/3">
        <Link to="/">
          <img className="w-20  h-20  ms-28 " src={Logo} alt="not found" />
        </Link>
      </section>
      <section className=" w-1/3">
        <input
          className="h-12 w-full bg-gray-200 rounded-sm "
          placeholder="  search"
        />
      </section>
      <section className="flex  w-1/3 h-12 items-center  gap-20 justify-center">
        <div>
          <p className="">
            <PersonOutlineIcon />
          </p>
        </div>
        <div>
          <p>
            <FavoriteBorderIcon />
          </p>
        </div>
        <div>
          <p>
            <LocalMallIcon />
          </p>
        </div>
      </section>
    </main>
  );
}

export default Navbar;
