import axios from "axios";
import { useForm } from "react-hook-form";

function AddNewProduct() {
  const { handleSubmit, register } = useForm();

  const onSubmitClick = (data) => {
    axios
      .post(`http://localhost:3000/admin/createproduct `, {
        productName: data.productName,
        price: data.price,
        category: data.category,
        discription: data.category,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="flex justify-center text-6xl font-bold">
        <p>
          List new,<span className=" text-gray-400">Product. . . !</span>
        </p>
      </div>

      <form
        className="flex flex-col py-4 gap-4"
        onSubmit={handleSubmit(onSubmitClick)}
      >
        <div className="flex gap-3  ">
          <div className="w-2/5 flex justify-center items-center border  ">
            <input className="border " type="file" {...register("image")} />
          </div>
          <div className="w-3/5  flex flex-col gap-5">
            <input
              className="border py-4 text-xl px-4"
              placeholder="product Name"
              {...register("productName")}
            />
            <input
              className="border py-4 text-xl px-4"
              placeholder=" category"
              {...register("category")}
            />
            <input
              className="border py-4 text-xl px-4"
              placeholder="price"
              {...register("price")}
            />
            <input
              className="border py-4 text-xl px-4"
              placeholder="discription"
              {...register("discription")}
            />
          </div>
        </div>

        <div className=" flex justify-center">
          <button
            className="border rounded bg-gray-300 py-4 text-xl w-1/3"
            type="submit"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewProduct;
