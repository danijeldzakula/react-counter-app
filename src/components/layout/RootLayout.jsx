import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

export default function RootLayout() {
  return (
    <>
      <Navbar />

      <main className="layout layout__root">
        <Outlet />
      </main>

      <footer>
        <div className="container mx-auto">
          <p>Copyright by Danijel Dzakula</p>
        </div>
      </footer>
    </>
  );
}
