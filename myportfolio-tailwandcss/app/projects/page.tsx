import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center px-6 pt-28 lg:pb-24">
      <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-cyan-200 mb-10">
        My Projects
      </h1>
      <div className="max-w-7xl w-full flex flex-col md:flex-wrap md:flex-row justify-center gap-10">
        <div className="flex flex-col md:flex-row md:space-x-4 w-full">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-1/2 mb-4 md:mb-0 pb-4">
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-white">
                Responsive Resume Builder Website
              </h2>
              <p className="text-gray-400 mb-4">
                Create professional resumes with ease using HTML, CSS, and
                JavaScript. This web application allows users to fill out their
                information and generate a PDF resume.
              </p>
              <div className="relative h-56 md:h-72">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                >
                  <source src="/resume.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-4 flex flex-col space-y-2 sm:space-y-0 sm:flex-row justify-center sm:space-x-4">
                <Link
                  href="https://github.com/WaniaAzamm/Hackathon-01/tree/main/milestone-05"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border border-cyan-200 text-white font-bold py-2 px-4 rounded-full hover:bg-cyan-200 hover:text-black transition duration-300 w-full sm:w-auto">
                    View on GitHub
                  </button>
                </Link>
                <Link
                  href="https://milestone-05-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border border-cyan-200 text-white font-bold py-2 px-10 rounded-full hover:bg-cyan-200 hover:text-black transition duration-300 w-full sm:w-auto">
                    View Live
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-1/2 md:mb-0">
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-white">
                Responsive Course Enrollment Website
              </h2>
              <p className="text-gray-400 mb-4">
                Enroll in courses seamlessly using Next.js and Tailwind CSS.
                This web app allows users to browse, register, and manage their
                courses effectively.
              </p>
              <div className="relative h-56 md:h-72">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                >
                  <source src="/course.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-4 flex flex-col space-y-2 sm:space-y-0 sm:flex-row justify-center sm:space-x-4">
                <Link
                  href="https://github.com/WaniaAzamm/course-enrollment-website/tree/main/milestone-tailwand%20css"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border border-cyan-200 text-white font-bold py-2 px-4 rounded-full hover:bg-cyan-200 hover:text-black transition duration-300 w-full sm:w-auto">
                    View on GitHub
                  </button>
                </Link>
                <Link
                  href="https://myapp-ashy-eight.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border border-cyan-200 text-white font-bold py-2 px-10 rounded-full hover:bg-cyan-200 hover:text-black transition duration-300 w-full sm:w-auto">
                    View Live
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 w-full">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-1/2 mb-4 md:mb-0 pb-4">
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-white">
                Adventure Game (CLI-Based)
              </h2>
              <p className="text-gray-400 mb-4">
                Embark on an exciting adventure through a command-line
                interface. Make choices that impact your journey. Built with
                TypeScript.
              </p>
              <div className="flex justify-center">
                <Link
                  href="https://github.com/WaniaAzamm/Adventure-Game"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border border-cyan-200 text-white font-bold py-2 px-4 rounded-full hover:bg-cyan-200 hover:text-black transition duration-300">
                    View on GitHub
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-1/2 md:mb-0">
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-white">
                Gym Management (CLI-Based)
              </h2>
              <p className="text-gray-400 mb-4">
                Manage gym memberships, schedules, and workouts through a
                command-line interface. Built with TypeScript.
              </p>
              <div className="flex justify-center">
                <Link
                  href="https://github.com/WaniaAzamm/gymm-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border border-cyan-200 text-white font-bold py-2 px-4 rounded-full hover:bg-cyan-200 hover:text-black transition duration-300">
                    View on GitHub
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 w-full">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-1/2 mb-4 md:mb-0 pb-4">
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-white">
                Todo List (CLI-Based)
              </h2>
              <p className="text-gray-400 mb-4">
                Manage your tasks efficiently through a command-line interface.
                Built with TypeScript.
              </p>
              <div className="flex justify-center">
                <Link
                  href="https://github.com/WaniaAzamm/Todo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border border-cyan-200 text-white font-bold py-2 px-4 rounded-full hover:bg-cyan-200 hover:text-black transition duration-300">
                    View on GitHub
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-1/2 mb-4 md:mb-0 pb-4">
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-white">
                Word Counter (CLI-Based)
              </h2>
              <p className="text-gray-400 mb-4">
                Count words, characters, and sentences easily through a
                command-line interface. Built with TypeScript.
              </p>
              <div className="flex justify-center">
                <Link
                  href="https://github.com/WaniaAzamm/Word-counter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border border-cyan-200 text-white font-bold py-2 px-4 rounded-full hover:bg-cyan-200 hover:text-black transition duration-300">
                    View on GitHub
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 w-full">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-1/2 mb-4 md:mb-0 pb-4">
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-white">
                ATM Management (CLI-Based)
              </h2>
              <p className="text-gray-400 mb-4">
                Manage ATM transactions, user accounts, and balances through a
                command-line interface. Built with TypeScript.
              </p>
              <div className="flex justify-center">
                <Link
                  href="https://github.com/WaniaAzamm/Atm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border border-cyan-200 text-white font-bold py-2 px-4 rounded-full hover:bg-cyan-200 hover:text-black transition duration-300">
                    View on GitHub
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-full md:w-1/2 mb-4 md:mb-0 pb-4">
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-white">
                Student Management (CLI-Based)
              </h2>
              <p className="text-gray-400 mb-4">
                Manage student records, enrollments, and grades through a
                command-line interface. Built with TypeScript.
              </p>
              <div className="flex justify-center">
                <Link
                  href="https://github.com/WaniaAzamm/Student-Management-syestem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="border border-cyan-200 text-white font-bold py-2 px-4 rounded-full hover:bg-cyan-200 hover:text-black transition duration-300">
                    View on GitHub
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="mt-16 text-center">
        <h1 className="text-2xl lg:text-5xl font-bold text-white">
          Check out my All Projects
        </h1>
        <p className="text-gray-400 mt-4">
          Want to see more projects? Check out my GitHub for all my work!
        </p>
        <Link
          href="https://github.com/WaniaAzamm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border border-cyan-200 text-white font-bold py-2 px-10 rounded-full hover:bg-cyan-200 hover:text-black transition duration-300 mt-5 mb-5">
            Visit My GitHub
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
