import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-6 pt-14">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl w-full">
        <div className="text-left md:w-1/2 px-4 md:px-8 lg:px-12 py-8 lg:py-12">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white py-4">
            Hey there! <br />
            <span className="text-cyan-200">Wania Azam</span>
          </h1>
          <p className="text-base md:text-lg lg:text-2xl text-white font-medium mb-8 md:mb-12">
            Welcome to my portfolio! Feel free to explore my projects, and don’t hesitate to reach out.
          </p>
          <Link href="/contact">
          <button className="bg-cyan-200 text-black text-xl font-bold py-3 px-12 rounded-full shadow-lg transition duration-300 transform hover:bg-cyan-600 hover:scale-105 hover:shadow-xl">
           Hire Me
          </button></Link>
        </div>
        
        <div className="flex justify-center md:w-1/2 items-center md:mt-0">
          <Image
            height={1000}
            width={1000}
            className="w-[90%] md:w-[80%] lg:w-[90%] rounded-lg object-cover"
            src="/pic.jpg"
            alt="Profile Picture"
          />
        </div>
      </div>
    </div>
  );
}
