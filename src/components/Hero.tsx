const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Hi, I'm <span className="text-blue-600 dark:text-blue-400">Avinash</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-xl">
        I craft modern web apps with React, Tailwind CSS, and real-world creativity 🚀
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
