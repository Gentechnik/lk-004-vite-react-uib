import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { FaRandom } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <h3>
        If you want to reach out to me, down below are my Github and 2 random
        links
      </h3>
      <ul>
        <li>
          <a
            href="https://github.com/Gentechnik"
            title="My Github Page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/mischiefanimals/status/1624898107283591168"
            target="_blank"
            rel="noopener noreferrer"
            title="a funny Cat video"
          >
            <FaRandom />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            title="you know the rules"
          >
            <AiOutlineTwitter />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Footer;
