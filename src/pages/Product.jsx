import { Button } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserDataContext } from "../App";

function Product() {
  const [productData, setProductData] = useState();
  const { id } = useParams();

  const { getUserDataId } = useContext(UserDataContext);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((res) => setProductData(res?.data?.data))
      .catch((err) => console.log(err));
  }, []);

  const addValueInCart = async (id) => {
    await axios
      .post(`http://localhost:3000/cart/addItem/${getUserDataId?._id}`, {
        productId: id,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <main className="flex " id={productData?._id}>
      <section className="w-1/2 flex justify-center h-96 items-center border ">
        <img
          className=" h-80 w-full border"
          src={productData?.image}
          alt="image not found"
        />
      </section>
      <section className="w-1/2 border h-96  ">
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
        <div className="flex border justify-around">
          <Button>Buy</Button>
          <Button
            onClick={() => {
              addValueInCart(productData._id);
            }}
          >
            Add To Cart
          </Button>
        </div>
      </section>
    </main>
  );
}

export default Product;
