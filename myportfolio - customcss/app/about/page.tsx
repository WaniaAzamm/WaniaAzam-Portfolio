import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">About Me:</h1>
          <p className="about-description">
            I am Wania Azam, a seasoned web developer with a passion for creating dynamic and user-friendly websites. My experience spans across various technologies, including HTML, CSS, JavaScript, and TypeScript.
          </p>
          <p className="about-description">
            I thrive in collaborative environments where I can leverage my skills to contribute to exciting projects that push the boundaries of technology and design. I enjoy solving complex problems through innovative solutions, and I am always eager to learn new technologies and improve my skill set.
          </p>
          <p className="about-description">
            Outside of coding, I love exploring the latest trends in web design and user experience, and I am passionate about creating accessible digital experiences for all users.
          </p>
          <Link href="/skills">
            <button className="about-button">Check out my Skills</button>
          </Link>
        </div>

        <div className="about-image">
          <Image
            height={1000}
            width={1000}
            className="image"
            src="/pic.jpg"
            alt="Profile Picture"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
