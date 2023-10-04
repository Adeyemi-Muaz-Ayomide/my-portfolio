// import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const skillsSet = [
    "HTML5",
    "CSS3",
    "Javascript",
    "Bootstrap",
    "TailwindCSS",
    "ReactJS",
    "NextJS",
    "Styled Components",
    "Material UI",
    "Typescript",
    "Redux",
    "Redux Toolkit",
    "Firebase",
    "Supabase",
    "Figma",
    "Photoshop",
  ];

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2 className="text-slate-500 font-poppins">My Skills</h2>

      <div>
        <div className=" mx-20 max-[1000px]:mx-12 max-[600px]:m-0">
          <h3 className=" text-left mb-4 ml-8 max-[1000px]:ml-12 max-[600px]:ml-8 text-black text-2xl font-poppins dark:text-white">
            My Skillsets
          </h3>
          <div className=" flex flex-row flex-wrap max-[1000px]:p-4">
            {skillsSet.map((skill) => (
              <article key={skill} className="flex p-8 max-[600px]:p-4">
                <div>
                  <h4 className=" text-black text-xl font-poppins dark:text-slate-500">
                    {skill}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="container flex flex-row">
        <div></div>
      </div> */}
    </section>
  );
};

export default Experience;
