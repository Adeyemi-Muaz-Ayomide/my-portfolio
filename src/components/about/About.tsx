import ME from "../../assets/me-about.jpg";

const About = () => {
  const boldStyling = 'font-bold text-slate-700 dark:text-yellow-100';
  return (
    <section id="about">
      <h1 className=" mb-12 mt-0 ">About Me</h1>

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
            <h2 className="animate__animated animate__fadeInUpBig">
              Code.{" "}
              <span className=" text-[#d6d3d1] dark:text-yellow-100">
                Create.
              </span>{" "}
              Collaborate.
            </h2>
          </div>
          {/* About Cards */}
          <p className=" mt-3 font-Inter mr-0 mb-5 max-[1000px]:m-4 max-[1000px]:mx-0 max-[1000px]:mb-6 max-[600px]:mx-0 max-[600px]:my-6 max-[600px]:text-left">
            I'm a{" "}
            <b className={boldStyling}>
              confident
            </b>{" "}
            and <b className={boldStyling}>naturally curious front-end web developer</b>. I'm constantly
            improving my skill set by building fast, scalable web apps using a
            variety of technologies, including React, Next.js, Tailwind CSS, and
            more. I'm always eager to learn new technologies and I'm confident
            that I can quickly pick up any new tools or frameworks that your
            project requires. <br /> <br /> I'm passionate about creating
            user-friendly and visually appealing web experiences. I'm also a big
            advocate for <b className={boldStyling}>open source projects</b> and I contribute to various
            projects whenever I can. . I love <b className={boldStyling}> coding</b>, <b className={boldStyling}>learning</b>{" "}
            new technologies, and <b className={boldStyling}>collaborating</b> with others. <br />
            <br /> I'm also a fan of <b className={boldStyling}>reading</b> and <b className={boldStyling}>writing articles</b>{" "}
            about web development and technology. I believe that sharing
            knowledge is essential for the growth of the community, and I enjoy
            helping others learn and grow.
            <br />
            <br /> Outside of work, I enjoy spending time with my <b className={boldStyling}>
              friends
            </b>{" "}
            and <b className={boldStyling}>family</b>, traveling, and playing video games.
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
