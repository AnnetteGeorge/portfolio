"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    "React",
    "Next.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Node.js",
    "ASP.NET",
    "C#",
    "Git",
    "GitHub",
    "REST APIs",
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur border-b z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold text-xl">Annette George</h1>

          <nav className="hidden md:flex gap-8">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="flex flex-col p-4 gap-4">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Image
            src="/profile.jpeg"
            alt="Annette George"
            width={180}
            height={180}
            className="w-47 h-47 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
          />

          <h1 className="text-5xl font-bold mb-4">Annette George</h1>

          <h2 className="text-2xl text-gray-600 mb-6">
            Front-End Developer | React | Next.js
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Building responsive, accessible, and modern web applications using
            React, Next.js, JavaScript, and Tailwind CSS.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-black text-white rounded-lg"
            >
              View Projects
            </a>

            <a href="/resume.pdf" className="px-6 py-3 border rounded-lg">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="text-gray-600 leading-8">
          I am a Front-End Developer with a Master of Computer Applications
          (MCA) and experience developing web applications using React, Next.js,
          JavaScript, and Tailwind CSS. I enjoy creating clean, responsive,
          user-friendly interfaces and collaborating with teams to deliver
          meaningful digital experiences.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white border rounded-xl p-4 text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-xl overflow-hidden">
            <div className="h-56 bg-gray-200" />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Didymus Project</h3>

              <p className="text-gray-600">
                Church-based platform developed using Next.js and Tailwind CSS
                featuring sermons, events, accessibility features, and future
                voice translation integration.
              </p>
            </div>
          </div>

          <div className="border rounded-xl overflow-hidden">
            <div className="h-56 bg-gray-200" />

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Portfolio Website</h3>

              <p className="text-gray-600">
                Personal portfolio showcasing projects, technical skills, and
                professional experience using modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold">Front-End Developer (Volunteer)</h3>
              <p className="text-gray-600">Didymus Project | 2025 – Present</p>
            </div>

            <div>
              <h3 className="font-semibold">Bakery Clerk</h3>
              <p className="text-gray-600">
                Market on Millstream | 2023 – Present
              </p>
            </div>

            <div>
              <h3 className="font-semibold">React Developer Trainee</h3>
              <p className="text-gray-600">Rogersoft | 2022 – 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>

          <p className="mb-4">
            Open to remote Front-End Developer opportunities.
          </p>

          <p>Email: annettedattel@gmail.com</p>

          <p className="mt-2">
            GitHub:{" "}
            <a
              href="https://github.com/AnnetteGeorge"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              github.com/AnnetteGeorge
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
