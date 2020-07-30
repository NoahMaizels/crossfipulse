import { useEffect } from 'react'

const Nav = () => {
  useEffect(() => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }, [])

  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item is-hidden-desktop">
            <div className="logo">
              xfi
              <b>
                <div className="pulse">
                  <div className="pulse1">Pulse</div>
                  <div className="pulse2">Pulse</div>
                </div>
              </b>
            </div>
          </a>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Ranking</a>
            <a className="navbar-item">Lending</a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link ">List</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">DeFi</a>
                <a className="navbar-item">Tokens</a>
              </div>
            </div>
            <a className="navbar-item">Earn Income</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-dark">
                  <span className="icon">
                    <i className="fab fa-telegram"> </i>
                  </span>
                </a>
                <a className="button is-dark">
                  <span className="icon">
                    <i className="fab fa-twitter"> </i>
                  </span>
                </a>
                <a className="button is-dark">
                  <span className="icon">
                    <i className="fab fa-github"> </i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav