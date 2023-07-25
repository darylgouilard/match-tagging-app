import { Link } from "react-router-dom";

/**
 * @name Navigation function
 * @summary Renders the navigation bar when it is called
 * @param activePage string value to check which page is currently active
 * @returns HTML element of the navigation bar
 */
export default function Navigation({activePage}) {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            style={
              activePage === "Home"
                ? { color: '#95e3ff' }
                : { color: '#fa1593' }
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/tagger"
            style={
              activePage === "Tagger"
                ? { color: '#95e3ff' }
                : { color: '#fa1593' }
            }
          >
            Tagger
          </Link>
        </li>
      </ul>
    </nav>
  );
}
