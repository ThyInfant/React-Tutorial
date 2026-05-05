import React, { useState } from "react";
import { searchUser } from "../services/githubService";
import UserCard from "./UserCard";

function SearchBar() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchDetail, setSearchDetail] = useState(null);
  const [searchList, setsearchList] = useState([]);
  const [location, setLocation] = useState("");
  const [minRepo, setMinRespo] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username.trim() && !location.trim() && !minRepo) {
      setError(
        "Please enter at least one search criteria (username, location, or minimum repos)",
      );
      return;
    }
    //reset for next search
    setError(null);
    setLoading(true);
    setSearchDetail(null);
    setsearchList([]);

    try {
      const result = await searchUser(username, location, minRepo);
      setSearchDetail(result);
      setsearchList(result.users);

      if (result.users.length == 0) {
        setError("No users found matching your criteria.");
      }
    } catch (err) {
      setError(err.message || "Looks like we could not find user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
        <div style={{ marginBottom: "20px" }}>
          <input
            placeholder="Seach by username(e.g., Nick)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "50%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <input
            placeholder="Seach by location(e.g., Canada)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ width: "50%", padding: "8px" }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <input
            placeholder="Minimum repositories (e.g., 5)"
            type="number"
            value={minRepo}
            onChange={(e) => setMinRespo(e.target.value)}
            style={{ width: "50%", padding: "8px" }}
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          style={{
            width: "53%",
            padding: "10px",
            backgroundColor: "#0366d6",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Searching..." : "Search GitHub User"}
        </button>
      </form>

      <div>
        {loading && (
          <div style={{ textAlign: "center", padding: "20px" }}>
            <p>Loading user...</p>
          </div>
        )}
      </div>
      <div>
        {error && (
          <div
            style={{
              padding: "10px",
              backgroundColor: "#ffebee",
              color: "#d52121",
              borderRadius: "4px",
              marginBottom: "20px",
            }}
          >
            {error}
          </div>
        )}
      </div>
      <div>
        {searchDetail && !loading && (
          <div>
            <div
              style={{
                padding: "10px",
                backgroundColor: "#e3f2fd",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            >
              <p>
                <strong>Found {searchDetail.totalCount} users</strong> matching:{" "}
                {searchDetail.query}
              </p>
            </div>

            {searchList.length > 0 && (
              <div>
                {searchList.map((user, index) => (
                  <UserCard key={user.id} user={user} index={index} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
