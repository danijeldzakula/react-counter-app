import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center [&_li>a]:block [&_li>a]:p-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
