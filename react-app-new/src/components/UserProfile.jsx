function UserProfile(props) {
  const { name, age, bio } = props;
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2 style={{ color: "blue" }}>Name: {name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{age}</span>
      </p>
      <p>bio: {bio}</p>
    </div>
  );
}

export default UserProfile;
