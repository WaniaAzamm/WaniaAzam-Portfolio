import Image from "next/image";
import Link from "next/link";

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills-container">
        <div className="skills-content">
          <h1 className="skills-title">My Skills</h1>
          <p className="skills-description">
            I specialize in creating responsive websites and amazing pages using the following technologies:
          </p>
          <ul className="skills-list">
            <li className="skills-item">HTML</li>
            <li className="skills-item">CSS</li>
            <li className="skills-item">JavaScript</li>
            <li className="skills-item">TypeScript</li>
            <li className="skills-item">Next.js</li>
            <li className="skills-item">Tailwind CSS</li>
            <li className="skills-item">Git</li>
          </ul>
          <p className="skills-description">
            I can build and design responsive websites that are both visually appealing and functional.
          </p>
          <Link href="/projects">
            <button className="skills-button">View My Projects</button>
          </Link>
        </div>
        
        <div className="skills-image">
          <Image
            height={1000}
            width={1000}
            className="image"
            src="/pic.jpg" 
            alt="Skills Banner"
          />
        </div>
      </div>
    </div>
  );
}
