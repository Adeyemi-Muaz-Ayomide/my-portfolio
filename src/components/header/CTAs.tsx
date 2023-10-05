import CV from "../../assets/cv.pdf";

const CTAs = () => {
  return (
    <div className=" mt-10 flex gap-4 justify-center items-center ">
      <a href={CV} download className=" btn bg-white max-[600px]:p-[0.75rem]">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary max-[600px]:p-[0.75rem] ">
        Get In Touch
      </a>
    </div>
  );
};

export default CTAs;
