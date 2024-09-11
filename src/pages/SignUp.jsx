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
    <main>
      <div className="flex justify-center font-semibold">
        <p className=" text-7xl pb-10"> Create your account...!</p>
      </div>
      <div className="flex">
        <section className="w-1/2 ">
          <div className="flex justify-center items-center h-full">
            <img
              className=" h-auto border w-10/12"
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
                placeholder=" first name"
                className="border h-16 "
                {...register("firstName")}
              />
              <input
                type=""
                className="border h-16  "
                placeholder=" last name"
                {...register("lastName")}
              />
              <input
                className="border h-16 "
                placeholder="  email"
                {...register("email")}
              />
              <input
                className="border h-16 "
                placeholder="  create password"
                {...register("password")}
              />
              <input
                className="border h-16 "
                placeholder="  phone number"
                {...register("phone")}
              />
              <button type="submit" className="border h-16">
                submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SignUp;
