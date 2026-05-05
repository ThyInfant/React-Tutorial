import React, { useState } from "react";
import { getUserDetails } from "../services/githubService";

function UserCard({ user, index }) {
  const [showDetails, setShowDetails] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);

  const fetchUserDetails = async () => {
    if (userDetails) {
      setShowDetails(!showDetails);
      return;
    }
    setLoadingDetails(true);

    try {
      const detail = await getUserDetails(user.login);
      setUserDetails(detail);
      setShowDetails(true);
    } catch (err) {
      console.log("Error fetching user detail.", err);
    } finally {
      setLoadingDetails(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#082441",
        transition: "box-shadow 0.2s",
        border: "1px solid #e1e4e8",
        borderRadius: "6px",
        padding: "15px",
        margin: "10px",
        marginBottom: "15px",
        cursor: "pointer",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <img
          src={user.avatar_url}
          alt={user.login}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "1px solid #e1e4e8",
          }}
        />
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3 style={{ margin: "0 0 5px 0" }}>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#0366d6", textDecoration: "none" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {user.login}
                </a>
              </h3>
              <p
                style={{
                  display: "flex",
                  justifyContent: "start",
                  margin: "0",
                  color: "#586069",
                  fontSize: "14px",
                }}
              >
                user #{index + 1}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                fetchUserDetails();
              }}
              style={{
                padding: "6px 12px",
                color: "black",
                backgroundColor: "#5298de",
                border: "1px solid #e1e4e8",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              {loadingDetails
                ? "loading..."
                : showDetails
                  ? "Hide Detail"
                  : "Show Detail"}
            </button>
          </div>
        </div>
      </div>
      {showDetails && userDetails && (
        <div
          style={{
            marginTop: "15px",
            paddingTop: "15px",
            borderTop: '1px solid #e4e8e1"',
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              fontSize: "16px",
            }}
          >
            <div>
              <strong>Name:</strong> {userDetails.name || "Not provided"}
            </div>
            <div>
              <strong>Location:</strong>{" "}
              {userDetails.location || "Not provided"}
            </div>
            <div>
              <strong>Public Repos:</strong> {userDetails.public_repos}
            </div>
            <div>
              <strong>Followers:</strong> {userDetails.followers}
            </div>
            <div>
              <strong>Following:</strong> {userDetails.following}
            </div>
            <div>
              <strong>Account Created:</strong>{" "}
              {new Date(userDetails.created_at).toLocaleDateString()}
            </div>
          </div>

          {userDetails.bio && (
            <div style={{ marginTop: "10px" }}>
              <strong>Bio:</strong> {userDetails.bio}
            </div>
          )}

          {userDetails.hireable !== undefined && (
            <div style={{ marginTop: "10px" }}>
              <strong>Hireable:</strong>{" "}
              {userDetails.hireable ? "Available" : "Not Available"}
            </div>
          )}

          <div style={{ marginTop: "10px" }}>
            <a
              href={userDetails.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#0366d6",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              View Full Profile →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserCard;
