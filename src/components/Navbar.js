import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
      <div className="navbar bg-base-100 z-50">
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl"><Link to='/'>JPDs Portfolio</Link></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/projects'>Projects</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  </div>
</div>
    );
};

export default Navbar;

