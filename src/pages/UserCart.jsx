import { useContext } from "react";
import { UserDataContext } from "../App";

function UserCart() {
  const { getUserDataId } = useContext(UserDataContext);

  console.log(getUserDataId);
  return <div>cart</div>;
}

export default UserCart;
