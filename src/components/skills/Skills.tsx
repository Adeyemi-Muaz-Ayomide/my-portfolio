// import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
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
    <section id="skills">
      <h1 className=" dark:text-[#d6d3d1] text-left lg:ml-[110px] max-[1000px]:ml-[85px] max-[600px]:ml-[25px] ">
        Tools Pack🎒
      </h1>

      <div>
        <div className=" mx-20 max-[1000px]:mx-12 max-[600px]:m-0">
          <div className=" flex flex-row flex-wrap max-[1000px]:p-4">
            {skillsSet.map((skill) => (
              <article key={skill} className="flex p-8 max-[600px]:p-4">
                <div>
                  <h4 className=" text-black text-2xl font-Inter dark:text-yellow-100">
                    {skill}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
