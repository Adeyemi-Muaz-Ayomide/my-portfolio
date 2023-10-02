import { BsPatchCheckFill } from "react-icons/bs";

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
  ];
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className=" container grid gap-8 grid-cols-1 max-[600px]:gap-4 ">
        <div className="  bg-slate-300 py-5 px-8 rounded-[2rem] border border-solid border-transparent transition-all duration-500 ease-in hover:bg-transparent hover:cursor-default hover:border-slate-500 max-[100px]:w-[80%] max-[1000px]:p-8 max-[1000px]:my-0 max-[1000px]:mx-auto max-[600px]:w-full max-[600px]:py-8 max-[600px]:px-4">
          <h3 className=" text-center mb-8 text-black text-2xl">
            My Skillsets
          </h3>
          <div className=" grid grid-cols-2 gap-y-8 max-[1000px]:p-4">
            {skillsSet.map((skill) => (
              <article key={skill} className=" flex gap-2 ">
                <BsPatchCheckFill className=" mt-1 text-slate-500" />
                <div>
                  <h4 className=" text-black">{skill}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
