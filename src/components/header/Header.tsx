import CTAs from "./CTAs";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import "animate.css";

const Header = () => {
  return (
    <header
      id="header"
      className=" h-screen pt-28 overflow-hidden max-[1000px]:h-[80vh] max-[600px]:h-[140vh]"
    >
      <div className=" container text-center h-full relative">
        <h5 className=" text-xl">Hello, I'm</h5>
        <h1 className=" tracking-wide animate__animated animate__backInLeft">
          Adeyemi Muaz
        </h1>
        <h5 className="text-slate-500 font-poppins">
          Muaz, a self-taught front-end developer from Lagos, Nigeria, is a
          coding enthusiast with a passion for open source and the web platform.
        </h5>
        <CTAs />
        <HeaderSocials />

        <div className=" w-80 h-[19rem] absolute left-1/2 translate-x-[-50%] mt-16 rounded-t-[12rem] overflow-hidden pt-12 pr-6 pb-6 pl-6 bg-slate-500">
          <img src={ME} alt="picture of myself" className='' />
        </div>

        <a
          href="#contact"
          className=" absolute right-[-2.3rem] bottom-20 font-light text-base rotate-90 max-[600px]:hidden dark:text-slate-300 dark:hover:dark:text-slate-700"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
