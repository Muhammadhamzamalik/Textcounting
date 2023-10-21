import React from "react";
// import TextForm from "./TextForm";
// import Cherectorcounter from "./Cherectorcounter";
function Navbar(props) {
  
  return (
    <>
      <nav
        className={`navbar  navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                {props.home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                {props.About}
                </a>
              </li>
            </ul>
            
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                {props.Search}
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container my-3">
        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          {" "}
          {/* ${props.mode} // this is just for according to color-mode text-color will change according to mode's color  */}
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            toggle Mode
          </label>
        </div>

        {/* <TextForm heading="Enter the text to analyse"/>  */}
        {/* <Cherectorcounter/> */}
      </div>
    </>
  );
}

export default Navbar;

// Navbar.propTypes={
// title:propTypes.string.isRequired //here type is also present we can't pass any other type which we here pass // WE use it for that required this thing then it will show an error in console.log
// }

// Navbar.defaultProps={
//     title:"Hamzi"  // if we will not pass props it's orignal place we will pass it just for safety
// }
