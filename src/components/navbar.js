import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <div>
        Math Magicians
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isPending }) => (isPending ? 'active' : 'pending')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calculator"
              className={({ isPending }) => (isPending ? 'active' : 'pending')}
            >
              Calculator
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/quote"
              className={({ isPending }) => (isPending ? 'active' : 'pending')}
            >
              Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
