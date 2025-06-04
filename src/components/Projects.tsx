const projects = [
  {
    title: "MediTrack – Medication Reminder App",
    description:
      "Android app to track and remind users about their medication using Firebase, WorkManager, and SQLite.",
    link: "https://drive.google.com/file/d/1yH7dZgz1xYbFis-233LXwGWhBr7Ewyy3/view?usp=sharing", // APK link
    qr: "/qr-meditrack.png", // ✅ Your uploaded QR code image (put inside public/)
  },
  {
    title: "Global Football Match Tracker",
    description:
      "Web app with Node.js, MongoDB, EJS, and JWT for managing global football data and bookmarks.",
    link: "https://github.com/avinash090601/football-tracker",
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gray-800 px-4"
    >
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 hover:shadow-xl transition text-center"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              View Project →
            </a>

            {/* ✅ Show QR only for MediTrack */}
            {project.qr && (
              <div className="mt-4">
                <img
                  src={project.qr}
                  alt="MediTrack QR Code"
                  className="w-32 h-32 mx-auto rounded-lg shadow"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Scan to install and try MediTrack live (Android only)
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
