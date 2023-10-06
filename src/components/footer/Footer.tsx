import Flag from "react-world-flags";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-4 p-10 text-black bg-slate-200 dark:bg-slate-700">
      <div className="  w-full flex flex-col justify-center items-center">
        <Flag code="NG" className=" text-sm w-8 " />
      </div>
      <p className="text-center dark:text-slate-300 mt-4">
        {" "}
        &copy; {currentYear} Adeyemi Muaz. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
