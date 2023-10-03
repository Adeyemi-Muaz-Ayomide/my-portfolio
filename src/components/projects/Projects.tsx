import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio Name",
    github: "Github Link",
    demo: "Live Demo",
  },
  {
    id: 2,
    image: IMG2,
    title: "Portfolio Name",
    github: "Github Link",
    demo: "Live Demo",
  },
  {
    id: 3,
    image: IMG3,
    title: "Portfolio Name",
    github: "Github Link",
    demo: "Live Demo",
  },
  {
    id: 4,
    image: IMG4,
    title: "Portfolio Name",
    github: "Github Link",
    demo: "Live Demo",
  },
  {
    id: 5,
    image: IMG5,
    title: "Portfolio Name",
    github: "Github Link",
    demo: "Live Demo",
  },
  {
    id: 6,
    image: IMG6,
    title: "Portfolio Name",
    github: "Github Link",
    demo: "Live Demo",
  },
];
const Projects = () => {
  const articleStyle =
    "p-5 rounded-[2rem] border border-solid border-transparent transition-all duration-500 ease-in bg-slate-500 hover:bg-transparent hover:border-slate-500";
  const imageStyle = "rounded-3xl overflow-hidden";
  const headingThreeStyle = "mt-5 mr-0 mb-8";
  const itemCta = "gap-10 flex gap-4 mb-4";
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className=" container grid grid-cols-3 gap-10 max-[1000px]:grid-cols-2 max-[1000px]:gap-5 max-[600px]:grid-cols-1 max-[600px]:gap-4">
        {data.map((data) => (
          <article className={articleStyle} key={data.id}>
            <div className={imageStyle}>
              <img src={data.image} alt={data.title} />
            </div>
            <h3 className={headingThreeStyle}>
              {data.title}
            </h3>
            <div className={itemCta}>
              <a href={data.github} className=" btn ">
                Github
              </a>
              <a href={data.demo} className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
