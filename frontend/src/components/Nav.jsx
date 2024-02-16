import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = ({ setData }) => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    const key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:3000/search/${key}`, {
        method: "get",
      });
      result = await result.json();
      if (result) setData(result);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      <img
        src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
        className="logo"
      />
      {auth ? (
        <ul className="navbar">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>
          <li>
            <Link to="/update">Update Products</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
          <input
            className="search-field"
            type="text"
            placeholder="Search"
            onChange={handleSearch}
          />
        </ul>
      ) : (
        <ul className="navbar nav-right">
          <li>
            <Link to="/signup">Sign In</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Nav;
