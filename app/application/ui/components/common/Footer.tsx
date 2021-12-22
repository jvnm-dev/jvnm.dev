import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

import { Container } from "~/application/ui/components/common/Container";

export const Footer = () => {
  return (
    <footer className="py-10">
      <Container className="flex flex-col justify-center items-center text-indigo-300">
        <h2>
          All rights reserved © Jason Van Malder {new Date().getFullYear()}
        </h2>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/jvnm_dev/"
              rel="noopener noreferrer"
              target="_blank"
              className="instagram navLink text-indigo-300"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/jvnm_dev"
              rel="noopener noreferrer"
              target="_blank"
              className="twitter navLink text-indigo-300"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jvnm-dev"
              rel="noopener noreferrer"
              target="_blank"
              className="github navLink text-indigo-300"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};
