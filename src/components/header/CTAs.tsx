import CV from "../../assets/cv.pdf";

const CTAs = () => {
  return (
    <div className=" mt-10 flex gap-5 justify-center">
      <a href={CV} download className=" btn bg-white">
        Download CV
      </a>
      <a href="#contact" className="btn bg-slate-500 text-white">
        Let's talk
      </a>
    </div>
  );
};

export default CTAs;
