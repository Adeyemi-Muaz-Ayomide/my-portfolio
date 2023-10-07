import CV from "../../assets/cv.pdf";

const CTAs = () => {
  return (
    <div className=" mt-10 flex gap-4 justify-center items-center ">
      <a href={CV} download className=" btn bg-[#d6d3d1]">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary ">
        Get In Touch
      </a>
    </div>
  );
};

export default CTAs;
