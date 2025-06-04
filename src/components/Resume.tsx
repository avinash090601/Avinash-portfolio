const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-950 text-center px-4">
      <h2 className="text-4xl font-bold mb-8">Resume</h2>

      <img
        src="/resume-preview.png"
        alt="Avinash Resume Preview"
        className="w-full max-w-4xl mx-auto shadow-xl rounded-lg"
      />

      <div className="mt-6">
        <a
          href="/Avinash_Chaudhary_Resume.pdf"
          download
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Download Resume PDF
        </a>
      </div>
    </section>
  );
};

export default Resume;
