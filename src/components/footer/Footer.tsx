import Flag from "react-world-flags";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center p-4 text-black">
      <div className="flex justify-between flex-wrap">
        <div className=" w-full h-full flex flex-col justify-center items-center">
          <Flag code="NG" className=" text-sm w-6" />
          {/* <NigeriaFlag size="2x" /> */}
        </div>
        <p className="text-center">
          {" "}
          &copy; {currentYear} Adeyemi Muaz. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
