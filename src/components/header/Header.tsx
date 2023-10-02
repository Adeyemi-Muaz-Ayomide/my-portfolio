import CTAs from "./CTAs";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className=" h-screen pt-28 overflow-hidden max-[1024px]:h-[68vh] max-[600px]:h-screen">
      <div className=" container text-center h-full relative">
        <h5>Hello, I'm</h5>
        <h1 className=" tracking-wide">Adeyemi Muaz</h1>
        <h5 className="text-slate-500">Web Developer</h5>
        <CTAs />
        <HeaderSocials />

        <div className=" w-80 h-[30rem] absolute left-1/2 translate-x-[-50%] mt-16 rounded-t-[12rem]  overflow-hidden pt-12 pr-6 pb-6 pl-6 bg-slate-500">
          <img src={ME} alt="picture of myself" />
        </div>

        <a
          href="#contact"
          className=" absolute right-[-2.3rem] bottom-20 font-light text-base rotate-90 max-[600px]:hidden"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
