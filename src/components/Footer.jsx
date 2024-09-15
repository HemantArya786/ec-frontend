import { Link } from "react-router-dom";
import offerImage from "../../src/image/offer.jpg";

function Footer() {
  return (
    <main>
      <div className="bg-gray-100 flex h-80 mt-20">
        <section className="w-1/2 flex justify-center items-center  ">
          <img className="h-80 w-80 p-10" src={offerImage} alt="not found" />
        </section>
        <section className="w-1/2 flex justify-center items-center   ">
          <div>
            <div className="flex justify-center p-5">
              <p>About</p>
            </div>
            <div className="p-5">
              <p>
                This is random Ecommerce Website Design for personal project
              </p>
            </div>
            <div className="flex flex-col  items-center gap-2 p-5">
              <div className=" flex gap-44">
                <Link to="/login">login</Link>
                <Link to="/sihnup">signUp</Link>
              </div>
              <div className="flex gap-44 p-5">
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-gray-100 flex justify-center pb-10">
        <p className="text-xl font-bold">M17 Production</p>
      </div>
    </main>
  );
}

export default Footer;
