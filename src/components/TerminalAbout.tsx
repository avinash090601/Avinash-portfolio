const TerminalAbout = () => {
  return (
    <section className="bg-black text-green-400 font-mono px-4 py-16 min-h-[400px]">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* About Me */}
        <div>
          <h3 className="text-2xl font-bold text-green-300 mb-2">About Me</h3>
          <p className="pl-4 text-white">
            I'm <span className="text-green-400 font-semibold">Avinash</span> — a passionate full-stack developer who builds modern web and mobile apps using real-world tech like React, Tailwind, Node.js, MongoDB, and Android (Java/Kotlin).
          </p>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold text-green-300 mb-2">Skills</h3>
          <ul className="pl-8 text-white list-disc">
            <li>React, Tailwind CSS, HTML, JavaScript, TypeScript</li>
            <li>Java, Android Studio, Kotlin</li>
            <li>Node.js, Express, MongoDB</li>
            <li>Firebase, SQLite, PostgreSQL</li>
            <li>QGIS, Tableau, Git, Vercel</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-bold text-green-300 mb-2">Contact</h3>
          <div className="pl-4 text-white space-y-1">
            <p>
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/avinash-chaudhary-475b2927a/"
                target="_blank"
                rel="noreferrer"
                className="underline text-green-300"
              >
                avinash-chaudhary
              </a>
            </p>
            <p>
              GitHub:{' '}
              <a
                href="https://github.com/avinash090601"
                target="_blank"
                rel="noreferrer"
                className="underline text-green-300"
              >
                avinash090601
              </a>
            </p>
            <p>
              Email:{' '}
              <a
                href="mailto:avinashchaudhary35849@gmail.com"
                className="underline text-green-300"
              >
                avinashchaudhary35849@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalAbout;
