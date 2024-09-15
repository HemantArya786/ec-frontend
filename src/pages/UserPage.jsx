import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserDataContext } from "../App";
import axios from "axios";

function UserPage() {
  const { handleSubmit, register } = useForm();
  const { getUserDataId } = useContext(UserDataContext);

  const onSubmitClicked = (data) => {
    axios.put(`localhost:3000/update_user/${getUserDataId._id}`, {
      fistname: data.firstName,
      lastname: data.lastName,
      email: data.email,
      phoneNumber: data.phone,
      password: data.password,
    });
  };

  return (
    <main className="flex justify-center ">
      <form
        onSubmit={handleSubmit(onSubmitClicked)}
        className="flex flex-col w-1/2 gap-5"
      >
        <div className="flex justify-center text-3xl font-bold">
          <p>Edit Details</p>
        </div>
        <input
          className="border py-3 text-2xl px-4 rounded"
          placeholder="first name"
          defaultValue={getUserDataId?.firstName}
          {...register("fristName")}
        />
        <input
          className="border py-3 text-2xl px-4 rounded"
          placeholder="last name"
          defaultValue={getUserDataId?.lastName}
          {...register("lastName")}
        />
        <input
          className="border py-3 text-2xl px-4 rounded"
          placeholder="email"
          defaultValue={getUserDataId?.email}
          {...register("email")}
        />
        <input
          className="border py-3 text-2xl px-4 rounded"
          placeholder="phone"
          defaultValue={getUserDataId?.phone}
          {...register("phone")}
        />
        <input
          className="border py-3 text-2xl px-4 rounded"
          placeholder="password"
          defaultValue={getUserDataId?.password}
          {...register("password")}
        />
        <button
          type="submit"
          className="border py-3 text-2xl font-semibold bg-blue-300 rounded"
        >
          Save Details
        </button>
      </form>
    </main>
  );
}

export default UserPage;
