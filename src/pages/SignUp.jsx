import axios from "axios";
import { useForm } from "react-hook-form";
import signUpImage from "../image/shopping.jpg";

function SignUp() {
  const { register, handleSubmit, reset } = useForm();

  const submitData = (data) => {
    console.log(data);
    reset();

    axios
      .post(`http://localhost:3000/new_users`, {
        firstname: data.firstName,
        lastname: data.lastName,
        password: data.password,
        phoneNumber: data.phone,
        email: data.email,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const submitEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit(submitData);
    }
  };

  return (
    <main className="">
      <div className="flex justify-center font-semibold">
        <p className=" text-7xl pb-10">
          Create your<span className=" text-orange-400"> account...!</span>
        </p>
      </div>
      <div className="flex">
        <section className="w-1/2 ">
          <div className="flex justify-center items-center h-full">
            <img
              className=" h-full rounded w-10/12"
              src={signUpImage}
              alt="not found"
            />
          </div>
        </section>

        <section className="w-1/2  ">
          <div>
            <form
              onKeyDown={submitEnter}
              onSubmit={handleSubmit(submitData)}
              className="flex flex-col gap-6 w-10/12 "
            >
              <input
                type=""
                placeholder="First name"
                className="border h-16 text-xl rounded ps-4"
                {...register("firstName")}
              />
              <input
                type=""
                className="border h-16 text-xl rounded ps-4 "
                placeholder="Last name"
                {...register("lastName")}
              />
              <input
                className="border h-16 text-xl rounded ps-4"
                placeholder="Email"
                {...register("email")}
              />
              <input
                className="border h-16 text-xl rounded ps-4"
                placeholder="Create password"
                {...register("password")}
              />
              <input
                className="border h-16 text-xl rounded ps-4"
                placeholder="Phone number"
                {...register("phone")}
              />
              <button
                type="submit"
                className="border h-16 text-2xl font-semibold rounded  bg-orange-400"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SignUp;
