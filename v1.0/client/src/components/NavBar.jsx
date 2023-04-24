import React from 'react';
import StoreIcon from '@mui/icons-material/Store';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <StoreIcon /> ShopyCart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/seller/reg">
                Become a seller
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                contact us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                coupen code
              </a>
            </li>
          </ul>
        </div>
        <form className="d-flex ms-auto">
          <input
            className="form-control me-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
