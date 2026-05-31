function Header() {
  return (
    <div className="header">
      <div className="logo-container">
  <img
    src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
    alt="logo"
    className="site-logo"
  />
  <h2>amazon.in</h2>
</div>

      <div className="search-container">
        <input
          className="search"
          type="text"
          placeholder="Search Amazon"
        />

        <button className="search-btn">
          Search
        </button>
      </div>

      <div className="header-links">
        <p>Hello, Sign In</p>
        <p>Returns & Orders</p>
        <p>Cart</p>
      </div>
    </div>
  );
}

export default Header;