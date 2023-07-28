import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("Profile-Spam-Jam"));
  const navigate = useNavigate()

  const handleLogOut = () => {
    navigate("/");
    localStorage.setItem("Profile-Spam-Jam", null);
  };

  return (
    <nav className="main-nav">
      {" "}
      <h2 style={{ padding: "0 1rem", marginRight: "auto" }}>Spam-Jam</h2>
      <Link to="/" className="nav-item nav-btn about">
        About
      </Link>
      <Link to="/" className="nav-item nav-btn products">
        Working
      </Link>
      <Link to="/" className="nav-item nav-btn forTeams">
        Tutorial
      </Link>
      {user === null ? (
        <></>
      ) : (
        <>
          <button className="nav-item nav-links" onClick={handleLogOut}>
            Log out
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
