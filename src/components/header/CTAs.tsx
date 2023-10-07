import CV from "../../assets/cv.pdf";

const CTAs = () => {
   const isDisabled = true;
  return (
    <div className=" mt-10 flex gap-4 justify-center items-center ">
      <a
        href={isDisabled ? undefined : CV}
        download
        // className=" btn bg-[#d6d3d1]"
        className={`btn bg-[#d6d3d1] ${
          isDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary ">
        Get In Touch
      </a>
    </div>
  );
};

export default CTAs;
