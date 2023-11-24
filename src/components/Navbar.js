import Image from "next/image";
import Link from "next/link";
import {
  RiArrowDropDownLine,
  RiUserLine,
  RiShoppingBag3Line,
} from "react-icons/ri";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Logo from "../assets/logo.webp";
import { useState } from "react";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [burgerBtn, setBurgerBtn] = useState(false);

  const handleChange = () => {
    setBurgerBtn(!burgerBtn);
    document.body.style.overflow = "hidden";
    if (burgerBtn) {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="burger-btn">
          <input
            type="checkbox"
            id="checkbox"
            onChange={handleChange}
            checked={burgerBtn}
          />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link className="hover-underline-animation" href="/">
                brands <RiArrowDropDownLine />
              </Link>
            </li>
            <li>
              <Link className="hover-underline-animation" href="/">
                shop <RiArrowDropDownLine />
              </Link>
            </li>
            <li>
              <Link className="hover-underline-animation" href="/">
                premium
              </Link>
            </li>
            <li>
              <Link className="hover-underline-animation" href="/">
                gift cards
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-logo">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="nav-socials">
          <div className="affiliate ">
            <Link className="hover-underline-animation" href="/">
              become an affliliate
            </Link>
          </div>

          <ul>
            <li className="small-font">
              <FaTwitter />
            </li>
            <li className="small-font">
              <FaTiktok />
            </li>
            <li className="small-font">
              <FaInstagram />
            </li>
            <li className="bigger-font user">
              <RiUserLine />
            </li>
            <li className="bigger-font">
              <IoSearch />
            </li>
            <li className="bigger-font">
              <RiShoppingBag3Line />
              <span>0</span>
            </li>
          </ul>
        </div>
      </div>
      {burgerBtn && <MobileNav />}
    </>
  );
}
