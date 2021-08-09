import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className=".col-md-3 col-sm-6 writings">
            <h4>TRIVIA GAME</h4>
            <ul className="list-unstyled">
              <li>
                A website aimed at delivering fun for everyone of all ages!
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className=".col-md-3 col-sm-6 sitemap">
            <h4>Site Map</h4>
            <ul className="list-unstyled ">
              <li>
                <Link to="/quizes" className="a">
                  Play
                </Link>
              </li>
              <br></br>
              <li>
                <Link to="/create" className="a">
                  Create
                </Link>
              </li>
              <br></br>
              <li>
                <Link to="/about" className="a">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div>
        <p className="col-sm rights">Copyright ©</p>
      </div>
    </div>
  );
}

export default Footer;
