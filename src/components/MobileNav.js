import { FaTwitter, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { PiArrowRightThin } from "react-icons/pi";
import { RiUserLine } from "react-icons/ri";
import { TbMessage2Heart } from "react-icons/tb";

export default function MobileNav() {
  return (
    <div className="mobile-nav">
      <div>
        <div className="mob-links">
          <ul>
            <li>
              brands <PiArrowRightThin />
            </li>
            <li>
              shop <PiArrowRightThin />
            </li>
            <li>premium</li>
            <li>gift cards</li>
            <li>become an affiliate</li>
          </ul>
        </div>
        <div className="mob-socials">
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
          </ul>
        </div>
      </div>
      <div className="mob-login">
        <div className="login">
          <RiUserLine />
          login
        </div>
        <TbMessage2Heart />
      </div>
    </div>
  );
}
