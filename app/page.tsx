import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6">
        <h1 className="text-5xl font-bold">Front-End Developer</h1>

        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          Building modern, responsive web applications using React, Next.js, and
          Tailwind CSS.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-xl"
          >
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border rounded-xl">
            Contact Me
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-10 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold">About Me</h2>

        <p className="mt-4 text-gray-600 max-w-3xl">
          I am a Front-End Developer with experience in React and Next.js,
          focused on building clean, accessible, and user-friendly web
          applications. I enjoy turning ideas into interactive digital
          experiences.
        </p>
      </section>

      {/* SKILLS */}
      <section className="px-10 py-20">
        <h2 className="text-3xl font-bold">Skills</h2>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "React",
            "Next.js",
            "JavaScript",
            "TypeScript",
            "Tailwind CSS",
            "HTML",
            "CSS",
            "Git / GitHub",
          ].map((skill) => (
            <div
              key={skill}
              className="p-4 border rounded-xl text-center hover:shadow-md transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-10 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="p-6 bg-white border rounded-xl">
            <h3 className="text-xl font-semibold">Didymus Project</h3>
            <p className="text-gray-600 mt-2">
              Church-based web platform built with Next.js and Tailwind CSS
              featuring sermons, events, and accessibility features.
            </p>
            <p className="text-sm text-gray-500 mt-3">
              Next.js • React • Tailwind • APIs
            </p>
          </div>

          {/* Project 2 */}
          <div className="p-6 bg-white border rounded-xl">
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p className="text-gray-600 mt-2">
              Personal developer portfolio showcasing modern UI and responsive
              design.
            </p>
            <p className="text-sm text-gray-500 mt-3">Next.js • Tailwind</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-10 py-20 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>

        <p className="mt-4 text-gray-600">
          Let’s connect for opportunities or collaboration.
        </p>

        <div className="mt-6 space-y-2">
          <p>Email: annettedattel@gmail.com</p>
          <p>GitHub: https://github.com/AnnetteGeorge</p>
          <p>LinkedIn: your-linkedin-url</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 border-t">
        © 2026 Your Name. Built with Next.js.
      </footer>
    </main>
  );
}
