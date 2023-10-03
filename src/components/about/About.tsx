import ME from "../../assets/me-about.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2 className="text-slate-500 font-poppins">About Me</h2>

      <div className=" container grid grid-cols-[35%,50%] gap-[15%] max-[1024px]:gap-0 max-[1024px]:grid-cols-1">
        {/* About Me */}
        <div className=" w-full aspect-square rounded-[2rem] grid place-items-center max-[1024px]:w-2/4 max-[1024px]:mt-8 max-[1024px]:mx-auto max-[1024px]:mb-16 max-[600px]:w-[65%] max-[600px]:mt-0 max-[600px]:mr-12 max-[600px]:mb-8 bg-gradient-to-r from-transparent to bg-slate-300 ">
          {/* About Me Image */}
          <div className=" rounded-[2rem] overflow-hidden rotate-12 transition-all duration-500 ease-in hover:rotate-0 ">
            <img src={ME} alt="About me image" />
          </div>
        </div>

        {/* About Content */}
        <div className=" max-[600px]:text-center">
          {/* About Cards */}

          <p className=" mt-8 mr-0 mb-11 max-[1024px]:m-4 max-[1024px]:mx-0 max-[1024px]:mb-6 max-[600px]:mx-0 max-[600px]:my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            atque nobis harum consequuntur voluptate. Maiores rem hic enim ullam
            expedita necessitatibus repellendus rerum tempora. Officiis sequi
            dolor hic alias aliquam! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eos, nobis, repudiandae laborum vel sapiente
            beatae, nisi facere recusandae aperiam quidem in? Perspiciatis atque
            neque maxime voluptatibus voluptate, incidunt asperiores natus?
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
