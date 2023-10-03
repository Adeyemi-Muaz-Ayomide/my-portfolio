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
    'Photoshop'
  ];
  //  bg-slate-300 py-5 px-8 rounded-[2rem] border border-solid border-transparent transition-all duration-500 ease-in hover:bg-transparent hover:cursor-default hover:border-slate-500 max-[1000px]:w-[80%] max-[1000px]:p-8 max-[1000px]:my-0 max-[1000px]:mx-auto max-[600px]:w-full max-[600px]:py-8 max-[600px]:px-4 flex flex-col items-center justify-center
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2 className="text-slate-500 font-poppins">My Skills</h2>

      <div>
        <div className=" mx-20 max-[1000px]:mx-12 max-[600px]:m-0">
          <h3 className=" text-left mb-4 ml-8 max-[1000px]:ml-12 max-[600px]:ml-8 text-black text-2xl font-poppins">
            My Skillsets
          </h3>
          <div className=" flex flex-row flex-wrap max-[1000px]:p-4">
            {skillsSet.map((skill) => (
              <article key={skill} className="flex p-8 max-[600px]:p-4 ">
                <div>
                  <h4 className=" text-black text-xl font-poppins">{skill}</h4>
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
