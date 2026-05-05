import axios from "axios";

const searchUser = async (username, location, minRepo) => {
  try {
    let searchQuery = username;

    if (location && location.trim()) {
      searchQuery += ` location:${location}`;
    }
    if (minRepo && !isNaN(minRepo) && minRepo > 0) {
      searchQuery += ` repos:>=${minRepo}`;
    }

    const res = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}`,
    );
    return {
      users: res.data.items,
      totalCount: res.data.total_count,
      query: searchQuery,
    };
  } catch (err) {
    console.log("Error finding API", err);
    throw new Error("Search failed. Please try again");
  }
};

const getUserDetails = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
    );
    const details = response.data;
    return details;
  } catch (err) {
    console.log("User detail error", err);
    throw new Error("User detail search failed. Please try again");
  }
};
export { searchUser, getUserDetails };

// export default searchUser ;

// const searchUsers = async (query, location, minRepos) => {
//   try {
//     let searchQuery = query;

//     if (location && location.trim()) {
//       searchQuery += ` location:${location.trim()}`;
//     }
//     if (minRepos && !isNaN(minRepos) && minRepos > 0) {
//       searchQuery += ` repos:>=${minRepos}`;
//     }

//     const response = await axios.get(
//       `https://api.github.com/search/users?q=${encodeURIComponent(searchQuery)}`,
//     );

//     return {
//       users: response.data.items,
//       totalCount: response.data.total_count,
//       query: searchQuery,
//       data: response,
//     };
//   } catch (err) {
//     console.log("Search API Error:", err);
//     throw new Error("Search failed. Please try again.");
//   }
// };

// const getUserDetails = async (username) => {
//   try {
//     const response = await axios.get(`https://api.gihub.com/users/${username}`);
//     const details = response.data;
//     return details;
//   } catch (err) {
//     console.log("User details error:", err);
//     throw new Error("User not found");
//   }
// };
