import ME from "../../assets/me-about.jpg";

const About = () => {
  return (
    <section id="about">
      <h1 className=" text-center font-Inter mb-12 mt-0">About Me</h1>

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
          <div>
            <h1 className="animate__animated animate__fadeInUpBig">
              Code. Create. Collaborate.
            </h1>
          </div>
          {/* About Cards */}
          <p className=" mt-0 font-poppins mr-0 mb-5 max-[1000px]:m-4 max-[1000px]:mx-0 max-[1000px]:mb-6 max-[600px]:mx-0 max-[600px]:my-6 max-[600px]:text-left dark:text-slate-500">
            That's my motto in life. I'm a front-end web developer with a
            passion for building beautiful and functional web applications. I
            love coding, learning new technologies, and collaborating with
            others. <br />
            <br /> I'm also a fan of reading and writing articles about web
            development and technology. I believe that sharing knowledge is
            essential for the growth of the community, and I enjoy helping
            others learn and grow.
            <br />
            <br /> Outside of work, I enjoy spending time with my friends and
            family, traveling, and playing video games. I'm also a big fan of
            open source software and I contribute to various projects whenever I
            can. <br />
            <br />
            I'm always looking for new challenges and opportunities, so if you
            have any interesting projects in mind, please don't hesitate to
            reach out. I hope you like it!
          </p>

          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
