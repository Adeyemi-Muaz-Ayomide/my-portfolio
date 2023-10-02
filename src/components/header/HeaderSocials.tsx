import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className=" flex flex-col items-center absolute gap-3.5 left-0 bottom-12 after:content-[''] after:w-[1.5px] after:h-8 after:bg-black max-[600px]:hidden">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
