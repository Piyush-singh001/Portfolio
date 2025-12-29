function Project() {
  const projects = [
    {
      name: "E-commerce web site",
      imageUrl: "/images/clothingPro.jpg",
      projectLink: "https://piyush-singh001.github.io/Ecommerce-website/",
    },
    {
      name: "Movie Trailor Search",
      imageUrl: "/images/moviePro.jpg",
      projectLink: "https://movie-search-app-lhrb.vercel.app/",
    },
    {
      name: "Weather App",
      imageUrl: "/images/weather-app.png",
      projectLink: "https://weather-appa.netlify.app/",
    },
    {
      name: "Printrest Clone",
      imageUrl: "/images/Printrest.jpg",
      projectLink: "https://printrest-clone.netlify.app/",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 md:gap-20 grid-cols-1 gap-3 pt-10 place-items-center">
      {projects.map((project, i) => (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={project.projectLink}
          key={i}
          className="w-3/4 md:w-[400px] h-[35vh] md:h-[400px] 
                       bg-gray-100 rounded-xl shadow-md 
                       hover:scale-105 transition"
        >
          <div className="text-4xl mb-2 p-2 rounded-2xl h-3/4">
            <img
              className="rounded-xl object-cover object-center w-full h-full"
              src={project.imageUrl}
              alt="#"
            />
          </div>
          <div className="flex flex-col items-start px-3">
            <p className="text-sm text-gray-700 text-start ">{project.name}</p>
            <h3>View Here</h3>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Project;
