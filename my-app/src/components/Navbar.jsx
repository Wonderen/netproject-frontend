import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="Nav">
      <div className="Nav__container">
        <Link to="/" className="Nav__brand">
          <img src="../logo.svg" className="Nav__logo" />
        </Link>

        <div className="Nav__right">
          <ul className="Nav__item-wrapper">
            <li className="Nav__item">
              <Link className="Nav__link" to="/login">Login</Link>
            </li>
            <li className="Nav__item">
              <Link className="Nav__link" to="/signup">Sign up</Link>
            </li>
            <li className="Nav__item">
              <Link className="Nav__link" to="/questionnaire">Questionnaire</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}