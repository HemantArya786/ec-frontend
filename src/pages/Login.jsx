import axios from "axios";
import { useForm } from "react-hook-form";
import signUpImage from "../image/cart.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  // const [loginUserData, setLoginUserData] = useState();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  let userId = localStorage.getItem("userData");
  useEffect(() => {
    if (userId) {
      console.log("hsould redirect yes");
      navigate("/profile");
    }
  }, [userId]);

  // useEffect(() => {
  //   localStorage.setItem("userData", JSON.stringify(loginUserData._id));
  // }, [loginUserData]);

  const submitDataofUser = (data) => {
    reset();

    axios
      .post(`http://localhost:3000/login`, {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res.data, "response after login api");
        localStorage.setItem("userData", res?.data?.data?._id);
        // setLoginUserData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  const clickEnterButton = (e) => {
    if (e.keyPress === "Enter") {
      handleSubmit(submitDataofUser);
    }
  };

  return (
    <main>
      <div className="flex justify-center text-7xl font-semibold pb-10 ">
        <p>
          Welcome <span className=" text-purple-400">back</span>...!
        </p>
      </div>
      <div className="flex">
        <section className="w-1/2">
          <div className="flex justify-center items-center h-full">
            <img
              className=" h-full rounded w-10/12"
              src={signUpImage}
              alt="not found"
            />
          </div>
        </section>
        <section className="w-1/2">
          <div className="flex items-center h-full">
            <form
              className="flex flex-col gap-6 w-10/12"
              onSubmit={handleSubmit(submitDataofUser)}
              onKeyDown={clickEnterButton}
            >
              <input
                placeholder="email"
                className="border h-16 text-xl rounded ps-4"
                {...register("email")}
              />
              <input
                placeholder="password"
                className="border h-16 text-xl rounded ps-4"
                {...register("password")}
              />
              <button
                className="border h-16 text-2xl rounded font-bold bg-purple-400 "
                type="submit"
              >
                Login
              </button>
              <div className=" flex justify-center flex-row">
                <p>
                  New to this site.?{" "}
                  <Link className=" text-purple-400" to="/signup">
                    Create an account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;
