import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">AMRUTAM</div>
      <nav>
        <a href="/">Home</a>
        <a href="/find-doctors">Find Doctors</a>
        <a href="/about">About Us</a>
        <button>Login</button>
        <button>Sign-up</button>
      </nav>
    </header>
  );
};

export default Header;
