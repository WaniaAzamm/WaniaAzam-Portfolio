import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-6 pt-28">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center max-w-7xl w-full">
        <div className="text-left md:w-1/2 px-4 md:px-8 lg:px-12 py-4 lg:py-8">
          <h1 className="text-4xl md:text-6xl lg:text-5xl font-bold text-cyan-200 py-2 mb-4">
            About Me:
          </h1>
          <p className="text-lg md:text-xl lg:text-1xl text-white font-medium mb-4 md:mb-6">
            I am Wania Azam, a seasoned web developer with a passion for creating dynamic and user-friendly websites. My experience spans across various technologies, including HTML, CSS, JavaScript, and TypeScript.
          </p>
          <p className="text-lg md:text-xl lg:text-1xl text-white font-medium mb-4 md:mb-6">
            I thrive in collaborative environments where I can leverage my skills to contribute to exciting projects that push the boundaries of technology and design. I enjoy solving complex problems through innovative solutions, and I am always eager to learn new technologies and improve my skill set.
          </p>
          <p className="text-lg md:text-xl lg:text-1xl text-white font-medium">
            Outside of coding, I love exploring the latest trends in web design and user experience, and I am passionate about creating accessible digital experiences for all users.
          </p>
          <Link href="/skills">
          <button className="bg-cyan-200 text-black font-bold py-3 px-12 rounded-full shadow-lg hover:bg-cyan-600 transition duration-300 mt-5">
              Check out my Skills
            </button></Link>
        </div>

        <div className="flex justify-center md:w-1/2 items-center mt-4 md:mt-0">
          <Image
            height={1000}
            width={1000}
            className="w-[100%] md:w-[85%] lg:w-[100%] rounded-lg object-cover"
            src="/pic.jpg"
            alt="Profile Picture"
          />
        </div>
       
      </div>
    </div>
  );
};

export default About;
