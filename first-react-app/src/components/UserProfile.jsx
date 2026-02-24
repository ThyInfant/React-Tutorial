function UserProfile(props) {
  return (
    <div>
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
      <p>bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
