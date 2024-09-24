import { useEffect } from "react";

function Payment() {
  useEffect(() => {
    const data = localStorage.getItem("userData");

    console.log(data, "user data");
  }, []);

  return (
    <div>
      <p></p>
    </div>
  );
}

export default Payment;
