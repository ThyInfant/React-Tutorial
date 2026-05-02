import React from "react";

function Home() {
  const things = [
    "Jesus",
    "Speacial",
    "John",
    "Peter",
    "James",
    "Andrew",
    "Matthew",
    "Simon",
    "Judas",
    "Barthelemew",
    "Philp",
  ];
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Homes</h1>

      <p style={{ display: "flex", justifyContent: "center" }}>
        Welcome to our site
      </p>
      <p style={{ display: "flex", justifyContent: "center" }}>
        Everything in this site is for learning purposes only and nothing more.
        For more realistic site stay in touch.
      </p>
      <ul>
        {things.map((things, index) => (
          <li key={index}>{things}</li>
        ))}
      </ul>
    </>
  );
}

export default Home;
