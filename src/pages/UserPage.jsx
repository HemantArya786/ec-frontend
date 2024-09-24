import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserPage() {
  const { handleSubmit, register } = useForm();
  const [userData, setUserData] = useState();

  const navigate = useNavigate();

  const userId = localStorage.getItem("userData");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${userId}`)
      .then((res) => setUserData(res?.data?.data))
      .catch((err) => console.log(err));
  }, [userId]);

  const onSubmitClicked = (data) => {
    axios.put(`http://localhost:3000/update_user/${userId}`, {
      fistname: data.firstName || userData.firstname,
      lastname: data.lastName || userData.lastname,
      email: data.email || userData.email,
      phoneNumber: data.phone || userData.phoneNumber,
      password: data.password || userData.password,
    });
  };

  const logOut = () => {
    navigate("/home");
    localStorage.clear();
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
          defaultValue={userData?.firstname}
          {...register("fristName")}
        />
        <input
          className="border py-3 text-2xl px-4 rounded"
          placeholder="last name"
          defaultValue={userData?.lastname}
          {...register("lastName")}
        />
        <input
          className="border py-3 text-2xl px-4 rounded"
          placeholder="email"
          defaultValue={userData?.email}
          {...register("email")}
        />
        <input
          className="border py-3 text-2xl px-4 rounded"
          placeholder="phone"
          defaultValue={userData?.phoneNumber}
          {...register("phone")}
        />
        <input
          className="border py-3 text-2xl px-4 rounded"
          placeholder="password"
          defaultValue={userData?.password}
          {...register("password")}
        />
        <button
          type="submit"
          className="border py-3 text-2xl font-semibold bg-blue-300 rounded"
        >
          Save Details
        </button>
        <button
          className="border py-3 text-2xl font-semibold bg-blue-300 rounded"
          onClick={logOut}
        >
          LogOut
        </button>
      </form>
    </main>
  );
}

export default UserPage;
