import logo from "../../assets/logo.png";
import styles from "./navbar.module.css";
import WalletBtn from "../WalletBtn";
import { useState } from "react";
const Navbar = () => {
  const [hamburgerToggle, setHamburgerToggle] = useState(false);

  return (
    <>
      <nav class="app_navbar px-lg-0 px-5">
        <figure className="mt-3">
          <img src={logo} alt="" />
        </figure>

        <div className="navlinks_items px-5 d-lg-block d-none">
          <ul className="px-0 d-flex">
            <li className={styles.nav_items} >Home</li>
            <li className={styles.nav_items} >About</li>
            <li className={styles.nav_items} >Services</li>
            <li className={styles.nav_items} >Contact</li>
          </ul>
        </div>

        <div className="d-lg-block d-none">
          <WalletBtn />
        </div>
        <div className="d-lg-none d-block">
          <img
            src={
              hamburgerToggle ? "./images/close.png" : "./images/hamburger.png"
            }
            width="26px"
            className="me-1"
            alt=""
            onClick={() => setHamburgerToggle(!hamburgerToggle)}
          />
        </div>
      </nav>


      {/* mobile view of navbar */}
      {/* xxxxxxxxxxxxxxxxxx */}
      {hamburgerToggle ? (
        <aside className="responsive_navitems_container">
          <div className="responsive_sidebar_navitems">
            <ul className="px-0">
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Team</li>
              <li>FAQS</li>
            </ul>
          </div>
          <div>
            
          </div>
        </aside>
      ) : null}
    </>
  );
};

export default Navbar;

{
  /* <nav className={"navbar navbar-expand-lg container "+ styles.navBar_main} >
  <div className={"container-fluid " + styles.nav_div}>
    <img src={logo} alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">

      <ul className={"navbar-nav me-auto m-auto mb-2 mb-lg-0 "+ styles.nav_main}>
        <li className={"nav-item "+ styles.home_nav_item}>
          <a className={"nav-link "+ styles.home_link} href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">ABOUT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PRODUCTS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">TEAM</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">FAQS</a>
        </li>
      </ul>

      <WalletBtn/>
    </div>
  </div>
</nav> */
}
