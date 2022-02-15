import React from "react";

function NavBar({ onChangePage }) {
  function handleLinkClick(e) {
    e.preventDefault();
    onChangePage(e.target.pathname);
  }

  return (
    <nav>
      <a onClick={handleLinkClick} href="/">
        Home
      </a>
      <a onClick={handleLinkClick} href="/todos">
        ToDos
      </a>
      <a onClick={handleLinkClick} href="/notepad">
        Notepad
      </a>
    </nav>
  );
}

export default NavBar;
