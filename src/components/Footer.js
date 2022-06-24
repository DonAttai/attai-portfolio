import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "../styles/Footer.css";

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
      </div>
      <p> &copy; 2022 John Attai Yinusa</p>
    </footer>
  );
}

export default Footer;
