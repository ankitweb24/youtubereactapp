import { useState } from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [state, setState] = useState("true");

  const handlerEvent = () => {
    setState(!state);
  };

  return (
    <>
      <nav>
        <div className="nav_left_elements">
          <h2>strips</h2>
        </div>
        <div className="nav_right_elements">
          <ul>
            <li>
              <NavLink
                exact
                activeClassName="activePage"
                className="listText"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="activePage"
                className="listText"
                to="/service"
              >
                service
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="activePage"
                className="listText"
                to="/about"
              >
                about us
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="activePage"
                className="listText"
                to="/contact"
              >
                contact us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="shorterMenu">
          <button onClick={handlerEvent} className="togglerBtn">
            -
          </button>
          <div className={state ? "phnMenu" : null}>
            <div className="phoneMenu">
              <ul>
                <li>
                  <NavLink
                    exact
                    activeClassName="activePage"
                    className="listText"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    activeClassName="activePage"
                    className="listText"
                    to="/service"
                  >
                    service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    activeClassName="activePage"
                    className="listText"
                    to="/about"
                  >
                    about us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    activeClassName="activePage"
                    className="listText"
                    to="/contact"
                  >
                    contact us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
