import { useEffect, useState } from "react";
// import { UserDataContext } from "../App";
import emptyImage from "../../src/image/emptyProduct.jpg";

import axios from "axios";

function UserCart() {
  const [viewCartData, setViewCartData] = useState(null);
  const [viewTotalCartPrice, setViewTotalCartPrice] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/cart/66e1dcfc4d992b2e81647f09")
      .then((res) => setViewCartData(res?.data?.data))
      .catch((err) => console.log(err));

    axios
      .get(`http://localhost:3000/cart/totalprice/66e1dcfc4d992b2e81647f09`)
      .then((res) => setViewTotalCartPrice(res?.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteItemFromCart = (id) => {
    axios
      .delete(
        `http://localhost:3000/cart/removeitem/66e1dcfc4d992b2e81647f09`,
        {
          productId: id,
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <main className="flex justify-center">
      <section className="w-3/5">
        {viewCartData?.userCart?.map((item) => (
          <div key={item?._id} className="">
            <div className=" flex justify-between  py-2  ">
              <div className="flex  w-2/5 justify-center items-center">
                <img
                  className="border h-40 w-40"
                  src={item?.image || emptyImage}
                  alt="not found"
                />
              </div>
              <div className=" w-2/5 flex flex-col justify-center ">
                <p className="text-xl font-semibold"> {item?.productName}</p>
                <p className="text-sm">{item?.catagory}</p>
                <p className="text-md font-semibold"> ₹{item?.price}</p>
                <p className="text-sm">{item?.description}</p>
              </div>
              <div className="w-1/5  ">
                <button
                  className="text-xl font-bold border px-4 py-2 rounded-full"
                  onClick={() => {
                    deleteItemFromCart(item._id);
                  }}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="w-2/5 ">
        <div className="flex  justify-center p-5 text-xl font-bold">
          <p>Price Details</p>
        </div>
        {/* <div className="border">
          {viewCartData?.UserCart?.map((item) => (
            <div key={item._id}>
              <p>{item.price}</p>
            </div>
          ))}
        </div> */}
        <div>
          <p className="py-10 text-md px-10">
            Total MRP : {viewTotalCartPrice?.total}
          </p>
        </div>
        <div className="border">
          <button className="border w-full py-5 text-xl">Place Order</button>
        </div>
      </section>
    </main>
  );
}

export default UserCart;
