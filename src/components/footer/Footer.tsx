import Flag from "react-world-flags";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-6 text-black bg-slate-200">
      <div className="  w-full flex flex-col justify-center items-center">
        <Flag code="NG" className=" text-sm w-6 " />
      </div>
      <p className="text-center">
        {" "}
        &copy; {currentYear} Adeyemi Muaz. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
