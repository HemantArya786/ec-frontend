import { Link } from "react-router-dom";
import offerImage from "../../src/image/offer.jpg";

function Footer() {
  return (
    <main className=" bg-black text-white">
      <div className=" flex h-80 mt-20">
        <section className="w-1/2 flex justify-center items-center  ">
          <img className="h-80 w-80 p-10  " src={offerImage} alt="not found" />
        </section>
        <section className="w-1/2 flex justify-center items-center   ">
          <div>
            <div className="flex justify-center p-5">
              <p>About us</p>
            </div>
            <div className="p-5">
              <p>
                This is random Ecommerce Website Design for personal project
              </p>
            </div>
            <div className=" gap-2 p-5 underline">
              <div className=" flex flex-col ">
                <Link to="/login">login</Link>
                <Link to="/sihnup">signUp</Link>
                <Link to="/adminlogin">admin login</Link>
              </div>
              <div className="flex flex-col">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/admin/newproduct">new product</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className=" flex justify-center pb-10">
        <p className="text-xl font-bold">@M-17 Production</p>
      </div>
    </main>
  );
}

export default Footer;
