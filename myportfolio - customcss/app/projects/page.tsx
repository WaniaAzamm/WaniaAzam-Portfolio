import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-container">
        <div className="projects-row">
          <div className="project-card">
            <div className="project-content">
              <h2 className="project-title">
                Responsive Resume Builder Website
              </h2>
              <p className="project-description">
                Create professional resumes with ease using HTML, CSS, and
                JavaScript. This web application allows users to fill out their
                information and generate a PDF resume.
              </p>
              <div className="video-container">
                <video className="video" autoPlay muted loop>
                  <source src="/resume.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="button-group">
                <Link
                  href="https://github.com/WaniaAzamm/Hackathon-01/tree/main/milestone-05"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="project-button">View on GitHub</button>
                </Link>
                <Link
                  href="https://milestone-05-nine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="project-button">View Live</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <h2 className="project-title">
                Responsive Course Enrollment Website
              </h2>
              <p className="project-description">
                Enroll in courses seamlessly using Next.js and custom CSS. This
                web app allows users to browse, register, and manage their
                courses effectively.
              </p>
              <div className="video-container">
                <video className="video" autoPlay muted loop>
                  <source src="/course.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="button-group">
                <Link
                  href="https://github.com/WaniaAzamm/course-enrollment-website/tree/main/milestone-tailwand%20css"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="project-button">View on GitHub</button>
                </Link>
                <Link
                  href="https://myapp-ashy-eight.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="project-button">View Live</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-row">
          <div className="project-card">
            <div className="project-content">
              <h2 className="project-title">Adventure Game (CLI-Based)</h2>
              <p className="project-description">
                Embark on an exciting adventure through a command-line
                interface. Make choices that impact your journey. Built with
                TypeScript.
              </p>
              <div className="button-group">
                <Link
                  href="https://github.com/WaniaAzamm/Adventure-Game"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="project-button">View on GitHub</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <h2 className="project-title">Gym Management (CLI-Based)</h2>
              <p className="project-description">
                Manage gym memberships, schedules, and workouts through a
                command-line interface. Built with TypeScript.
              </p>
              <div className="button-group">
                <Link
                  href="https://github.com/WaniaAzamm/gymm-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="project-button">View on GitHub</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-row">
          <div className="project-card">
            <div className="project-content">
              <h2 className="project-title">Todo List (CLI-Based)</h2>
              <p className="project-description">
                Manage your tasks efficiently through a command-line interface.
                Built with TypeScript.
              </p>
              <div className="button-group">
                <Link
                  href="https://github.com/WaniaAzamm/Todo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="project-button">View on GitHub</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <h2 className="project-title">Word Counter (CLI-Based)</h2>
              <p className="project-description">
                Count words, characters, and sentences easily through a
                command-line interface. Built with TypeScript.
              </p>
              <div className="button-group">
                <Link
                  href="https://github.com/WaniaAzamm/Word-counter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="project-button">View on GitHub</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="projects-row">
          <div className="project-card">
            <div className="project-content">
              <h2 className="project-title">ATM Management (CLI-Based)</h2>
              <p className="project-description">
                Manage ATM transactions, user accounts, and balances through a
                command-line interface. Built with TypeScript.
              </p>
              <div className="button-group">
                <Link
                  href="https://github.com/WaniaAzamm/Atm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="project-button">View on GitHub</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <h2 className="project-title">Student Management (CLI-Based)</h2>
              <p className="project-description">
                Manage student records, enrollments, and grades through a
                command-line interface. Built with TypeScript.
              </p>
              <div className="button-group">
                <Link
                  href="https://github.com/WaniaAzamm/Student-Management-syestem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="project-button">View on GitHub</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="all-projects">
        <h1 className="all-projects-title">Check out my All Projects</h1>
        <p className="all-projects-description">
          Want to see more projects? Check out my GitHub for all my work!
        </p>
        <Link
          href="https://github.com/WaniaAzamm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="github-button">Visit My GitHub</button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
