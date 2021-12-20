import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "remix";
import { Container } from "./Container";

export const Header = () => {
  return (
    <Container>
      <header className="app-header">
        <Link to="/">
          <span className="logo">
            Jason <span className="text--primary">Van Malder</span>
          </span>
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <a href="https://jvnm.dev">About</a>
            </li>
          </ul>
        </nav>

        <div>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/jvnm_dev/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="instagram"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/jvnm_dev"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="twitter"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jvnm-dev"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="github"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Container>
  );
};
