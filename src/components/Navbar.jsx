import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
   
<>
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      
     <Link className="navbar-brand" to="#">
        BLOGS </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="#">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-Link" to="C:\Users\janvi master\OneDrive\Documents\react.js\New-blog-app\new-blog-app\src\components\CreateBlog.jsx">
              CREATE BLOG
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-Link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              EXPLORE
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="#">
                  Search
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  My profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Explore page
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          /><br/>
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
     
    </div>
  </nav>

  <nav className="navbar bg-body-primary">
    <div className="container-fluid">
      
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Offcanvas
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                My Blogs
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Manage account
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="#">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Sign out
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Log out
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
         
        </div>
      </div>
    </div>
  </nav>
</>



  )
}

export default Navbar
