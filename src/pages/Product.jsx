import axios from "axios";
import { useEffect, useState } from "react";

function Product(id) {
  const [productData, setProductData] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/product/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="flex ">
      <section className="w-1/2">
        <img src="" alt="image not found" />
      </section>
      <section className="w-1/2">
        <p>Title : </p>
        <p>Price : </p>
        <p>Category :</p>
        <p>Description : </p>
      </section>
    </main>
  );
}

export default Product;
