import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/john-yinusa-a03146175/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/DonAttai/?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <Link to="/contact">
          <AiOutlineMail />
        </Link>
      </div>
      <p> &copy; 2022 John Attai Yinusa</p>
    </footer>
  );
}

export default Footer;
