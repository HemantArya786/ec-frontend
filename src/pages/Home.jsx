/* eslint-disable */

import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((res) => setProductData(res?.data?.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(productData);

  return (
    <main>
      <div className=" flex flex-wrap justify-center space-x-4   space-y-4">
        {productData?.map((item) => (
          <div id={item?._id} className=" w-64 h-80 hover:shadow-md	rounded	 ">
            <div className="flex justify-center	m-4">
              <img
                className="w-72 h-48 border"
                src={item?.image}
                alt="not found"
              />
            </div>
            <div className=" flex  flex-col px-5 	 ">
              <div className="text-2xl	font-semibold	">
                <p>{item?.productName}</p>
              </div>
              <div className="font-extralight		flex">
                <p>{item?.postiveRating} </p>
                <p>{item?.negativeRating}</p>
              </div>
              <div className="font-extralight		">
                <p>{item?.description}</p>
              </div>
              <div className="text-md font-medium	">
                <p>Rs. {item?.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
