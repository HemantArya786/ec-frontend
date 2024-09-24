// import { Button } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import emptyImage from "../../src/image/emptyProduct.jpg";
import { useEffect, useState } from "react";

function Product() {
  const [productData, setProductData] = useState();
  const { id } = useParams();

  // const { getUserDataId } = useContext(UserDataContext);

  const userId = localStorage.getItem("userData");
  console.log(userId);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((res) => setProductData(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);

  const addValueInCart = async (id) => {
    await axios
      .post(`http://localhost:3000/cart/addItem/${userId}`, {
        productId: id,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <main className="flex " id={productData?._id}>
      <section className="w-1/2 flex justify-center h-96 items-center  ">
        <img
          className=" h-full w-96 "
          src={productData?.image || emptyImage}
          alt="image not found"
        />
      </section>
      <section className="w-1/2  h-96  ">
        <div>
          <p className="text-5xl font-bold p-4 ">{productData?.productName}</p>
        </div>
        <div>
          <p className="text-xl font-bold p-4 ">₹{productData?.price} </p>
        </div>
        <div>
          <p className="text-sm font-semibold p-4 ">
            Category : {productData?.catagory}{" "}
          </p>
        </div>
        <div>
          <p className="text-md font-semibold p-4 ">
            Description : {productData?.description}{" "}
          </p>
        </div>
        <div className="flex  gap-2">
          <button className="w-1/3 border rounded py-3 text-xl font-bold bg-green-300">
            Buy
          </button>
          <button
            className="w-1/3 border rounded py-3 text-xl font-bold bg-yellow-300"
            onClick={() => {
              addValueInCart(productData._id);
            }}
          >
            Add To Cart
          </button>
        </div>
      </section>
    </main>
  );
}

export default Product;
