import Project from "./project";

function Projects() {
  return (
    <div
      id="projects"
      className="bg-white px-4 w-full flex flex-col items-center text-center scroll-mt-24"
    >
      <h2 className="text-4xl font-bold text-gray-800 ">Projects</h2>
      <p>Here are some of my projects:</p>
      <Project />
    </div>
  );
}
export default Projects;
