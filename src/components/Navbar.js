import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <NavLink to="/">
      <h1 className="homepage">{'<'}</h1>
    </NavLink>
    <NavLink to="/">
      <h1 className="header">Currency Converter</h1>
    </NavLink>
  </nav>
);

export default Navbar;
