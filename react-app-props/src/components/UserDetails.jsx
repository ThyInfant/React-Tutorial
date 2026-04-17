import { useContext } from "react";
import { UserContext } from "./UserContext";

function UserDetails() {
  const userData = useContext(UserContext);
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "15px",
        borderRadius: "8px",
      }}
    >
      <p>
        <strong>Name:</strong> {userData.name}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
    </div>
  );
}

export default UserDetails;
