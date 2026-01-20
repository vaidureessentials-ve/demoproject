import { Link } from "react-router-dom";

import { useState, useRef, useEffect } from "react";
import { FiUser, FiHeart, FiShoppingBag, FiSearch, FiX, FiMenu} from "react-icons/fi";
import "./Header.css";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [showCart, setShowCart] = useState(false);

  const [showSearch, setShowSearch] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const [authMode, setAuthMode] = useState("signup");

  const searchRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="header">

      <div className="mobile-left">
    <FiMenu className="icon" onClick={() => setMobileMenu(true)} />
  </div>

<Link
  to="/"
  className="site-logo"
  onClick={() => window.scrollTo(0, 0)}
>
  VAIDURE
</Link>

<nav className="nav">

<div className="nav-item">
  <Link to="/body-care">Products</Link>
  <div className="dropdown">
    <Link to="/body-care">Body Care</Link>
    <Link to="/hair-care">Hair Care</Link>
    <Link to="/gift-sets">Gift Sets</Link>
  </div>
</div>

<div className="nav-item">
  <Link to="/eco-materials">Sustainability</Link>
  <div className="dropdown">
    <Link to="/eco-materials">Eco Materials</Link>
    <Link to="/refill-program">Refill Program</Link>
    <Link to="/certifications">Certifications</Link>
  </div>
</div>

<div className="nav-item">
  <Link to="/private-label">Customization</Link>
  <div className="dropdown">
    <Link to="/private-label">Private Label</Link>
    <Link to="/packaging">Packaging</Link>
    <Link to="/fragrance">Fragrance</Link>
  </div>
</div>

<div className="nav-item">
  <Link to="/b2b-hotels">B2BSolutions</Link>
  <div className="dropdown">
    <Link to="/b2b-hotels">Hotels</Link>
    <Link to="/b2b-resorts">Resorts</Link>
    <Link to="/b2b-corporate">Corporate</Link>
  </div>
</div>

<div className="nav-item">
  <Link to="/aboutus">AboutUs</Link>
  <div className="dropdown">
    <Link to="/aboutus">AboutUs</Link>
    <Link to="/mission">Mission</Link>
  </div>
</div>

<div className="nav-item">
  <Link to="/contactUs">ContactUs</Link>
  <div className="dropdown">
    <Link to="/contactUs">ContactUs</Link>
    <Link to="/enquiry">Enquiry</Link>
    <Link to="/locations">Locations</Link>
  </div>
</div>

</nav>
        <div className="header-icons">

          <FiSearch className="icon" onClick={() => setShowSearch(!showSearch)} />

          <FiUser
          className="icon user-icon"
          onClick={() => {
          setAuthMode("signup"); // FIRST SIGNUP
          setShowAuth(true);
          }}
          />

          {/*wishlist */}

          <Link to="/wishlist" className="icon-wrapper">
            <FiHeart className="icon" />
          </Link>

          {/* cart */}

           <div className="icon-wrapper">
            <FiShoppingBag className="icon" />
          </div>

        </div>
      </header>

      {/* MOBILE DRAWER */}
<div className={`mobile-drawer ${mobileMenu ? "open" : ""}`}>
  <div className="drawer-top">
    <FiX className="icon" onClick={() => setMobileMenu(false)} />
  </div>

  <div
    className="drawer-login"
    onClick={() => {
      setAuthMode("signup");
      setShowAuth(true);
      setMobileMenu(false);
    }}
  >
    <FiUser />
    <span>Login / Sign Up</span>
  </div>

  <ul className="drawer-links">
    <li><Link to="/body-care" onClick={() => setMobileMenu(false)}>Products</Link></li>
    <li><Link to="/eco-materials" onClick={() => setMobileMenu(false)}>Sustainability</Link></li>
    <li><Link to="/private-label" onClick={() => setMobileMenu(false)}>Customization</Link></li>
    <li><Link to="/b2b-hotels" onClick={() => setMobileMenu(false)}>B2BSolutions</Link></li>
    <li><Link to="/blog" onClick={() => setMobileMenu(false)}>About</Link></li>
    <li><Link to="/support" onClick={() => setMobileMenu(false)}>Contact</Link></li>
  </ul>
</div>

{mobileMenu && (
  <div className="drawer-overlay" onClick={() => setMobileMenu(false)} />
)}

      {/* SEARCH BAR */}
      
      <div
        ref={searchRef}
        className={`header-search ${showSearch ? "open" : ""}`}
      >
        <input placeholder="Search products..." />
        <FiX className="close-search" onClick={() => setShowSearch(false)} />
      </div>

      {/* SINGUP/LOGIN MODAL */}

      {showAuth && (
  <div className="auth-overlay">
    <div className="auth-box">
      <FiX className="close" onClick={() => setShowAuth(false)} />

      {authMode === "signup" ? (
        <>
          <h2>Create Account</h2>

          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button
            className="auth-btn"
            onClick={() => setAuthMode("login")}
          >
            Sign Up
          </button>

          <p className="switch">
            Already have an account?{" "}
            <span onClick={() => setAuthMode("login")}>Login</span>
          </p>
        </>
      ) : (
        <>
          <h2>Login</h2>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button className="auth-btn">Login</button>

          <p className="switch">
            New user?{" "}
            <span onClick={() => setAuthMode("signup")}>
              Create Account
            </span>
          </p>
        </>
      )}
    </div>
  </div>
)}

      {/* CART PANEL */}

      {showCart && (
        <div className="cart-overlay">
          <div className="cart-panel">
            <FiX className="close" onClick={() => setShowCart(false)} />
            <h2>Your Cart</h2>
            <p className="empty">Your cart is empty</p>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      )}

    </>
  );
};

export default Header;
