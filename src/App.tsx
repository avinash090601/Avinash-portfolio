import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import DarkModeToggle from './components/DarkModeToggle';
import TerminalAbout from './components/TerminalAbout';
import Contact from './components/Contact'; // ✅ NEW import

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <DarkModeToggle />
      <Hero />
      <Projects />
      <Resume />
      <TerminalAbout />
      <Contact /> {/* ✅ Final section */}
    </div>
  );
}

export default App;
