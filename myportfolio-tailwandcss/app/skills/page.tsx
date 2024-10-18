import Image from "next/image";
import Link from "next/link";

export default function Skills() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-6 pt-14">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl w-full">
        <div className="text-left md:w-1/2 px-4 md:px-8 lg:px-12 py-8 lg:py-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-cyan-200 py-4">
            My Skills
          </h1>
          <p className="text-base md:text-lg lg:text-2xl text-white font-medium mb-8 md:mb-12">
            I specialize in creating responsive websites and amazing pages using the following technologies:
          </p>
          <ul className="list-disc list-inside text-white mb-8">
            <li className="text-base md:text-lg lg:text-xl mb-2 cursor-pointer hover:text-cyan-200">HTML</li>
            <li className="text-base md:text-lg lg:text-xl mb-2 cursor-pointer hover:text-cyan-200">CSS</li>
            <li className="text-base md:text-lg lg:text-xl mb-2 cursor-pointer hover:text-cyan-200">JavaScript</li>
            <li className="text-base md:text-lg lg:text-xl mb-2 cursor-pointer hover:text-cyan-200">TypeScript</li>
            <li className="text-base md:text-lg lg:text-xl mb-2 cursor-pointer hover:text-cyan-200">Next.js</li>
            <li className="text-base md:text-lg lg:text-xl mb-2 cursor-pointer hover:text-cyan-200">Tailwand Css</li>
            <li className="text-base md:text-lg lg:text-xl mb-2 cursor-pointer hover:text-cyan-200">Git</li>

          </ul>
          <p className="text-base md:text-lg lg:text-2xl text-white font-medium mb-8">
            I can build and design responsive websites that are both visually appealing and functional.
          </p>
          <Link href="/projects">
            <button className="bg-cyan-200 text-black font-bold py-3 px-10 rounded-full shadow-lg transition duration-300 transform hover:bg-cyan-600 hover:scale-105 hover:shadow-xl">
              View My Projects
            </button>
          </Link>
        </div>
        
        <div className="flex justify-center md:w-1/2 items-center md:mt-0">
          <Image
            height={1000}
            width={1000}
            className="w-[90%] md:w-[80%] lg:w-[90%] rounded-lg object-cover"
            src="/pic.jpg" 
            alt="Skills Banner"
          />
        </div>
      </div>
    </div>
  );
}
