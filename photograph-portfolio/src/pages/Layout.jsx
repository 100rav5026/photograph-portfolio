import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <Link to="/">Home</Link>    
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      <Outlet />
    </>
  )
};

export default Layout;